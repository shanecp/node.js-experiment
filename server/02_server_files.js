// basic server 


var http = require('http');
var fs 	 = require('fs');

console.log('Starting');

var host = "127.0.0.1";
var port = 8085;

// the callback will be fired everytime a page is requested
var server = http.createServer(function(request, response) {
	console.log('Request received: ' + request.url);

	// read the file 
	fs.readFile('../public' + request.url, function(error, data) {
		if (error) {
			response.writeHead(404, {"Content-type": "text/plain"});
			response.end('File not found');
		} else {
			// reply with a header
			response.writeHead(200, {"Content-type": "text/html"});
			response.end(data);
		}
	});

});


// listen
server.listen(port, host, function() {
	console.log('Listening ' + host + ': ' + port);
	// load your browser on http://127.0.0.1:8085/
});