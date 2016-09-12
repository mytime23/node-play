var express = require('express');
var path = require('path');

var app = express();

app.use(express.static('public'));

app.get('/', function(req, res) {
     res.sendFile(path.join(__dirname + '/view/index.html'));
});

app.get('/led/:id', function(req, res) {
    const id = req.params.id;
    if(id == 0) 
        res.sendFile(path.join(__dirname + '/public/images/S3_Icon_00(m).png'));
    else
        res.sendFile(path.join(__dirname + '/public/images/S3_Icon_01(m).png'));
})

app.listen(3000, function() {
    console.log('http://localhost:3000 is listened ! ');
});