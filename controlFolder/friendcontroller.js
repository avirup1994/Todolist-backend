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

//**GET ALL USERS */
let getallusers = (req, res) => {
    return new Promise((resolve, reject) => {
        signupmodel.find().exec((err, result) => {
            if (err) {
                Loggerresponse.error('Error in getallusers', 'getallusers()', 300);
                let apiresponse = userResponse.Message(true, 300, 'Unable to fetch data', null)
                reject(apiresponse);
            }
            else if (check.isEmpty(result)) {
                Loggerresponse.error('Error in getallusers', 'getallusers()', 300);
                let apiresponse = userResponse.Message(true, 300, 'Unable to fetch data', null)
                reject(apiresponse);
            }
            else {
                resolve(result);
                Loggerresponse.info('Data found in our database', 'getallusers()', 200);
            }
        })
    })
        .then((resolve) => {
            let apiresponse = userResponse.Message(false, 200, 'Data fecthed successfully', resolve);
            res.send(apiresponse)
        })
        .catch((err) => {
            console.log(err);
            res.send(err);
        })
}

//**FRIEND REQUEST SENT */
let requestsent = (req, res) => {
    return new Promise((resolve, reject) => {
        signupmodel.find({ UserId: req.params.UserId }).select('friendRequestSent').exec((err, result) => {
            if (err) {
                Loggerresponse.error('Error in requestsent', 'requestsent()', 300);
                let apiresponse = userResponse.Message(true, 300, 'Unable to fetch data', null)
                reject(apiresponse);
            }
            else if (check.isEmpty(result)) {
                Loggerresponse.error('Error in requestsent', 'requestsent()', 300);
                let apiresponse = userResponse.Message(true, 300, 'Data empty', null)
                reject(apiresponse);
            }
            else {
                resolve(result);
            }
        })
    })
        .then((resolve) => {
            let apiresponse = userResponse.Message(false, 200, 'Data fecthed successfully', resolve);
            res.send(apiresponse)
        })
        .catch((err) => {
            console.log(err);
            res.send(err);
        })
}

//**FRIEND REQUEST RECEIVED */
let requestreceived = (req, res) => {
    return new Promise((resolve, reject) => {
        signupmodel.find({ UserId: req.params.UserId }).select('friendRequestRecieved').exec((err, result) => {
            if (err) {
                Loggerresponse.error('Error in requestreceived', 'requestsent()', 300);
                let apiresponse = userResponse.Message(true, 300, 'Unable to fetch data', null)
                reject(apiresponse);
            }
            else if (check.isEmpty(result)) {
                Loggerresponse.error('Error in requestreceived', 'requestsent()', 300);
                let apiresponse = userResponse.Message(true, 300, 'Data empty', null)
                reject(apiresponse);
            }
            else {
                resolve(result);
            }
        })
    })
        .then((resolve) => {
            let apiresponse = userResponse.Message(false, 200, 'Data fecthed successfully', resolve);
            res.send(apiresponse)
        })
        .catch((err) => {
            console.log(err);
            res.send(err);
        })
}

//**FRIEND LIST */
let Friendlist = (req, res) => {
    return new Promise((resolve, reject) => {
        signupmodel.find({ UserId: req.params.UserId }).select('friends').exec((err, result) => {
            if (err) {
                Loggerresponse.error('Error in Friendlist', 'requestsent()', 300);
                let apiresponse = userResponse.Message(true, 300, 'Unable to fetch data', null)
                reject(apiresponse);
            }
            else if (check.isEmpty(result)) {
                Loggerresponse.error('Error in Friendlist', 'requestsent()', 300);
                let apiresponse = userResponse.Message(true, 300, 'Data empty', null)
                reject(apiresponse);
            }
            else {
                resolve(result);
            }
        })
    })
        .then((resolve) => {
            let apiresponse = userResponse.Message(false, 200, 'Data fecthed successfully', resolve);
            res.send(apiresponse)
        })
        .catch((err) => {
            console.log(err);
            res.send(err);
        })
}

