var express = require('express');

// load conf
var conf = require('./conf');

// Create express app
var app = express();

app.get('/', function(req, res){
	res.send('Welcome');
});

app.get('/conf', function (req, res) {
	res.setHeader('Content-Type', 'application/json');
	res.send(JSON.stringify(conf, null, 3));
});

app.get('/env', function (req, res) {
	res.setHeader('Content-Type', 'application/json');
	res.send(JSON.stringify(process.env, null, 3));
});

app.listen(3000);
console.log('App running on port 3000');