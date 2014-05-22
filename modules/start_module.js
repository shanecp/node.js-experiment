var simpleModule = require('./simple_module.js');
var github = require('./github_module.js');

console.log('Hello ' + simpleModule.hello());

github.getRepositories('shanecp', function(repositories) {
	console.log('shanecp has ' + repositories.length + ' repos');
});