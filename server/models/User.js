var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserSchema = Schema({
  name: {type: String, required: true},
	fbUserId: {type: String, required: false},
	googleUserId: {type: String, required: false},
	picture: {type: String, required: false},
});

module.exports = mongoose.model('User', UserSchema);
