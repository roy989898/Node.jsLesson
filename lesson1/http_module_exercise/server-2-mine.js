/**
 * Created by User on 16/8/2016.
 */

var http = require('http');
var fs = require('fs');
var path = require('path');


var hostname = 'localhost';
var port = 3000;
var server = http.createServer(function (req, res) {
    var method = req.method;
    var url = req.url;

    if (method == 'GET') {
        if (url == '/') url = '/index.html';

        var filePath = path.resolve('./lesson1/http_module_exercise/public' + url);
        fs.exists(filePath, function (exist) {
            if (exist) {
                res.writeHead(200, {'Content-Type': 'text/html'});
                fs.createReadStream(filePath).pipe(res);

            } else {
                res.writeHead(404, {'Content-Type': 'text/html'})
                res.end('<html><body><h1>Error 404: ' + filePath +
                    ' not exist</h1></body></html>');
            }

        });

    } else {
        res.writeHead(404, {'Content-Type': 'text/html'})
        res.end('<html><body><h1>Error 404: ' + req.method +
            ' not supported</h1></body></html>');
    }

});

function myLoop() {
    var i=0;
    for (i==0;i<100;i++){
        console.log(i)
    }

}
server.listen(port,hostname,function () {
    console.log('listent at: http://'+hostname+':'+port);
});
myLoop();