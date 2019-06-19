const express = require('express');
const mongoose = require('mongoose');
const check = require('./../Library/check');
const userResponse = require('./../Library/UserResponse');
const emailpassword = require('./../Library/Email&Password');
const Encryptpassword = require('./../Library/EncryptPassword');
const Loggerresponse = require('./../Library/LoggerResponse');
const shortid = require('shortid');
const signupmodel = mongoose.model('Signup');
const authtokenmodel = mongoose.model('Auth');
const Jwttoken = require('./../Library/Jwttoken');
const todolistmodel = mongoose.model('todoList');
const nodemailer = require('nodemailer');

let route = (req, res) => {
    console.log(req.params);
    res.send(req.params);
}
let body = (req, res) => {
    console.log(req.body);
    res.send(req.body);
}

//*SIGNUP FUNCTION*/
let signupfunction = (req, res) => {
    let Email = () => {
        return new Promise((resolve, reject) => {
            if (req.body.email) {
                if (!emailpassword.Email(req.body.email)) {
                    Loggerresponse.error('This is not a valid email', 'Email-signupfunction()', 300);
                    let apiresponse = userResponse.Message(true, 300, 'This is not a valid email', null);
                    reject(apiresponse);
                }
                else if (check.isEmpty(req.body.Password)) {
                    Loggerresponse.error('Password is missing', 'Email-signupfunction()', 300);
                    let apiresponse = userResponse.Message(true, 300, 'Password is missing', null);
                    reject(apiresponse);
                }
                else {
                    resolve(req);
                }
            }
            else {
                Loggerresponse.error('One or more parameters are missing', 'Email-signupfunction()', 300);
                let apiresponse = userResponse.Message(true, 300, 'One or more parameters are missing', null);
                reject(apiresponse);
            }
        })
    }
    let createsaveuser = () => {
        return new Promise((resolve, reject) => {
            signupmodel.findOne({ email: req.body.email }).exec((err, result) => {
                if (err) {
                    Loggerresponse.error('Error in Email', 'createsaveuser-signupfunction()', 300);
                    let apiresponse = userResponse.Message(true, 300, 'Error in Email', null);
                    reject(apiresponse);
                }
                else if (check.isEmpty(result)) {
                    let data = new signupmodel({
                        UserId: shortid.generate(),
                        countrycode: req.body.countrycode,
                        firstName: req.body.firstName,
                        lastName: req.body.lastName,
                        email: req.body.email.toLowerCase(),
                        mobileNumber: req.body.mobileNumber,
                        Password: Encryptpassword.hashpassword(req.body.Password),
                        CreatedOn: Date.now()
                    })
                    data.save((err, data) => {
                        if (err) {
                            Loggerresponse.error('Error during signup', 'createsaveuser-signupfunction()', 300);
                            let apiresponse = userResponse.Message(true, 300, 'Error during signup', null);
                            reject(apiresponse);
                        }
                        else {
                            dataObject = data.toObject();
                            resolve(dataObject);
                        }
                    })
                }
                else {
                    Loggerresponse.error('User already exist', 'createsaveuser-signupfunction()', 300);
                    let apiresponse = userResponse.Message(true, 300, 'User already exist', null);
                    reject(apiresponse);
                }
            })
        })
    }
    Email(req, res)
        .then(createsaveuser)
        .then((resolve) => {
            let apiresponse = userResponse.Message(false, 200, 'User created successfully', resolve);
            res.send(apiresponse)
        })
        .catch((err) => {
            console.log(err);
            res.send(err);
        })
}

