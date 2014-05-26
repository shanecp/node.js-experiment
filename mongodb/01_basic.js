// basic mongo db connection

var mongo	= require('mongodb');
var host	= "127.0.0.1";
var port 	= mongo.Connection.DEFAULT_PORT;

//			 namespace.class('db-name')
var db = new mongo.Db('nodejs-experiment', new mongo.Server(host, port, {}), {w: 1, safe: false, strict: false});

db.open(function(error) {
	console.log('We are connected');

	// get a collection (~ table)
	db.collection('user', function(error, collection) {
		console.log(error);
		console.log('We have the collection');

		// add an object to the collection
		// collection.insert({
		// 	id   : 5,
		// 	name : "someone"
		// }, function(err) {
		// 	if (!err) {
		// 		console.log('Object inserted');
		// 	} else {
		// 		console.log('Failed to insert');
		// 	}

		// 	console.log('Collection is');
		// 	var retrivedCollection = db.collection('user');
		// 	console.log(retrivedCollection);

		// 	db.close();
		// });

		// queriying for records
		collection.find({id: 5}, function(error, cursor) {
			cursor.toArray(function(err, users) {
				if (users.length == 0) {
					console.log('There is no result');
				} else {
					console.log('Found a user');
					console.log(users[0]);
				}
			});
		});

	});
});