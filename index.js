const express = require('express');
const app = express();
const configfile = require('./configFolder/config');
const mongoose = require('mongoose');
const cookieparser = require('cookie-parser');
const bodyparser = require('body-parser');
const globalerrorhandler = require('./MiddleWare/errorHandler');
const LoggerResponse=require('./Library/LoggerResponse');
const path=require('path');
const cors=require('cors');
const fs = require('fs');
const http = require('http');
let routeFile = './routeFolder';
let modelFile = './Model';

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));
app.use(cookieparser());
app.use(cors());
app.use(express.static(path.join(__dirname, '../edWisor Projects_todoList-FrontEnd/todolistFrontend/src')));

//Model file importing..
fs.readdirSync(modelFile).forEach(function (file) {
    if (~file.indexOf('.js')) {
        console.log("Including the model file");
        console.log(modelFile + '/' + file);
        require(modelFile + '/' + file);
    }
})
//Route File importing...
fs.readdirSync(routeFile).forEach(function (file) {
    if (~file.indexOf('.js')) {
        console.log("Including the route files");
        console.log(routeFile + '/' + file);
        let routerimport = require(routeFile + '/' + file);
        routerimport.setRouter(app);
    }
})

//Global error handler..
app.use(globalerrorhandler.globalerrorHandler);

const server = http.createServer(app);
// start listening to http server
console.log(configfile);
server.listen(configfile.port);
server.on('error', onError);
server.on('listening', onListening);
const socket=require('./Library/Socket');
const serverconnect=socket.setServer(server);

function onError(error) {
    if (error.syscall !== 'listen') {
        LoggerResponse.error(error.code + ' not equal listen', 'serverOnErrorHandler', 10)
        throw error;
    }
    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
        LoggerResponse.error(error.code + ':elavated privileges required', 'serverOnErrorHandler', 10);
            process.exit(1);
            break;
        case 'EADDRINUSE':
        LoggerResponse.error(error.code + ':port is already in use.', 'serverOnErrorHandler', 10);
            process.exit(1);
            break;
        default:
        LoggerResponse.error(error.code + ':some unknown error occured', 'serverOnErrorHandler', 10);
            throw error;
    }

}

function onListening() {

    var addr = server.address();
    var bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
    ('Listening on ' + bind);
    LoggerResponse.info('server listening on port' + addr.port, 'serverOnListeningHandler', 10);
    mongoose.set('useCreateIndex', true);
    let db = mongoose.connect(configfile.db.uri, { useNewUrlParser: true });
}

process.on('unhandledRejection', (reason, p) => {
    console.log('Unhandled Rejection at: Promise', p, 'reason:', reason);
    // application specific logging, throwing an error, or other logic here
});

//Mongoose error handling part..
mongoose.connection.on('error', function (err) {
    console.log('Database connection error');
    console.log(err);
})
mongoose.connection.on('open', function (err) {
    if (err) {
        console.log('Database connection error')
    }
    else {
        console.log('Connection successfully created');
    }
})
