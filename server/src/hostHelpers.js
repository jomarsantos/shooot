var codes = require('../codes.js');
const Session = require('../models/Session');

function createSession(io, socket, message, callback) {
  let code = codes[Math.floor(Math.random() * Math.floor(codes.length))];
	let expiry = new Date();
	expiry.setTime(expiry.getTime() + (1*60*60*1000));

	var sessionDetail = {
		code: code,
		host: message.userId, // TODO: validate user id first
		expiry: expiry
	};
	var session = new Session(sessionDetail);
  
	session.save(function (err) {
		if (err) {
			if (err.type == 'validation') {
				console.log('[INFO] Server tried assigning a code already in use.');
        
				// Try again
				createSession(callback);
			} else {
				console.log('[ERROR] Error saving to database', err);
        
				var response = {
					success: false,
				}
				callback(response);
			}
		} else {      
      console.log('[INFO] A user created a session with code: '+code);

      socket.join(code);
			var response = {
				success: true,
				session: session
			}
			callback(response);	
    }
	});
}

function startSession(io, socket, message, callback) {
  console.log('[INFO] Host informing everyone to start session');
  // TODO: store the session details in DB

  var details = {
    success: true,
    participants: message.participants
  };
  io.in(message.code).emit('startSession', details);
  
  var response = {
    success: true,
    msg: "Informed participants to start session."
  };
  callback(response);
}

module.exports = {
  createSession: createSession,
  startSession: startSession
};
