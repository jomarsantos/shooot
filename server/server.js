var config = require('./config');
const express = require('express');

const app = express();
const path = require('path')

// Body Parser
var bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

// Public Assets
app.use(express.static(path.resolve(__dirname, './public')));

// Database
// var mongoose = require('mongoose');
// var mongoDB = config.mongoURL;
// mongoose.connect(mongoDB, {
// 	useMongoClient: true
// });
// mongoose.Promise = global.Promise;
// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Server
var hostRouter = require('./routes/host.js');
var participantRouter = require('./routes/participant.js');

// Routes
app.use('/api/host', hostRouter);
app.use('/api/participant', participantRouter);

// Initialize
const server = app.listen(config.port, function() {
  const host = server.address().address;
  const port = server.address().port;
  console.log('App listening at http://%s:%s', host, port);
});
