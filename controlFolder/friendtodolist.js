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

//**GET FRIENDS ALLTODOLIST */
let getusertodolist = (req, res) => {
    let userdetails = () => {
        return new Promise((resolve, reject) => {
            if (check.isEmpty(req.body.UserId && req.body.friendId)) {
                Loggerresponse.error('Error in userdetails', 'userdetails-getusertodolist()', 300);
                let apiresponse = userResponse.Message(true, 300, 'Please fill the required parameters', null)
                reject(apiresponse);
            }
            else {
                signupmodel.find({ UserId: req.body.UserId }).exec((err, result) => {
                    if (err) {
                        Loggerresponse.error('Error in userdetails', 'userdetails-getusertodolist()', 300);
                        let apiresponse = userResponse.Message(true, 300, 'Unable to fetch data', null)
                        reject(apiresponse);
                    }
                    else if (check.isEmpty(result)) {
                        Loggerresponse.error('Error in userdetails', 'userdetails-getusertodolist()', 300);
                        let apiresponse = userResponse.Message(true, 301, 'No data found', null)
                        reject(apiresponse);
                    }
                    else {
                        resolve(result);
                    }
                })
            }
        })
    }
    let checkfriendId = (fetcheddata) => {
        //console.log(fetcheddata);
        //console.log(req.body.friendId);
        return new Promise((resolve, reject) => {
            let allfriends = fetcheddata[0].friends
            let friendsarray=[];
            for (let x of allfriends) {
                //console.log(x.friendId);
                friendsarray.push(x.friendId);
            }
            //console.log(friendsarray);
            for(let x=0;x<friendsarray.length;x++)
            {
                if(friendsarray[x]===req.body.friendId)
                {
                    resolve(fetcheddata);
                }
                else{
                    resolve(fetcheddata);
                }
        }
        })
    }
    let getfriendtodolist = () => {
        return new Promise((resolve, reject) => {
            todolistmodel.find({ UserId: req.body.friendId }).exec((err, result) => {
                if (err) {
                    Loggerresponse.error('Error in getfriendtodolist', 'getfriendtodolist-getusertodolist()', 300);
                    let apiresponse = userResponse.Message(true, 300, 'Some error occured', null)
                    reject(apiresponse);
                }
                else if (check.isEmpty(result)) {
                    Loggerresponse.error('Error in getfriendtodolist', 'getfriendtodolist-getusertodolist()', 300);
                    let apiresponse = userResponse.Message(true, 301, 'No data found', null)
                    reject(apiresponse);
                }
                else {
                    resolve(result);
                }
            })
        })
    }
    userdetails(req, res)
        .then(checkfriendId)
        .then(getfriendtodolist)
        .then((resolve) => {
            let apiresponse = userResponse.Message(false, 200, 'Data fetched successfully', resolve);
            res.send(apiresponse)
        })
        .catch((err) => {
            console.log(err);
            res.send(err);
        })
}

//**GET FRIEND SINGLETODOLIST */
let singleviewtodolist=(req,res)=>{
    let userdetails = () => {
        return new Promise((resolve, reject) => {
            if (check.isEmpty(req.body.UserId && req.body.friendId && req.body.ListId)) {
                Loggerresponse.error('Error in userdetails', 'userdetails-getusertodolist()', 300);
                let apiresponse = userResponse.Message(true, 300, 'Please fill the required parameters', null)
                reject(apiresponse);
            }
            else {
                signupmodel.find({ UserId: req.body.UserId }).exec((err, result) => {
                    if (err) {
                        Loggerresponse.error('Error in userdetails', 'userdetails-getusertodolist()', 300);
                        let apiresponse = userResponse.Message(true, 300, 'Unable to fetch data', null)
                        reject(apiresponse);
                    }
                    else if (check.isEmpty(result)) {
                        Loggerresponse.error('Error in userdetails', 'userdetails-getusertodolist()', 300);
                        let apiresponse = userResponse.Message(true, 300, 'No data found', null)
                        reject(apiresponse);
                    }
                    else {
                        resolve(result);
                    }
                })
            }
        })
    }
    let checkfriendId = (fetcheddata) => {
        return new Promise((resolve, reject) => {
            let allfriends = fetcheddata[0].friends
            let friendsarray=[];
            for (let x of allfriends) {
                friendsarray.push(x.friendId);
            }
            
            for(let x=0;x<friendsarray.length;x++)
            {
                if(friendsarray[x]===req.body.friendId)
                {
                    resolve(fetcheddata);
                }
                else{
                    resolve(fetcheddata);
                }
        }
        })
    }
    let getfriendtodolist = () => {
        return new Promise((resolve, reject) => {
            todolistmodel.find({ UserId: req.body.friendId,ListId:req.body.ListId }).exec((err, result) => {
                if (err) {
                    Loggerresponse.error('Error in getfriendtodolist', 'getfriendtodolist-getusertodolist()', 300);
                    let apiresponse = userResponse.Message(true, 300, 'Some error occured', null)
                    reject(apiresponse);
                }
                else if (check.isEmpty(result)) {
                    Loggerresponse.error('Error in getfriendtodolist', 'getfriendtodolist-getusertodolist()', 300);
                    let apiresponse = userResponse.Message(true, 300, 'No data found', null)
                    reject(apiresponse);
                }
                else {
                    resolve(result);
                }
            })
        })
    }
    userdetails(req, res)
        .then(checkfriendId)
        .then(getfriendtodolist)
        .then((resolve) => {
            let apiresponse = userResponse.Message(false, 200, 'Data fetched successfully', resolve);
            res.send(apiresponse)
        })
        .catch((err) => {
            console.log(err);
            res.send(err);
        })
}

