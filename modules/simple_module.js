function hello() {
	return 'world';
}

function privateFunction(number) {
	return number + 10;
}

function increment(number) {
	return privateFunction(number);
}

// make this function avaiable as a module
module.exports.hello = hello;
module.exports.increment = increment;