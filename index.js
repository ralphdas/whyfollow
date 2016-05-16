var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.json({
  	text: 'Hallo World Again!'
  });
});

app.listen(8080);