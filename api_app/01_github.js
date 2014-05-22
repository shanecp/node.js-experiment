// simple app using github API

var https = require('https');

var username = 'OllieParsley';

var options = {
	host: 'api.github.com',
	path: '/users/' + username + '/repos',
	method: 'GET',
	headers: {
		'User-Agent': 'MyNodeApp'
	}
};


var request = https.request(options, function(response) {
	// concat all the pieces of data received
	var body = '';
	response.on('data', function(chunk) {
		body += chunk.toString('utf8');
	});

	response.on('end', function() {
		var json = JSON.parse(body);
		var repositories = [];
		json.forEach(function(repo) {
			repositories.push({
				name: repo.name,
				description: repo.description
			});
		});
		console.log('Total is ' + json.length);
		console.log(repositories);
	});
});

// this is where we actually send the request to get data
request.end();