const socketio = require('socket.io');
const mongoose = require('mongoose');
const jwt = require('./Jwttoken');
const events = require('events');
const eventEmitter = new events.EventEmitter();
const express = require('express');
const todolistmodel = mongoose.model('todoList');


let setServer = (server) => {
    let UsersFriendList = [];
    let io = socketio.listen(server);
    let myio = io.of('/');
    myio.on('connection', (socket) => {
        socket.room = 'Allfriends';

        console.log("Connection established");
        socket.emit('verify-user', "Hello user you are verifying");
        socket.on('set-user', (authToken) => {
            jwt.verifyJWTwithoutsecret(authToken, (err, result) => {
                if (err) {
                    socket.emit('authToken error',
                        {
                            status: 500,
                            error: 'Please provide correct authToken'
                        })
                }
                else {
                    console.log("Authtoken-socket verified");
                    socket.emit('verified', "You are verified");
                    let currentUser = result.data;
                    //console.log(currentUser);
                    socket.UserId = currentUser.UserId;
                    let userFullName = `${currentUser.firstName} ${currentUser.lastName}`;
                    console.log(`${userFullName} is online`);
                    socket.join(socket.room);
                    //User's all friends..
                    socket.to(socket.room).broadcast.emit('Users', currentUser.friends);
                }
            })
        })

        //Friend request received from sender..
        socket.on('receivedfriend', (data, data2) => {
            //console.log(data);
            //console.log(data2);
            setTimeout(() => {
                socket.broadcast.emit(data.UserId, `You have received a friend reqeust from ${data2.senderName}`);
            }, 2000)
        })

        //Friend request accepted by receiver..
        socket.on('acceptfriend', (data, data2) => {
            //console.log(data);
            //console.log(data2);
            setTimeout(() => {
                socket.broadcast.emit(data2.senderId, `You have successfully accepted ${data.firstName} ${data.lastName}'s friend reqeust`);
            }, 2000)
            setTimeout(() => {
                socket.broadcast.emit(data.UserId, `${data2.senderName} has accepted your friend request`);
            }, 2000)
        })

        //user's todolist deleted by friend..
        socket.on('Deletefriendlist',(data)=>{
            //console.log(data);
            //socket.join(socket.room);
            setTimeout(()=>{
            eventEmitter.emit('Listenfinallist',data);
            socket.to(socket.room).broadcast.emit('frienddeletedlist',data);
            },2000)
        })

        //user's todolist edited by friend..
        socket.on('Editfriendlist',(data)=>{
            //socket.join(socket.room);
            console.log("Socket console");
            console.log(data);
            setTimeout(()=>{
            eventEmitter.emit('Listenfinallist',data);
             socket.to(socket.room).broadcast.emit('friendeditedlist',data);
            },2000)
        })

        //User's realtime todolist after edited/deleted by friend..
        eventEmitter.on('Listenfinallist',(data)=>{
         console.log("Eventemitter console");
         console.log(data);
         todolistmodel.find({UserId:data.friendId}).exec((err,result)=>{
             if(err)
             {
                 console.log(err);
             }
             else{
                 console.log(result);
                 socket.to(socket.room).broadcast.emit('finalcall',result);                
             }
         })
        })

        socket.on('Disconnect', (data) => {
            console.log(`${data.UserName} is disconnected`);
        })
    })
}

module.exports = {
    setServer: setServer
}