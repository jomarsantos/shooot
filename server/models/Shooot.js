var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ShoootSchema = Schema({
	timestamp: {type: Date, required: true},
	images: [{type: String, required: true}]
});

module.exports = mongoose.model('Shooot', ShoootSchema);
