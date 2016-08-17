
var express = require('express');
var http = require('http');
var morgan = require('morgan');
var bodyParser = require('body-parser');


var hostname = 'localhost';

var port = 3000;
var app = express();


/*app.use(function (req, res, next) {
 var header=req.headers;
 console.log(header);

 res.writeHead(200,{'Context-type':'text/html'});
 res.end('<html><body><h1>Hello World</h1></body></html>');

 });*/
app.use(morgan('dev'));
app.use(bodyParser.json());

app.all('/dishes', function (req, res, next) {
    res.writeHead(200, {'Content-type': 'text/html'});
    next();

});

app.get('/dishes', function (req, res, next) {
    res.end("will send all the dishes to you");


});


app.post('/dishes', function (req, res, next) {
    res.end("will add the dish "+req.body.name+ 'with detail'+req.body.description);


});

app.delete('/dishes', function(req, res, next){
    res.end('Deleting all dishes');
});

app.get('/dishes/:dishId', function(req,res,next){
    res.end('Will send details of the dish: ' + req.params.dishId +' to you!');
});

app.put('/dishes/:dishId', function(req, res, next){
    res.write('Updating the dish: ' + req.params.dishId + '\n');
    res.end('Will update the dish: ' + req.body.name +
        ' with details: ' + req.body.description);
});

app.delete('/dishes/:dishId', function(req, res, next){
    res.end('Deleting dish: ' + req.params.dishId);
});

app.use(express.static(__dirname + '/public'));


var server = http.createServer(app);
server.listen(port, hostname, function () {
    // console.log(__dirname);
    console.log('Server running at http://' + hostname + ':' + port);
});