//*LOGIN FUNCTION*/
let Loginfunction = (req, res) => {
    let finduser = () => {
        return new Promise((resolve, reject) => {
            if (req.body.email) {
                signupmodel.findOne({ email: req.body.email }).exec((err, result) => {
                    if (err) {
                        Loggerresponse.error('Error in find user', 'Loginfunction-finduser()', 300);
                        let apiresponse = userResponse.Message(true, 300, 'Unable to login', null)
                        reject(apiresponse);
                    }
                    else if (check.isEmpty(result)) {
                        Loggerresponse.error('No data available', 'Loginfunction-finduser()', 300);
                        let apiresponse = userResponse.Message(true, 300, 'No data found', null)
                        reject(apiresponse);
                    }
                    else {
                        resolve(result);
                        Loggerresponse.info('Data found in our database', 'Loginfunction-finduser()', 200);
                    }
                })
            }
            else {
                Loggerresponse.error('Parameters are missing', 'Loginfunction-finduser()', 300);
                let apiresponse = userResponse.Message(true, 300, 'Parameters are missing', null)
                reject(apiresponse);
            }
        })
    }
    let validatepassword = (fectheddata) => {
        return new Promise((resolve, reject) => {
            Encryptpassword.comparePassword(req.body.Password, fectheddata.Password, (err, result) => {
                if (err) {
                    Loggerresponse.error('Password parameter is missing', 'Loginfunction-validatepassword()', 300);
                    let apiresponse = userResponse.Message(true, 300, 'Password parameter is missing', null)
                    reject(apiresponse);
                }
                else if (result) {
                    fectheddataobj = fectheddata.toObject();
                    resolve(fectheddataobj);
                }
                else {
                    Loggerresponse.error('Password is wrong', 'Loginfunction-validatepassword()', 300);
                    let apiresponse = userResponse.Message(true, 300, 'Password is wrong', null)
                    reject(apiresponse);
                }
            })
        })
    }
    let generateToken = (alldata) => {
        return new Promise((resolve, reject) => {
            Jwttoken.generateJWT(alldata, (err, data) => {
                if (err) {
                    console.log(err);
                    Loggerresponse.error('Unable to generate token', 'Loginfunction-generateToken()', 300);
                    let apiresponse = userResponse.Message(true, 300, 'Unable to generate token', null)
                    reject(apiresponse);
                }
                else {
                    data.alldata = alldata
                    resolve(data);

                }
            })
        })
    }
    let savetokens = (alldetails) => {
        return new Promise((resolve, reject) => {
            authtokenmodel.findOne({ UserId: alldetails.alldata.UserId }).exec((err, retrievedTokenDetails) => {
                if (err) {
                    Loggerresponse.error('Unable to save token', 'Loginfunction-savetokens()', 300);
                    let apiresponse = userResponse.Message(true, 300, 'Unable to save token', null)
                    reject(apiresponse);
                }
                else if (check.isEmpty(retrievedTokenDetails)) {
                    let newdatas = new authtokenmodel({
                        UserId: alldetails.alldata.UserId,
                        authToken: alldetails.token,
                        secretkey: alldetails.secretkey
                    })
                    newdatas.save((err, finaldata) => {
                        if (err) {
                            Loggerresponse.error('Unable to generate token', 'Loginfunction-savetokens()', 300);
                            let apiresponse = userResponse.Message(true, 300, 'Unable to generate token', null)
                            reject(apiresponse);
                        }
                        else {
                            let myfinalresponse = {
                                authToken: finaldata.authToken,
                                userdetails: alldetails.alldata
                            }
                            resolve(myfinalresponse);
                        }
                    })
                }
                else {
                    retrievedTokenDetails.authToken = alldetails.token;
                    retrievedTokenDetails.secretkey = alldetails.secretkey;
                    retrievedTokenDetails.save((err, finaldetails) => {
                        if (err) {
                            Loggerresponse.error('Unable to generate token', 'Loginfunction-savetokens()', 300);
                            let apiresponse = userResponse.Message(true, 300, 'Unable to generate token', null)
                            reject(apiresponse);
                        }
                        else {
                            console.log(finaldetails);
                            let myfinalresponse = {
                                authToken: finaldetails.authToken,
                                userdetails: alldetails.alldata
                            }
                            resolve(myfinalresponse);
                        }
                    })
                }
            })
        })
    }

    finduser(req, res)
        .then(validatepassword)
        .then(generateToken)
        .then(savetokens)
        .then((resolve) => {
            let apiresponse = userResponse.Message(false, 200, 'You are Login', resolve)
            res.send(apiresponse);
        })
        .catch((err) => {
            console.log(err);
            res.send(err);
        })
}

