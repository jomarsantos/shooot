const Session = require('../models/Session');

function joinSession(message, callback, socket) {
	let currentTime = new Date();
	Session.findOne({
		code: message.code,
		expiry: {
			$gt: new Date()
		}
	}, function(err, session) {
		var response = {};
	  if (err) {
			var response = {
				success: false,
				error: err,
				msg: "Unable to find session. Please contact an admin. (Error 0)"
			}
	  } else if (session) {
			var response = {
				success: true,
				msg: "Waiting for host to accept request."
			}

			// Send message to host that someone is requesting to join
			var details = {
				type: 'addNewPossibleParticipant',
				participant: message.participant
			}
			socket.broadcast.emit(message.code, details);
	  } else {
			var response = {
				success: false,
				msg: "Could not find a valid session with that code."
			}
		}
		callback(response);
  });
}

module.exports = {
  joinSession: joinSession
};
