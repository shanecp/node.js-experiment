// express.js with socket.io for real time communication

var express = require('express');
var http 	= require('http');
var fs 	 	= require('fs');

var config 	= JSON.parse(fs.readFileSync('../files/config.json'));

console.log('Starting');

var host = config.host;
var port = config.port;


// express server
var app 	= express();

// express 3 requires to instantiate a http.Server
var server 	= http.createServer(app);

var router 	= express.Router();
var io 		= require('socket.io').listen(server);

// respond to '/'
app.get('/', function(req, res) {
	res.sendfile(__dirname + '/index.html');
});

// use public dir for static files
app.use(express.static(__dirname + './../public'));
server.listen(port, host);

// some demo data
var carMakes = ['Nissan', 'Toyota', 'Lexus', 'BMW', 'Ferrari', 'Lotus', 'Infiniti'];

// setup socket connections
io.sockets.on('connection', function(socket) {
	setInterval(function() {
		var carMake = carMakes[Math.floor(Math.random() * carMakes.length)];
		var carPrice = Math.random(1000) * 100000;

		socket.emit('car', { 
			make : carMake,
			price: carPrice
		} );
	}, 1000);
});

