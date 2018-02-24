const Session = require('../models/Session');

function joinSession(callback) {
  let code = codes[Math.floor(Math.random() * Math.floor(codes.length))];

	// Make sh
	let expiry = new Date();
	expiry.setTime(expiry.getTime() + (1*60*60*1000));

	var sessionDetail = {
		code: code,
		host: '5a87e1fdb7189d0e05b743e3', // TODO: get this from request
		expiry: expiry
	};
	var session = new Session(sessionDetail);
	session.save(function (err) {
		if (err) {
			if (err.type == 'validation') {
				// Shooot with code currently exists already, try again
				createSession(callback);
			} else {
				console.log('[ERROR] Error saving to database', err);
				var response = {
					success: false,
				}
				callback(response);
			}
		} else {
			// Succesfully created session
			var response = {
				success: true,
				session: session
			}
			callback(response);		}
	});


	// // TODO: check if shooot code exists in DB and is active
	// let shootExists = true;
	//
	// if (!shootExists) {
	// 	var response = {
	// 		success: false,
	// 	}
	// } else {
	// 	// TODO: update session in DB with new participant
	//
	// 	var details = {
	// 		type: 'addNewPossibleParticipant',
	// 		participant: message.participant
	// 	}
	// 	socket.broadcast.emit(message.code, details);
	// }
	// callback(response);
}

module.exports = {
  joinSession: joinSession
};
