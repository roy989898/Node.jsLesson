/**
 * Created by User on 16/8/2016.
 */
var express = require('express');
var http = require('http');
var hostname = 'localhost';
var morgan = require('morgan');
var port = 3000;
var app = express();



/*app.use(function (req, res, next) {
    var header=req.headers;
    console.log(header);

    res.writeHead(200,{'Context-type':'text/html'});
    res.end('<html><body><h1>Hello World</h1></body></html>');

});*/
app.use(morgan('dev'));
app.use(express.static(__dirname+'/public'));


var server=http.createServer(app);
server.listen(port, hostname, function () {
    // console.log(__dirname);
    console.log('Server running at http://'+hostname+':'+port);
});

