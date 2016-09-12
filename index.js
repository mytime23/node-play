var express = require('express');
var path = require('path');

var app = express();

app.set('views', './views'); 

app.get('/', function(req, res) {
     res.sendFile(path.join(__dirname + '/view/index.html'));
});

app.listen(3000, function() {
    console.log('http://localhost:3000 is listened ! ');
});