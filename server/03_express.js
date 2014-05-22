// express.js demo file

var http 	= require('http');
var fs 	 	= require('fs');
var express = require('express');

var config 	= JSON.parse(fs.readFileSync('../files/config.json'));

console.log('Starting');

var host = config.host;
var port = config.port;


// express server
var app 	= express();
var router 	= express.Router();

// respond to '/'
app.get('/', function(req, res) {
	res.send('hello');
});

// check for routes
app.use(router);

// use public dir for static files
app.use(express.static(__dirname + './../public'));


app.listen(port, host);

