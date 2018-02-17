var express = require('express');
var router = express.Router();
var FB = require('fb');
var https = require('https');
const User = require('../models/User');

router.post('/fb', function (req, res) {
	FB.api('/me', { fields: 'id,name,email', access_token: req.body.accessToken }, function (response) {
		if(response && response.error) {
			// Error 0: Response error from Facebook request
			res.send({
				success: false,
				error: response.error,
				msg: "Unable to log in. Please contact an admin. (Error 0)"
			});
    }
    else {
			User.find({fbUserId: response.id}).exec(function (err, user) {
			  if (err) {
					// Error 1: Problem querying database
					res.send({
						success: false,
						error: err,
						msg: "Unable to log in. Please contact an admin. (Error 1)"
					});
				} else if (user.length === 0) {
					// Success: First Time / Create Record
					var userDetail = {
						name: response.name,
						fbUserId: response.id,
						picture: 'https://graph.facebook.com/' + response.id + '/picture?type=large',
					};
					var user = new User(userDetail);
					user.save(function (err) {
					  if (err) {
							// Error 2: Problem saving to database
							res.send({
								success: false,
								error: err,
								msg: "Unable to log in. Please contact an admin. (Error 2)"
							});
					  } else {
							res.send({
								success: true,
								new: true,
								user: {
									id: user._id,
									name: user.name,
									picture: user.picture,
								}
							});
						}
					});
				} else if (user.length > 1) {
					// Error 3: More than 1 user with same Facebook ID
					res.send({
						success: false,
						msg: "Unable to log in. Please contact an admin. (Error 3)"
					});
				} else {
					// Success: Already a User
					res.send({
						success: true,
						new: false,
						user: {
							id: user[0]._id,
							name: user[0].name,
							picture: user[0].picture,
						}
					});
				}
			})
    }
	});
})

router.post('/google', function (req, res) {
	https.get('https://www.googleapis.com/plus/v1/people/me?access_token=' + req.body.accessToken, function (response) {
		response.setEncoding("utf8");
		let body = "";
		response.on("data", data => {
		  body += data;
		});

		response.on("end", () => {
	    response = JSON.parse(body);
			if(response && response.error) {
				// Error 0: Response error from Google request
				res.send({
					success: false,
					error: response.error,
					msg: "Unable to log in. Please contact an admin. (Error 0)"
				});
			}
			else {
				User.find({googleUserId: response.id}).exec(function (err, user) {
					if (err) {
						// Error 1: Problem querying database
						res.send({
							success: false,
							error: err,
							msg: "Unable to log in. Please contact an admin. (Error 1)"
						});
					} else if (user.length === 0) {
						// Success: First Time / Create Record
						var userDetail = {
							name: response.displayName,
							googleUserId: response.id,
						};
						var user = new User(userDetail);
						user.save(function (err) {
							if (err) {
								// Error 2: Problem saving to database
								res.send({
									success: false,
									error: err,
									msg: "Unable to log in. Please contact an admin. (Error 2)"
								});
							} else {
								res.send({
									success: true,
									new: true,
									user: {
										id: user._id,
										name: user.name,
										picture: user.picture,
									}
								});
							}
						});
					} else if (user.length > 1) {
						// Error 3: More than 1 user with same Facebook ID
						res.send({
							success: false,
							msg: "Unable to log in. Please contact an admin. (Error 3)"
						});
					} else {
						// Success: Already a User
						res.send({
							success: true,
							new: false,
							user: {
								id: user[0]._id,
								name: user[0].name,
								picture: user[0].picture,
							}
						});
					}
				})
			}
	  });
	});
})

module.exports = router;