//**EDIT FRIEND'S TODOLIST */
let editfriendlist=(req,res)=>{
    let userdetails = () => {
        return new Promise((resolve, reject) => {
            if (check.isEmpty(req.params.UserId && req.params.friendId && req.body.ListId &&
                 req.body.listModifierId && req.body.listModifierName)) {
                Loggerresponse.error('Error in userdetails', 'userdetails-getusertodolist()', 300);
                let apiresponse = userResponse.Message(true, 300, 'Please fill the required parameters', null)
                reject(apiresponse);
            }
            else {
                signupmodel.find({ UserId: req.params.UserId }).exec((err, result) => {
                    if (err) {
                        Loggerresponse.error('Error in userdetails', 'userdetails-getusertodolist()', 300);
                        let apiresponse = userResponse.Message(true, 300, 'Unable to fetch data', null)
                        reject(apiresponse);
                    }
                    else if (check.isEmpty(result)) {
                        Loggerresponse.error('Error in userdetails', 'userdetails-getusertodolist()', 300);
                        let apiresponse = userResponse.Message(true, 300, 'No data found', null)
                        reject(apiresponse);
                    }
                    else {
                        resolve(result);
                    }
                })
            }
        })
    }
    let checkfriendId = (fetcheddata) => {
        return new Promise((resolve, reject) => {
            let allfriends = fetcheddata[0].friends
            let friendsarray=[];
            for (let x of allfriends) {
                friendsarray.push(x.friendId);
            }
            for(let x=0;x<friendsarray.length;x++)
            {
                if(friendsarray[x]===req.params.friendId)
                {
                    resolve(fetcheddata);
                }
                else{
                    resolve(fetcheddata);
                }
        }
        })
    }
    let EditList = () => {
        let data =req.body;                  
        //console.log(data);
        return new Promise((resolve, reject) => {
            todolistmodel.updateOne({ UserId: req.params.friendId, ListId: req.body.ListId }, data, { multi: true }).exec((err, result) => {
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
    }
    userdetails(req, res)
        .then(checkfriendId)
        .then(EditList)
        .then((resolve) => {
            let apiresponse = userResponse.Message(false, 200, 'Data edited successfully', resolve);
            res.send(apiresponse)
        })
        .catch((err) => {
            console.log(err);
            res.send(err);
        })
}

let deletefriendtodolist=(req,res)=>{
    let userdetails = () => {
        return new Promise((resolve, reject) => {
            if (check.isEmpty(req.body.UserId && req.body.friendId && req.body.ListId)) {
                Loggerresponse.error('Error in userdetails', 'userdetails-getusertodolist()', 300);
                let apiresponse = userResponse.Message(true, 300, 'Please fill the required parameters', null)
                reject(apiresponse);
            }
            else {
                signupmodel.find({ UserId: req.body.UserId }).exec((err, result) => {
                    if (err) {
                        Loggerresponse.error('Error in userdetails', 'userdetails-getusertodolist()', 300);
                        let apiresponse = userResponse.Message(true, 300, 'Unable to fetch data', null)
                        reject(apiresponse);
                    }
                    else if (check.isEmpty(result)) {
                        Loggerresponse.error('Error in userdetails', 'userdetails-getusertodolist()', 300);
                        let apiresponse = userResponse.Message(true, 300, 'No data found', null)
                        reject(apiresponse);
                    }
                    else {
                        resolve(result);
                    }
                })
            }
        })
    }
    let checkfriendId = (fetcheddata) => {
        return new Promise((resolve, reject) => {
            let allfriends = fetcheddata[0].friends
            let friendsarray=[];
            for (let x of allfriends) {
                friendsarray.push(x.friendId);
            }
            for(let x=0;x<friendsarray.length;x++)
            {
                if(friendsarray[x]===req.body.friendId)
                {
                    resolve(fetcheddata);
                }
                else{
                    resolve(fetcheddata);
                }
        }
        })
    }
    let deletelist = () => {
        return new Promise((resolve, reject) => {
            todolistmodel.deleteOne({UserId: req.body.friendId, ListId:req.body.ListId }).exec((err,result) => {
                if (err) {
                    Loggerresponse.error('Error in DeleteList', 'DeleteList-deletelist()', 300);
                    let apiresponse = userResponse.Message(true, 300, 'Error in DeleteList', null)
                    reject(apiresponse);
                }
                else if (check.isEmpty(result)) {
                    Loggerresponse.error('Empty in DeleteList', 'DeleteList-deletelist()', 300);
                    let apiresponse = userResponse.Message(true, 300, 'Empty in DeleteList', null)
                    reject(apiresponse);
                }
                else {
                    resolve(result)
                }
            })
        })
    }
    userdetails(req, res)
        .then(checkfriendId)
        .then(deletelist)
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
    getusertodolist: getusertodolist,
    singleviewtodolist:singleviewtodolist,
    editfriendlist:editfriendlist,
    deletefriendtodolist:deletefriendtodolist
}