//**Forgot Password */
let forgotPassword = (req, res) => {
    let Password = shortid.generate();
    let passwordencrypt = Encryptpassword.hashpassword(Password);
    let generatePassword = () => {
        return new Promise((resolve, reject) => {
            if (req.body.email) {
                signupmodel.findOneAndUpdate({ email: req.body.email }, { $set: { Password: passwordencrypt } }, { new: true }).exec((err, result) => {
                    if (err) {
                        Loggerresponse.error('Unable to find email', 'forgotPassword-generatePassword()', 300);
                        let apiresponse = userResponse.Message(true, 300, 'Unable to find email', null)
                        reject(apiresponse);
                    }
                    else {
                        resolve(result);
                        Loggerresponse.info('Password has been changed', 'forgotPassword-generatePassword()', 200);
                    }
                })
            }
            else {
                Loggerresponse.error('Please enter email', 'forgotPassword-generatePassword()', 300);
                let apiresponse = userResponse.Message(true, 300, 'Please enter email', null)
                reject(apiresponse);
            }
        })
    }

    let sendingmail = (alldatas) => {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'noreplyavi94@gmail.com',
                pass: 'Bumba@2802ad'
            }
        });

        var mailOptions = {
            from: 'noreplyavi94@gmail.com',
            to: alldatas.email,
            subject: 'Reset-Password',
            text: `Hi ${alldatas.firstName}
                Your password has been resetted,please use the temporarypassword ${Password} to create
                your own new password
                
                Regards,
                TODOLIST TEAM`,
        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });
    }
    generatePassword(req, res)
        .then(sendingmail)
        .then((resolve) => {
            let apiresponse = userResponse.Message(false, 200, 'Email sent for reset password', resolve)
            res.send(apiresponse);
        })
        .catch((err) => {
            console.log(err);
            res.send(err);
        })
}

//**UpdatePassword.. */
let UpdatePassword = (req, res) => {
    let email = req.body.email;
    let usershortPassword = req.body.usershortPassword;
    console.log(usershortPassword);
    let updatedPassword = Encryptpassword.hashpassword(req.body.Password);
    return new Promise((resolve, reject) => {
        signupmodel.findOne({ email: email }).exec((err, result) => {
            if (err) {
                Loggerresponse.error('Unable to find email', 'UpdatePassword()', 300);
                let apiresponse = userResponse.Message(true, 300, 'Unable to find email', null)
                reject(apiresponse);
            }
            else {
                Encryptpassword.comparePassword(usershortPassword, result.Password, (err, final) => {
                    if (err) {
                        Loggerresponse.error('Password is not matching', 'UpdatePassword()', 300);
                        let apiresponse = userResponse.Message(true, 300, 'Password is not matching', null)
                        reject(apiresponse);
                    }
                    else {
                        signupmodel.findOneAndUpdate({ email: email }, { $set: { Password: updatedPassword } }, { new: true }).exec((err, result1) => {
                            if (err) {
                                Loggerresponse.error('Unable to update password', 'UpdatePassword()', 300);
                                let apiresponse = userResponse.Message(true, 300, 'Unable to update password', null)
                                reject(apiresponse);
                            }
                            else {
                                resolve(result1);
                                console.log(result1);
                                Loggerresponse.info('Password has been updated', 'forgotPassword-generatePassword()', 200);
                            }
                        })
                    }
                })
                {
                }
            }
        })
    })
        .then((resolve) => {
            let apiresponse = userResponse.Message(false, 200, 'Password has been updated successfully', resolve)
            res.send(apiresponse);
        })
        .catch((err) => {
            console.log(err);
            res.send(err);
        })
}

//**LOGOUT FUNCTION */
let logoutfunction=(req,res)=>{
    return new Promise((resolve,reject)=>{
        authtokenmodel.deleteOne({UserId:req.body.UserId}).exec((err,result)=>{
            if(err)
            {
                Loggerresponse.error('Unable to logout', 'logoutfunction()', 300);
                let apiresponse = userResponse.Message(true, 300, 'Unable to logout', null)
                reject(apiresponse);   
            }
            else{
                resolve(result);
            }
        })
    })
    .then((resolve) => {
        let apiresponse = userResponse.Message(false, 200, 'User successfully loggedout', resolve)
        res.send(apiresponse);
    })
    .catch((err) => {
        console.log(err);
        res.send(err);
    })
}

