var config = require('./config');
var codes = require('./codes');
const express = require('express');
const app = express();
const path = require('path')

//////////////////////////
// Body Parser
//////////////////////////
var bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

//////////////////////////
// Public Assets
//////////////////////////
app.use(express.static(path.resolve(__dirname, './public')));

//////////////////////////
// API
//////////////////////////
var loginRouter = require('./routes/login.js');
app.use('/api/login', loginRouter);

var hostRouter = require('./routes/host.js');
app.use('/api/host', hostRouter);

var participantRouter = require('./routes/participant.js');
app.use('/api/participant', participantRouter);

//////////////////////////
// Database
//////////////////////////
var mongoose = require('mongoose');
var mongoDB = config.mongoURL;
mongoose.connect(mongoDB, {});
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

//////////////////////////
// Sockets
//////////////////////////
var hostHelpers = require('./src/hostHelpers');
var participantHelpers = require('./src/participantHelpers');
var http = require('http').Server(app);
var io = require('socket.io')(http, {
  pingTimeout: 30000,
  pingInterval: 30000
});

var sessions = [];

io.on('connection', function(socket){
  console.log('[INFO] A user connected.');

	socket.on('createSession', function(message, callback) {
		hostHelpers.createSession(socket, message, callback);
	});

	socket.on('joinSession', function(message, callback) {
		participantHelpers.joinSession(message, callback, socket);
	});

	socket.on('disconnect', function(){
		console.log('[INFO] A user disconnected.');
	});
});

//////////////////////////
// Start Up Server
//////////////////////////
http.listen(3000, function(){
  console.log('listening on *:3000');
});
