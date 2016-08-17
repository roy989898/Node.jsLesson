/**
 * Created by User on 16/8/2016.
 */


var rect = require('./rectangle-2');

function solveRect(l, b) {
    rect(l, b, function (err, rectangle) {
        if (err) {
            console.log(err);
        } else {
            var p = rectangle.perimeter();
            var a = rectangle.area();
            console.log("perimeter=" + p);
            console.log("area=" + a);
        }

    })
};

solveRect(2, 4);
solveRect(3, 5);
solveRect(-3, 5);