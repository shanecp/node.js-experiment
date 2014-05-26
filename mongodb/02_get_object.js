// basic mongo db connection

var mongo	= require('mongodb');
var host	= "127.0.0.1";
var port 	= mongo.Connection.DEFAULT_PORT;


function getUser(id, callback) {
	//			 namespace.class('db-name')
	var db = new mongo.Db('nodejs-experiment', new mongo.Server(host, port, {}), {w: 1, safe: false, strict: false});

	db.open(function(error) {
		// get a collection (~ table)
		db.collection('user', function(error, collection) {
			if (!error) {
				// queriying for records
				collection.find({id: parseInt(id, 10)}, function(error, cursor) {
					cursor.toArray(function(err, users) {
						if (users.length == 0) {
							db.close();
							callback(false);
						} else {
							db.close();
							callback(users[0]);
						}
					});
				});
			} else {
				db.close();
				callback(false);
			}

		});
	});
}


getUser(5, function(user) {
	if (user) {
		console.log(user)
	} else {
		console.log('No user for ID 5');
	}
});

getUser(7, function(user) {
	if (user) {
		console.log(user)
	} else {
		console.log('No user for ID 7');
	}
});