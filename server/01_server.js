// basic server 


var http = require('http');
console.log('Starting');

var host = "127.0.0.1";
var port = 8085;

// the callback will be fired everytime a page is requested
var server = http.createServer(function(request, response) {
	console.log('Request received: ' + request.url);

	// reply with a header
	response.writeHead(200, {"Content-type": "text/plain"});
	response.write('Hello');
	response.end();
});


// listen
server.listen(port, host, function() {
	console.log('Listening ' + host + ': ' + port);
	// load your browser on http://127.0.0.1:8085/
});