//**SENDING FRIEND REQUEST */
let sendingfriendrequest = (req, res) => {
    let validinput = () => {
        return new Promise((resolve, reject) => {
            if (req.body.senderName && req.body.senderId && req.body.receiverId && req.body.receiverName) {
                resolve(req);
            }
            else {
                Loggerresponse.error('Error in validinput', 'validinput()', 300);
                let apiresponse = userResponse.Message(true, 300, 'Please fill the required parameters', null)
                reject(apiresponse);
            }
        })
    }
    let requestbysender = () => {
        let options = {
            friendId: req.body.receiverId,
            friendName: req.body.receiverName
        }
        let finaloptions = {
            $push: {
                friendRequestSent: { $each: [options] }
            }
        }
        return new Promise((resolve, reject) => {
            signupmodel.findOneAndUpdate({ UserId: req.body.senderId }, finaloptions, { new: true }).exec((err, result) => {
                if (err) {
                    Loggerresponse.error('Error in requestbysender', 'requestbysender()', 300);
                    let apiresponse = userResponse.Message(true, 300, 'Error in requestbysender', null)
                    reject(apiresponse);
                }
                else if (check.isEmpty(result)) {
                    Loggerresponse.error('Error in requestbysender', 'requestbysender()', 300);
                    let apiresponse = userResponse.Message(true, 300, 'No data found', null)
                    reject(apiresponse);
                }
                else {
                    resolve(result)
                }
            })
        })
    }
    let requestreceivedtoreceiver = () => {
        let options = {
            friendId: req.body.senderId,
            friendName: req.body.senderName
        }
        let finaloptions = {
            $push: {
                friendRequestRecieved: { $each: [options] }
            }
        }
        return new Promise((resolve, reject) => {
            signupmodel.findOneAndUpdate({ UserId: req.body.receiverId }, finaloptions, { new: true }).exec((err, result) => {
                if (err) {
                    Loggerresponse.error('Error in requestreceivedtoreceiver', 'requestreceivedtoreceiver()', 300);
                    let apiresponse = userResponse.Message(true, 300, 'Error in requestreceivedtoreceiver', null)
                    reject(apiresponse);
                }
                else if (check.isEmpty(result)) {
                    Loggerresponse.error('Error in requestreceivedtoreceiver', 'requestreceivedtoreceiver()', 300);
                    let apiresponse = userResponse.Message(true, 300, 'No data found', null)
                    reject(apiresponse);
                }
                else {
                    resolve(result)
                }
            })
        })
    }
    validinput(req,res)
    .then(requestbysender)
    .then(requestreceivedtoreceiver)
    .then((resolve) => {
        let apiresponse = userResponse.Message(false, 200, 'Friend request sent successfully', resolve);
        res.send(apiresponse)
    })
    .catch((err) => {
        console.log(err);
        res.send(err);
    })
}

