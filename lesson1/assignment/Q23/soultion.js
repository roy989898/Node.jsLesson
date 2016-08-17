/**
 * Created by User on 17/8/2016.
 */
var express = require('express');
var morgan = require('morgan');
var promoRouter=require('./promoRouter')();

var hostname = 'localhost';
var port = 3000;

var app = express();
app.use(morgan('dev'));



app.use('/leadership', promoRouter);
app.listen(port, hostname, function () {
    console.log('listen at: http://' + hostname + ':' + port);

})
