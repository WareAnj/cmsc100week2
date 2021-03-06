var express = require('express');				//you require a module --explains the node.module
var app = express();							//creating an instance of the express

/*******************ROUTE HANDLERS
app.get('/', function(req, res){				//req -- lahat ng request ng client
	res.send('Hello World!');					//res -- response ng express ay dito isesend. send - isa sa mga methods 
});

app.get('/students', function(req, res){		//para maiba yung path
	res.send('Hi World!');						 
}); 
************************************/

app.use(require('body-parser')());				//to accept input from the users e.g. froms etc
app.use(require('method-override')());			//to be able to use put and delete methods. uses post to mimic put and delete
app.use(require(__dirname+'/config/router')(express.Router())); //__dirname kung nasan yung script na nira run mo at hindi kung nasaan ka.
app.use(express.static(__dirname+'/public'));

var server = app.listen(5000, function(){						//listens to the request (usually the localhost) --define port number as 5000
	var host = server.address().address;		
	var port = server.address().port;			
	console.log('Example app listening at http://%s:%s', host, port);
});

