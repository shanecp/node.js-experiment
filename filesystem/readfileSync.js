// read a file


// sync file read
var fs = require('fs');
console.log('Starting sync read');

var contents = fs.readFileSync('../files/sample.txt');
console.log('Contents: ' + contents);

console.log('Continue sync execution');



// read config
var configData = fs.readFileSync('../files/config.json');
var config = JSON.parse(configData);
console.log(config);
console.log(config.user);