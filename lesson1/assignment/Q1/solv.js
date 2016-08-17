/**
 * Created by User on 16/8/2016.
 */
var hostname = 'localhost';
var port = 3000;
var server = require('./server')();
server.listen(port, hostname, function () {
    console.log(`Server running at http://${hostname}:${port}/`);
})