var express = require('express');
var router = express.Router();
// const Brew = require('../models/Brew');

router.get('/', function (req, res) {
	res.send({
		success: true,
		msg: "participant"
	});
});

module.exports = router;
