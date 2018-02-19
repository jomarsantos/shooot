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
var http = require('http').Server(app);
var io = require('socket.io')(http, {
  pingTimeout: 30000,
  pingInterval: 30000
});

var sessions = [];

io.on('connection', function(socket){
  console.log('a user connected');

	socket.on('createShooot', function(message, callback) {
		console.log('[HOST] request to create a shooot');
		hostHelpers.createSession(callback);
	});

	socket.on('joinShooot', function(message, callback) {
		console.log('[PARTICIPANT] request to join a shooot');

		// TODO: check if shooot code exists in DB and is active
		let shootExists = true;

		if (!shootExists) {
			var response = {
				success: false,
			}
		} else {
			// TODO: update session in DB with new participant

			var details = {
				type: 'addNewPossibleParticipant',
				participant: message.participant
			}
			socket.broadcast.emit(message.code, details);
		}
		callback(response);
	});

	socket.on('disconnect', function(){
		console.log('user disconnected');
	});
});

//////////////////////////
// Start Up Server
//////////////////////////
http.listen(3000, function(){
  console.log('listening on *:3000');
});
