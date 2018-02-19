var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var SessionSchema = Schema({
  code: {type: String, required: true},
	host: {type: Schema.ObjectId, ref: 'User', required: true},
	participants: [{type: Schema.ObjectId, ref: 'User', required: false}],
	shooots: [{type: Schema.ObjectId, ref: 'Shooot', required: false}],
	expiry: {type: Date, required: true}
});

SessionSchema.pre("save", true, function(next, done) {
  var self = this;
  mongoose.models["Session"].findOne({
		code: self.code,
		expiry: {
			$gt: new Date()
		}
	}, function(err, session) {
	  if(err) {
      done(err);
	  } else if (session) {
			self.invalidate("name", "Shooot already exists for this code.");
			var error = new Error("Shooot already exists for this code.");
			error.type = 'validation';
      done(error);
	  } else {
      done();
	  }
  });
  next();
});


module.exports = mongoose.model('Session', SessionSchema);
