//data hiding
// Closure

function closure() {
    var insideClosure = "I'm inside a closure";
    return function () { //since it returns a function that uses insideClosure var, JS saves it for later, because it
        //doesn't know when the function will be called. The var will be kept until nothing is pointing to it.
        console.log(insideClosure);

    };

}
console.log(closure());
var fn = closure();
console.log(fn());



function getCounterFn() {
    var count = 0;
    return function (arg) {
        if(arg === "reset") {
            count = 0;
            console.log("counter reset");

        } else {
            console.log("function called " +  ++count + " times.");

        }


    };

}
var fn = getCounterFn();



function outerFunction () {
    const outer = `I see the outer variable!`

    function innerFunction() {
        console.log(outer)
    }

    return innerFunction
}

outerFunction()() // I see the outer variable!

function prepareCake (flavor) {
    return function () {
        setTimeout(_ => console.log(`Made a ${flavor} cake!`, 1000))
    }
}
const makeCakeLater = prepareCake('banana')
// And later in your code...
makeCakeLater()
// Made a banana cake!

setTimeout( function timeoutHandler(){ // <-- Look, I have a name!
    console.log( "I waited 1 second!" );
}, 1000 );



var a = 2;
(function IIFE(){
    var a = 3;
    console.log( a ); // 3
})();
console.log( a ); // 2

function countDown() {
    var i;
    for(i=5; i>0; i--) {
        setTimeout(function() { console.log(i);}, 1000) //will prints zeroes because it executes setTimeout, but not
        //the f that is inside it.
    }

}

function countDown() {
    var i;
    for (i = 5; i > 0; i--) {
        (function (icaptured) {
            setTimeout(function () {
                console.log(icaptured);
            }, 1000); //still without a pause
        })(i);
    }
}

function countDown() {
    var i;
    for (i = 5; i > 0; i--) {
        (function (icaptured) {
            setTimeout(function () {
                console.log(icaptured);
            }, (5 - icaptured) * 1000);
        })(i);
    }
}