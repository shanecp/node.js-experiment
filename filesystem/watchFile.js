// watch a file 

var fs = require('fs');

console.log('Started');

var config = JSON.parse(fs.readFileSync('../files/config.json'));
console.log('Initial config: ' + config.user);

// watch file 
fs.watchFile('../files/config.json', function(current, previous) {
	// process file here
});