//**ACCEPT FRIEND REQUEST */
let Acceptingfriendrequest=(req,res)=>{
    let validinput = () => {
        return new Promise((resolve, reject) => {
            if (req.body.senderName && req.body.senderId && req.body.receiverId && req.body.receiverName) {
                resolve(req);
            }
            else {
                Loggerresponse.error('Error in validinput', 'validinput()', 300);
                let apiresponse = userResponse.Message(true, 300, 'Please fill the required parameters', null)
                reject(apiresponse);
            }
        })
    }
    let updatefriendlistreceiver=()=>{
        let options = {
            friendId: req.body.senderId,
            friendName: req.body.senderName
        }
        let finaloptions = {
            $push: {
                friends: { $each: [options] }
            }
        }
    return new Promise((resolve,reject)=>{
        signupmodel.findOneAndUpdate({UserId: req.body.receiverId },finaloptions, { new: true }).exec((err,result)=>{
        if(err)
        {
            Loggerresponse.error('Error in updatefriendlistreceiver', 'updatefriendlistreceiver()', 300);
            let apiresponse = userResponse.Message(true, 300, 'Error in updatefriendlistreceiver', null)
            reject(apiresponse); 
        }
        else if(check.isEmpty(result))
        {
            Loggerresponse.error('Error in updatefriendlistreceiver', 'updatefriendlistreceiver()', 300);
            let apiresponse = userResponse.Message(true, 300, 'No data found', null)
            reject(apiresponse);  
        }
        else{
            resolve(result)
        }
        })
    })
}
let updatefriendlistsender=()=>{
    let options = {
        friendId: req.body.receiverId,
        friendName: req.body.receiverName
    }
    let finaloptions = {
        $push: {
            friends: { $each: [options] }
        }
    }
    return new Promise((resolve,reject)=>{
    signupmodel.findOneAndUpdate({UserId: req.body.senderId },finaloptions, { new: true }).exec((err,result)=>{
        if(err)
        {
            Loggerresponse.error('Error in updatefriendlistsender', 'updatefriendlistsender()', 300);
            let apiresponse = userResponse.Message(true, 300, 'Error in updatefriendlistsender', null)
            reject(apiresponse); 
        }
        else if(check.isEmpty(result))
        {
            Loggerresponse.error('Error in updatefriendlistsender', 'updatefriendlistsender()', 300);
            let apiresponse = userResponse.Message(true, 300, 'No data found', null)
            reject(apiresponse);  
        }
        else{
            resolve(result)
        }
    })
    })
}
let removefriendrequestsentbysender=()=>{

    let finaloptions = {
        $pull: {
            friendRequestRecieved: { friendId: req.body.receiverId,friendName: req.body.receiverName }
        }
    }
    return new Promise((resolve,reject)=>{
        signupmodel.findOneAndUpdate({UserId: req.body.senderId },finaloptions, { new: true }).exec((err,result)=>{
            if(err)
            {
                Loggerresponse.error('Error in removefriendrequestsentbysender', 'removefriendrequestsentbysender()', 300);
                let apiresponse = userResponse.Message(true, 300, 'Error in removefriendrequestsentbysender', null)
                reject(apiresponse); 
            }
            else if(check.isEmpty(result))
            {
                Loggerresponse.error('Error in removefriendrequestsentbysender', 'removefriendrequestsentbysender()', 300);
                let apiresponse = userResponse.Message(true, 300, 'No data found', null)
                reject(apiresponse);  
            }
            else{
                resolve(result)
            }
        })
    })
}

let removefriendrequestreceivedbyreceiver=()=>{
    let finaloptions = {
        $pull: {
            friendRequestSent: {friendId: req.body.senderId,friendName: req.body.senderName }
        }
    }
    return new Promise((resolve,reject)=>{
        signupmodel.findOneAndUpdate({UserId: req.body.receiverId },finaloptions, { new: true }).exec((err,result)=>{
            if(err)
            {
                Loggerresponse.error('Error in removefriendrequestreceivedbyreceiver', 'removefriendrequestreceivedbyreceiver()', 300);
                let apiresponse = userResponse.Message(true, 300, 'Error in removefriendrequestreceivedbyreceiver', null)
                reject(apiresponse); 
            }
            else if(check.isEmpty(result))
            {
                Loggerresponse.error('Error in removefriendrequestreceivedbyreceiver', 'removefriendrequestreceivedbyreceiver()', 300);
                let apiresponse = userResponse.Message(true, 300, 'No data found', null)
                reject(apiresponse);  
            }
            else{
                resolve(result)
            }
        })
    })
}
validinput(req,res)
.then(updatefriendlistreceiver)
.then(updatefriendlistsender)
.then(removefriendrequestsentbysender)
.then(removefriendrequestreceivedbyreceiver)
.then((resolve) => {
    let apiresponse = userResponse.Message(false, 200, 'Friend request accepted successfully', resolve);
    res.send(apiresponse)
})
.catch((err) => {
    console.log(err);
    res.send(err);
})
}

//**REJECT FRIEND REQUEST */
let Rejectfriendrequest=(req,res)=>{
    let validinput = () => {
        return new Promise((resolve, reject) => {
            if (req.body.senderName && req.body.senderId && req.body.receiverId && req.body.receiverName) {
                resolve(req);
            }
            else {
                Loggerresponse.error('Error in validinput', 'validinput()', 300);
                let apiresponse = userResponse.Message(true, 300, 'Please fill the required parameters', null)
                reject(apiresponse);
            }
        })
    }
    let removefriendfromsender=()=>{
        let finaloptions = {
            $pull: {
                friendRequestRecieved: { friendId: req.body.receiverId,friendName: req.body.receiverName }
            }
        }
        return new Promise((resolve,reject)=>{
            signupmodel.findOneAndUpdate({UserId: req.body.senderId },finaloptions, { new: true }).exec((err,result)=>{
                if(err)
                {
                    Loggerresponse.error('Error in removefriendfromsender', 'removefriendfromsender()', 300);
                    let apiresponse = userResponse.Message(true, 300, 'Error in removefriendfromsender', null)
                    reject(apiresponse); 
                }
                else if(check.isEmpty(result))
                {
                    Loggerresponse.error('Error in removefriendfromsender', 'removefriendfromsender()', 300);
                    let apiresponse = userResponse.Message(true, 300, 'No data found', null)
                    reject(apiresponse);  
                }
                else{
                    resolve(result)
                }
            })
        })
    }
    let removefriendfromreceiver=()=>{
        let finaloptions = {
            $pull: {
                friendRequestSent: {friendId: req.body.senderId,friendName: req.body.senderName }
            }
        }
        return new Promise((resolve,reject)=>{
            signupmodel.findOneAndUpdate({UserId: req.body.receiverId },finaloptions, { new: true }).exec((err,result)=>{
                if(err)
                {
                    Loggerresponse.error('Error in removefriendfromreceiver', 'removefriendfromreceiver()', 300);
                    let apiresponse = userResponse.Message(true, 300, 'Error in removefriendfromreceiver', null)
                    reject(apiresponse); 
                }
                else if(check.isEmpty(result))
                {
                    Loggerresponse.error('Error in removefriendfromreceiver', 'removefriendfromreceiver()', 300);
                    let apiresponse = userResponse.Message(true, 300, 'No data found', null)
                    reject(apiresponse);  
                }
                else{
                    resolve(result)
                }
            })
        })
    }
    validinput(req,res)
    .then(removefriendfromsender)
    .then(removefriendfromreceiver)
    .then((resolve) => {
        let apiresponse = userResponse.Message(false, 200, 'Friend request successfully rejected', resolve);
        res.send(apiresponse)
    })
    .catch((err) => {
        console.log(err);
        res.send(err);
    })
}

