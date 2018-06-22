function sqsm(a, b) {
    return Math.pow(a, 2) + Math.pow(b, 2);

}

sqsm(2,3)
sqsm.call(null, 2, 3) //null specifies what to bind to the this var
sqsm.apply(null, [2, 3])

var hello = {
    name: "WelcomeBot",
    speak: function (to) {
        return this.name + " says 'Welcome, " +  to + ".";
    }
}

var goodbye = {
    name: "FarewellBot",
    speak: function (to) {
        return this.name + " says 'Goodbye, " +  to + ".";
    }
}

hello.speak("Darya");
goodbye.speak("darya");

hello.speak.call(null, "Ethan") //will not work because of null instead of this, so no binding with the obj
hello.speak.call(hello, "Ethan")
hello.speak.call(goodbye, "Ethan")

var speak = hello.speak; //doesn't have binding to a obj
speak("Ethat") // will loose the binding with the obj
speak.call(hello, "Ethan")
hello.speak.call({ name: "AnotherGreetingBot"}, "Ethan") //created a new obj and called on it a method from different obj

function numberRobot(n) {
    this.robot = n; //because we can made this point to different obj this may be handy. We created a method without attaching it to any obj!
}

var robots = [hello, goodbye];
for(var i=0; i<robots.length; i++) {
    numberRobot.call(robots[i], i);
}

var robotRegistry = { robots: [], addRobot: function (r) { this.robots.push(r); }}
// robots.forEach(robotRegistry.addRobot) will not work because we lost binding to the obj
robots.forEach(robotRegistry.addRobot, robotRegistry)
//specified the obj to use. we tell the forEach what to bind this to




// bind
speak = hello.speak.bind(hello);
speak("Ethan")
speak.call(goodbye, "Ethan"); //will still yeild hello bot, because once the function has been bound it cannot be modified by call or apply

setTimeout(hello.speak, 3000); // no binding

setTimeout(hello.speak, 3000, "Ethan");

setTimeout(hello.speak.bind(hello), 3000, "Ethan");
















