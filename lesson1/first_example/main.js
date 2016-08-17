/* Hello, World! program in node.js */
console.log("Hello, Roy!");

/*var rr=require("./rectangle")();
var i=rr.perimeter(7,7);


console.log(i);*/

function do_a(){
    // 模擬一個需要長間的 function
    setTimeout( function(){
        console.log( '`do_a`: 這個需要的時間比 `do_b` 長' );
        console.log( '`do_b`: 這本來應該出現在 `do_a` 之後但是卻先出現了' );
    }, 1000 );
}

function do_b(){

}

do_a();
do_b();