//**Create ToDoList */
let createTodoList = (req, res) => {
    return new Promise((resolve,reject)=>{
        let ListId = shortid.generate();
        let SubItemId=shortid.generate();
        let ItemId=shortid.generate();
        let ListName = req.body.ListName;
        let SubItemName=req.body.SubItemName;
        let ItemName=req.body.ItemName;

        if(check.isEmpty(ListName))
        {
        Loggerresponse.error('Please provide ListName', 'createTodoList()', 300);
        let apiresponse = userResponse.Message(true, 300, 'Please provide ListName', null)
        reject(apiresponse);
        }
        else if (check.isEmpty(SubItemName)||check.isEmpty(ItemName)) {
            let Lists = new todolistmodel({
                ListId:ListId,
                UserId:req.params.UserId,
                ListName:ListName,
            })
            Lists.save((err,result)=>{
                if(err)
                {
                    Loggerresponse.error('Unable to create TodoList', 'createTodoList()', 300);
                    let apiresponse = userResponse.Message(true, 300, 'Unable to create TodoList', null)
                    reject(apiresponse);
                }
                else{
                    Loggerresponse.info('List created successfully', 'createTodoList()', 200);
                    resolve(result);
                }
            })
        }
        else{
            let Lists = new todolistmodel({
                ListId:ListId,
                UserId:req.params.UserId,
                ListName:ListName,
                ItemName:ItemName,
                SubItemName:SubItemName,
                ItemId:ItemId,
                SubItemId:SubItemId
            })
            Lists.save((err,result)=>{
                if(err)
                {
                    Loggerresponse.error('Unable to create TodoList', 'createTodoList()', 300);
                    let apiresponse = userResponse.Message(true, 300, 'Unable to create TodoList', null)
                    reject(apiresponse);
                }
                else{
                    Loggerresponse.info('List created successfully', 'createTodoList()', 200);
                    resolve(result);
                }
            })
        }
    })
        .then((resolve) => {
            let apiresponse = userResponse.Message(false, 200, 'TodoList created successfully', resolve)
            res.send(apiresponse);
        })
        .catch((err) => {
            console.log(err);
            res.send(err);
        })
}

//**Additems.. */
let addItems = (req, res) => {
    let ItemName = req.body.ItemName;
    let ListId = req.params.ListId;
    let ItemId = shortid.generate();
    return new Promise((resolve, reject) => {
        if (check.isEmpty(ItemName)) {
            Loggerresponse.error('Please provide ItemName', 'addItems()', 300);
            let apiresponse = userResponse.Message(true, 300, 'Please provide ItemName', null)
            reject(apiresponse);
        }
        else {
            todolistmodel.findOneAndUpdate({ UserId: req.params.UserId, ListId: ListId },
                { $push: { ItemName: ItemName, ItemId: ItemId } }, { new: true }).exec((err, result) => {
                    if (err) {
                        Loggerresponse.error('Unable to add items', 'addItems()', 300);
                        let apiresponse = userResponse.Message(true, 300, 'Unable to add items', null)
                        reject(apiresponse);
                    }
                    else {
                        Loggerresponse.info('Items added successfully', 'addItems()', 200);
                        resolve(result);
                    }
                })
        }
    })
        .then((resolve) => {
            let apiresponse = userResponse.Message(false, 200, 'Items added successfully', resolve)
            res.send(apiresponse);
        })
        .catch((err) => {
            console.log(err);
            res.send(err);
        })
}

//**AddSubItems.. */
let addsubItems = (req, res) => {
    let SubItemName = req.body.SubItemName;
    let SubItemId = shortid.generate();
    return new Promise((resolve, reject) => {
        if (check.isEmpty(SubItemName)) {
            Loggerresponse.error('Please provide SubItemName', 'addsubItems()', 300);
            let apiresponse = userResponse.Message(true, 300, 'Please provide SubItemName', null)
            reject(apiresponse);
        }
        else {
            todolistmodel.findOneAndUpdate({ UserId: req.params.UserId,ListId: req.params.ListId,ItemName: req.body.ItemName }
                , { $push: { SubItemId: SubItemId, SubItemName: SubItemName } }, { new: true }, (err, result) => {
                    if (err) {
                        Loggerresponse.error('Unable to add subitems', 'addsubItems()', 300);
                        let apiresponse = userResponse.Message(true, 300, 'Unable to subadd items', null)
                        reject(apiresponse);
                    }
                    else {
                        Loggerresponse.info('Subitems added successfully', 'addsubItems()', 200);
                        resolve(result);
                    }
                })
        }
    })
        .then((resolve) => {
            let apiresponse = userResponse.Message(false, 200, 'Sub-items added successfully', resolve)
            res.send(apiresponse);
        })
        .catch((err) => {
            console.log(err);
            res.send(err);
        })
}

//**AllList */
let getallLists = (req, res) => {
    return new Promise((resolve, reject) => {
        todolistmodel.find().exec((err, result) => {
            if (err) {
                Loggerresponse.error('Unable to fetch allList', 'getallLists()', 300);
                let apiresponse = userResponse.Message(true, 300, 'Unable to fetch allList', null)
                reject(apiresponse);
            }
            else {
                Loggerresponse.info('All data fecthed successfully', 'getallLists()', 200);
                resolve(result);
            }
        })
    })
        .then((resolve) => {
            let apiresponse = userResponse.Message(false, 200, 'All data fecthed successfully', resolve)
            res.send(apiresponse);
        })
        .catch((err) => {
            console.log(err);
            res.send(err);
        })
}

