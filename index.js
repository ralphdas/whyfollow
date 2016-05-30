var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser')

var user_schema = new mongoose.Schema({
	first_name: String,
	last_name: String,
	age: Number  	
});

app.use(bodyParser.json({strict:false}));

mongoose.connect('mongodb://localhost/whyfollow');

var user = mongoose.model('user', user_schema);

app.get('/users', function(_req, _resp){
  
  	user.find({}, function(err, data){
  		
  		_resp.send(data);

		_resp.end();

  	});


  
});


app.post('/users/', function(req, resp){
	

	
	var new_user = user.create({
		first_name: req.body.first_name,
		last_name: req.body.last_name,
		age: req.body.age,

	});
	
	resp.writeHead(200);
	resp.end();
});



app.listen(8080);