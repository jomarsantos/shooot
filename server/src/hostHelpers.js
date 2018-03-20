var codes = require('../codes.js');
const Session = require('../models/Session');

function createSession(message, callback) {
  let code = codes[Math.floor(Math.random() * Math.floor(codes.length))];

	// Make sh
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
			console.log('[INFO] A user created a session.');
			// Succesfully created session
			var response = {
				success: true,
				session: session
			}
			callback(response);		}
	});
}

module.exports = {
  createSession: createSession
};
