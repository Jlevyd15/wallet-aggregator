var express = require('express');
var router = express.Router();
var auth = require('../auth.js')();
var users = require('../users.js');

/* GET users listing. */
router.get('/', auth.authenticate(), function(req, res, next) {
	console.log('in users route ', req.user.id)
	res.json({ test: 'protected route', users: users[req.user.id - 1] });
});

module.exports = router;
