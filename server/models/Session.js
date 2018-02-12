var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var SessionSchema = Schema({
  code: {type: String, required: true},
	host: {type: Schema.ObjectId, ref: 'User', required: true},
	participants: [{type: Schema.ObjectId, ref: 'User', required: true}],
	shooots: [{type: Schema.ObjectId, ref: 'Shooot', required: true}],
});

// TODO: do a pre validation on code to make sure that the code doesn't exist already / already expired

module.exports = mongoose.model('Session', SessionSchema);