//**UNFRIEND FROM FRIEND LIST */
let unfriendfromfriendlist=(req,res)=>{
    let validinput = () => {
        return new Promise((resolve, reject) => {
            if (req.body.senderName && req.body.senderId && req.body.receiverId && req.body.receiverName) {
                resolve(req);
            }
            else {
                Loggerresponse.error('Error in validinput', 'validinput()', 300);
                let apiresponse = userResponse.Message(true, 300, 'Please fill the required parameters', null)
                reject(apiresponse);
            }
        })
    }
    let removefriendfromsender=()=>{
        let finaloptions = {
            $pull: {
                friends: { friendId: req.body.receiverId,friendName: req.body.receiverName }
            }
        }
        return new Promise((resolve,reject)=>{
            signupmodel.findOneAndUpdate({UserId: req.body.senderId },finaloptions, { new: true }).exec((err,result)=>{
                if(err)
                {
                    Loggerresponse.error('Error in removefriendrequestsentbysender', 'removefriendrequestsentbysender()', 300);
                    let apiresponse = userResponse.Message(true, 300, 'Error in removefriendrequestsentbysender', null)
                    reject(apiresponse); 
                }
                else if(check.isEmpty(result))
                {
                    Loggerresponse.error('Error in removefriendrequestsentbysender', 'removefriendrequestsentbysender()', 300);
                    let apiresponse = userResponse.Message(true, 300, 'No data found', null)
                    reject(apiresponse);  
                }
                else{
                    resolve(result)
                }
            })
        })
    }
    let removefrinedfromreceiver=()=>{
        let finaloptions = {
            $pull: {
                friends: {friendId: req.body.senderId,friendName: req.body.senderName }
            }
        }
        return new Promise((resolve,reject)=>{
            signupmodel.findOneAndUpdate({UserId: req.body.receiverId },finaloptions, { new: true }).exec((err,result)=>{
                if(err)
                {
                    Loggerresponse.error('Error in removefriendrequestsentbysender', 'removefriendrequestsentbysender()', 300);
                    let apiresponse = userResponse.Message(true, 300, 'Error in removefriendrequestsentbysender', null)
                    reject(apiresponse); 
                }
                else if(check.isEmpty(result))
                {
                    Loggerresponse.error('Error in removefriendrequestsentbysender', 'removefriendrequestsentbysender()', 300);
                    let apiresponse = userResponse.Message(true, 300, 'No data found', null)
                    reject(apiresponse);  
                }
                else{
                    resolve(result)
                }
            })
        })
    }
    validinput(req,res)
    .then(removefriendfromsender)
    .then(removefrinedfromreceiver)
    .then((resolve) => {
        let apiresponse = userResponse.Message(false, 200, 'Friend successfully deleted from friendlist', resolve);
        res.send(apiresponse)
    })
    .catch((err) => {
        console.log(err);
        res.send(err);
    })
}
module.exports = {
    getallusers: getallusers,
    requestsent: requestsent,
    requestreceived: requestreceived,
    sendingfriendrequest:sendingfriendrequest,
    Acceptingfriendrequest:Acceptingfriendrequest,
    Rejectfriendrequest:Rejectfriendrequest,
    unfriendfromfriendlist:unfriendfromfriendlist,
    Friendlist:Friendlist
}