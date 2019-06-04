function scopeTest() {
    if(true) {
        var foo = 'bar'; //defined in function scope that is why it is available in JS (but not in other languages,
        //where block scope is used
    }
    console.log(foo)
}

//hoisting
// var declarations on top

/*
function scopeTest() {
    var foo; //declaration is hoisted
    if (true) {
        foo = 'bar'; //defined in function scope that is why it is available in JS (but not in other languages,
        //where block scope is used
    }
    console.log(foo)
}

function scopeTest() {
    var msg = "boring number";
    [1,2,3,4,5].forEach(function (n) {
        if(n<3) return console.log(n + ":" + msg); // 1 and 2 are undefined because
        var msg = "exciting number";
        console.log(n + ":" + msg);

    });
}

function scopeTest() {
    var msg;
    msg = "boring number";
    [1,2,3,4,5].forEach(function (n) {
        var msg;
        if(n<3) return console.log(n + ":" + msg);
        // 1 and 2 are undefined because the second declaration of msg overode the first one and is undefined
        msg = "exciting number";
        console.log(n + ":" + msg);

    });
}
*/

function scopeTest() {
    'use strict'; // use Always
    if(true) {
        let foo = 'bar';
        console.log(foo);
    }
    console.log(foo); //will be undefined, because let is a block scope var. and is related only to IF block
    // if replace let with var i'll have two bars
}
