var config = require('./config');
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
var hostRouter = require('./routes/host.js');
var participantRouter = require('./routes/participant.js');
app.use('/api/host', hostRouter);
app.use('/api/participant', participantRouter);

//////////////////////////
// Sockets
//////////////////////////
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
		var response = {
			session: {
				success: true,
				code: 'Y6R9'
			}
		}
		callback(response);
	});

	socket.on('joinShooot', function(message, callback) {
		console.log('[PARTICIPANT] request to join a shooot');

		// TODO: check if shooot code exists

		var details = {
			type: 'addNewPossibleParticipant',
			participant: message.participant
		}

		socket.broadcast.emit(message.code, details);

		var response = {
			session: {
				success: true,
			}
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