//**Getlistby UserID */
let getlistbyUserId = (req, res) => {
    return new Promise((resolve, reject) => {
        todolistmodel.find({ UserId: req.params.UserId }).exec((err, result) => {
            if (err) {
                Loggerresponse.error('Unable to fetch allList', 'getlistbyUserId()', 300);
                let apiresponse = userResponse.Message(true, 300, 'Unable to fetch allList', null)
                reject(apiresponse);
            }
            else {
                Loggerresponse.info('Data fecthed successfully', 'getlistbyUserId()', 200);
                resolve(result);
            }
        })
    })
        .then((resolve) => {
            let apiresponse = userResponse.Message(false, 200, 'Data fecthed successfully', resolve)
            res.send(apiresponse);
        })
        .catch((err) => {
            console.log(err);
            res.send(err);
        })
}

//**getlist by userid and listid */
let getlistbyUserIdlistId = (req, res) => {
    return new Promise((resolve, reject) => {
        todolistmodel.find({ UserId: req.params.UserId,ListId: req.params.ListId }).exec((err, result) => {
            if (err) {
                Loggerresponse.error('Unable to fetch allList', 'getlistbyUserId()', 300);
                let apiresponse = userResponse.Message(true, 300, 'Unable to fetch allList', null)
                reject(apiresponse);
            }
            else {
                Loggerresponse.info('Data fecthed successfully', 'getlistbyUserId()', 200);
                resolve(result);
            }
        })
    })
        .then((resolve) => {
            let apiresponse = userResponse.Message(false, 200, 'Data fecthed successfully', resolve)
            res.send(apiresponse);
        })
        .catch((err) => {
            console.log(err);
            res.send(err);
        })
}

//**EditList */
let EditList = (req, res) => {
    let data = req.body;
    console.log(data);
    return new Promise((resolve, reject) => {
        todolistmodel.updateOne({ UserId: req.params.UserId, ListId: req.params.ListId }, data, { multi: true }).exec((err, result) => {
            if (err) {
                Loggerresponse.error('Error occured in editList', 'editlist()', 300);
                let apiresponse = userResponse.Message(true, 300, 'Error occured in editList', null)
                reject(apiresponse);
            }
            else if (check.isEmpty(result)) {
                Loggerresponse.error('Empty in editList', 'editlist()', 300);
                let apiresponse = userResponse.Message(true, 300, 'Empty in editList', null)
                reject(apiresponse);
            }
            else {
                Loggerresponse.info('List edited successfully', 'editlist()', 200);
                resolve(result);
            }
        })
    })
        .then((resolve) => {
            let apiresponse = userResponse.Message(false, 200, 'List edited successfully', resolve)
            res.send(apiresponse);
        })
        .catch((err) => {
            console.log(err);
            res.send(err);
        })
}

//**DeleteItem */
let DeleteItem = (req, res) => {
    return new Promise((resolve, reject) => {
        todolistmodel.deleteOne({UserId: req.params.UserId, ListId:req.params.ListId }).exec((err,result) => {
            if (err) {
                Loggerresponse.error('Error in DeleteItem', 'DeleteItem-Deleteitemfunction()', 300);
                let apiresponse = userResponse.Message(true, 300, 'Error in DeleteItem', null)
                reject(apiresponse);
            }
            else if (check.isEmpty(result)) {
                Loggerresponse.error('Empty in DeleteItem', 'DeleteItem-Deleteitemfunction()', 300);
                let apiresponse = userResponse.Message(true, 300, 'Empty in DeleteItem', null)
                reject(apiresponse);
            }
            else {
                resolve(result)
            }
        })
    })
    .then((resolve) => {
        let apiresponse = userResponse.Message(false, 200, 'Data deleted successfully', resolve);
        res.send(apiresponse)
    })
    .catch((err) => {
        console.log(err);
        res.send(err);
    })
}

module.exports = {
    route: route,
    body: body,
    signupfunction: signupfunction,
    Loginfunction: Loginfunction,
    createTodoList: createTodoList,
    getallLists: getallLists,
    getlistbyUserIdlistId:getlistbyUserIdlistId,
    getlistbyUserId: getlistbyUserId,
    EditList: EditList,
    DeleteItem: DeleteItem,
    addItems: addItems,
    addsubItems: addsubItems,
    forgotPassword: forgotPassword,
    UpdatePassword: UpdatePassword,
    logoutfunction:logoutfunction
    
}