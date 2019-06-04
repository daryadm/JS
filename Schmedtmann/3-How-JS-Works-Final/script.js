/////////////////////////////////////
// Lecture: Hoisting

/*
// functions
calculateAge(1965);

function calculateAge(year) {
    console.log(2016 - year);
}

// retirement(1956);
var retirement = function(year) {
    console.log(65 - (2016 - year));
}


// variables

console.log(age);
var age = 23;

function foo() {
    console.log(age);
    var age = 65;
    console.log(age);
}
foo();
console.log(age);
*/



/////////////////////////////////////
// Lecture: Scoping

/*
// First scoping example
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}


// Example to show the differece between execution stack and scope chain
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    //console.log(c);
    console.log(a+d);
}
*/



/////////////////////////////////////
// Lecture: The this keyword

/*
//console.log(this);

calculateAge(1985);

function calculateAge(year) {
    console.log(2016 - year);
    console.log(this);
}

var john = {
    name: 'John',
    yearOfBirth: 1990,
    calculateAge: function() {
        console.log(this);
        console.log(2016 - this.yearOfBirth);
        
        function innerFunction() {
            console.log(this);
        }
        innerFunction();
    }
}

john.calculateAge();

var mike = {
    name: 'Mike',
    yearOfBirth: 1984
};


mike.calculateAge = john.calculateAge;
mike.calculateAge();
*/

/*
var markMass = 60;
var markH = 1.60;
var johnMass = 80;
var johnH = 1.80;

function bmi(mass, height) {
    bmi_ind = mass / (height * height);
    return bmi_ind;

}

markBmi = bmi(markMass, markH);
johnBmi = bmi(johnMass, johnH);


if (markBmi > johnBmi) {
    console.log("Mark's BMI (" + markBmi + ") is higher than John's (" + johnBmi + ")" );
    } else {
    console.log("John's BMI (" + johnBmi + ") is higher than Mark's (" + markBmi + ")" );
}

*/


var john = {
    name: "John",
    mass: 92,
    height: 1.95,
    calcBMI : function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
};

var mark = {
    name: "Mark",
    mass: 78,
    height: 1.69,
    calcBMI : function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
};

if (john.calcBMI() > mark.calcBMI()) { //because we have it returned
    console.log(john.name +" (" + john.bmi + ") > " + mark.name + "'s (" + mark.bmi);
} else if (mark.bmi > john.bmi) {
    console.log(mark.name +"'s (" + mark.bmi + ") > " + john.name + "'s (" + john.bmi);
} else {
    console.log("Mark's (" + mark.bmi + ") is === to John's (" + john.bmi +")");
}
