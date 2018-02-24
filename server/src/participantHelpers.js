var codes = require('../codes.js');
const Session = require('../models/Session');

function createSession(callback) {
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
}

module.exports = {
  createSession: createSession
};
