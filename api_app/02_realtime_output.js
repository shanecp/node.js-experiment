// twitter app

var express = require('express');
var http = require('http');


// express server
var app 	= express();

// sample output on each second
setInterval(function() {
	console.log('Message ' + (Math.random(100) * 100));
}, 1000);