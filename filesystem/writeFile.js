// read a file


// sync file read
var fs = require('fs');
console.log('Starting sync read');
var contents = 'My new file sync';

fs.writeFileSync('../files/sample-write.txt', contents);

console.log('Continue writing');


