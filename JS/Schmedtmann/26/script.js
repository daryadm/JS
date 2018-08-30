///////////////////////////////////////
// Lecture: variables
/*
var name = 'John';
console.log(name);

var lastName = 'Smith';
console.log(lastName);

var age = 26;
console.log(age);

var fullAge = true;
console.log(fullAge);
*/



///////////////////////////////////////
// Lecture: variables 2
/*
var name = 'John';
var age = 26;

//console.log(name + age);
//console.log(age + age);

var job, isMarried;

//console.log(job);

job = 'teacher';
isMarried = false;

console.log(name + ' is a ' + age + ' years old ' + job + '. Is he married? ' + isMarried + '.');

age = 'thirty six';
job = 'driver';

console.log(name + ' is a ' + age + ' years old ' + job + '. Is he married? ' + isMarried + '.');


//var lastName = prompt('What is the last name?');
//console.log(lastName);

alert(name + ' is a ' + age + ' years old ' + job + '. Is he married? ' + isMarried + '.');
*/



///////////////////////////////////////
// Lecture: operators
/*
var now = 2016;
var birthYear = now - 26;

birthYear = now - 26 * 2;
//2016 - 52
//1964

console.log(birthYear);

var ageJohn = 30;
var ageMark = 30;

ageJohn = ageMark = (3 + 5) * 4 - 6;
//ageJohn = ageMark = 26
//ageJohn = 26

ageJohn++;
ageMark *= 2;
ageMark = ageMark * 2;

console.log(ageJohn);
console.log(ageMark);
*/



///////////////////////////////////////
// Lecture: if/else statements
/*
var name = 'John';
var age = 26;
var isMarried = 'yes';

if (isMarried === 'yes') {
    console.log(name + ' is married!');
} else {
    console.log(name + ' will hopefully marry soon :)');
}

isMarried = true;

if(isMarried) {
    console.log('YES!');
} else {
    console.log('NO!');
}

if(isMarried) {
    console.log('YES!');
}

if (23 === "23") {
    console.log('Something to print...');
}
*/



///////////////////////////////////////
// Lecture: boolean logic and switch
/*
var age = 20;

if (age < 20) {
    console.log('John is a teenager');
} else if (age >= 20 && age < 30) {
    console.log('John is a young man.');
} else {
    console.log('John is a man.');
}




var job = 'teacher';

job = prompt('What does john do?');

switch (job) {
    case 'teacher':
        console.log('John teaches kids.');
        break;
    case 'driver':
        console.log('John drives a cab in Lisbon.');
        break;
    case 'cop':
        console.log('John helps fight crime.');
        break;
    default:
        console.log('John does something else.');
}
*/



///////////////////////////////////////
// CODING CHALLENGE 1

/*
John and a friend invented a simple game where the player with the highest value of his height (in centimeters) plus five times his age wins (what a silly game :)

1. Create variables for the heights and ages of two friends and assign them some values
2. Calculate their scores
3. Decide who wins and print the winner to the console. Include the score in the string that you output to the console. Don't forget that there can be a draw (both players with the same score).

4. EXTRA: Add a third player and now decide who wins. Hint: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)

*//*
var age1 = 26;
var age2 = 29;
var height1 = 180;
var height2 = 165;

var score1 = height1 + 5 * age1;
var score2 = height2 + 5 * age2;

if (score1 > score2) {
    console.log('The winner is 1 with score:' + score1);
}    else if (score1 === score2) {
    console.log('Draw');
}
    else {
    console.log('The winner is 2 with score:' + score2);
}

*/
























/*
// SOLUTION:
var heightJohn = 170;
var heightMike = 195;
var ageJohn = 36;
var ageMike = 29;

var scoreJohn = heightJohn + 5 * ageJohn;
var scoreMike = heightMike + 5 * ageMike;


if (scoreJohn > scoreMike) {
    console.log('John wins the game with ' + scoreJohn + ' points!');
} else if (scoreMike > scoreJohn) {
    console.log('Mike wins the game with ' + scoreMike + ' points!');
} else if (scoreJohn === scoreMike) {
    console.log('There is a draw.');
}

var heightMary = 158;
var ageMary = 31;
var scoreMary = heightMary + 5 * ageMary;


if (scoreJohn > scoreMike && scoreJohn > scoreMary) {
    console.log('John wins the game with ' + scoreJohn + ' points!');
} else if (scoreMike > scoreJohn && scoreMike > scoreMary) {
    console.log('Mike wins the game with ' + scoreMike + ' points!');
} else if (scoreMary > scoreJohn && scoreMary > scoreMike) {
    console.log('Mary wins the game with ' + scoreMary + ' points!');
} else {
    console.log('It\'s a draw.');
}




///////////////////////////////////////
// Lecture: Functions

/*
function calculateAge(yearOfBirth) {
    var age = 2016 - yearOfBirth;
    return age;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1969);
var ageMary = calculateAge(1948);


function yearsUntilRetirement(name, year) {
    var age = calculateAge(year);
    var retirement = 65 - age;
    
    if (retirement >= 0) {
        console.log(name + ' retires in ' + retirement + ' years.');
    } else {
        console.log(name + ' is already retired.');
    }
}


yearsUntilRetirement('John', 1990);
yearsUntilRetirement('Mike', 1969);
yearsUntilRetirement('Mary', 1948);
*/



///////////////////////////////////////
// Lecture: Statements and expressions
/*

//function declaration
function someFun(par) {
    //code
}

// function expression
var someFun = function(par) {
    //code
}

//Expressions
3 + 4;
var x = 3;

//statements
if (x === 5) {
    //do soemthing
}
*/



///////////////////////////////////////
// Lecture: Arrays
/*
var names = ['John', 'Jane', 'Mark'];
var years = new Array(1990, 1969, 1948);

console.log(names[2]);
names[1] = 'Ben';
console.log(names);


var john = ['John', 'Smith', 1990, 'designer', false];

john.push('blue');
john.unshift('Mr.');
john.pop();
john.shift();
console.log(john);

if (john.indexOf('teacher') === -1) { // if it is in the array
    console.log('John is NOT a teacher.');
}
*/



///////////////////////////////////////
// Lecture: Objects
/*
var john = {  //object literal
    name: 'John',
    lastName: 'Smith',
    yearOfBirth: 1990,
    job: 'teacher',
    isMarried: false
};

console.log(john.lastName);
console.log(john['lastName']);

var xyz = 'job';
console.log(john[xyz]);
//console.log(john.xyz); // doesn't work

//mutating the object

john.lastName = 'Miller';
john['job'] = 'programmer';

console.log(john);



// new obl syntax
var jane = new Object();
jane.name = 'Jane';
jane.lastName = 'Smith';
jane['yearOfBirth'] = 1969;
jane['job'] = 'retired';
jane['isMarried'] = true;

console.log(jane);

8?


///////////////////////////////////////
// Lecture: Objects and methods

// v1.0
/*
var john = {
    name: 'John',
    lastName: 'Smith',
    yearOfBirth: 1990,
    job: 'teacher',
    isMarried: false,
    family: ['Jane', 'Mark', 'Bob'],
    calculateAge: function() {
        return 2016 - this.yearOfBirth;
    }
};

//console.log(john.calculateAge(1970));
console.log(john.calculateAge());

var age = john.calculateAge();
john.age = age;

console.log(john);



//v2.0
var john = {
    name: 'John',
    lastName: 'Smith',
    yearOfBirth: 1990,
    job: 'teacher',
    isMarried: false,
    family: ['Jane', 'Mark', 'Bob'],
    calculateAge: function() {
        this.age = 2016 - this.yearOfBirth;
    }
};

john.calculateAge();
console.log(john);


var mike = {
    yearOfBirth: 1950,
    calculateAge: function() {
        this.age = 2016 - this.yearOfBirth;
    }
};

mike.calculateAge();
console.log(mike);
*/
/*
var senya = {
    name: 'Senya',
    yearOfBirth: 2012,
    siblings: ['Vova','Yolka'],
    parents: ['Masha', 'Dasha'],
    calculateAge: function () {
        this.age = 2018 - this.yearOfBirth;

    },
    addSibling: function (nameOfSibling) {
        this.siblings.push(nameOfSibling);

    }

};

senya.addSibling('Somebody')
senya.pets = ['Jypsy', 'Dosa', 'Rufus', 'Una']
console.log(senya);
*/
///////////////////////////////////////
// Lecture: Loops

/*
for (var i = 0; i < 10; i++) {
    console.log(i);
}
*/

/*
0, true, print 0, update i to 1
1, true, print 1, update i to 2
.
.
.
9, true, print 9, update i to 10
10, FALSE, end loop!
*/

/*
var names = ['John', 'Jane', 'Mary', 'Mark', 'Bob'];

// for loops
for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
}

for (var i = names.length - 1; i >= 0; i--) {
    console.log(names[i]);
}


// while loops
var i = 0;
while(i < names.length) {
    console.log(names[i]);
    i++;
}

// break and continue
for (var i = 1; i <= 5; i++) {
    console.log(i);
    
    if (i === 3) {
        break;
    }
}

for (var i = 1; i <= 5; i++) {
    if (i === 3) {
        continue;
    }
    
    console.log(i);
}
*/
/*
bornYears2 = [2002, 1991, 1987, 1969, 1957];
bornYears = [2012, 2001, 1997, 1979, 1967];

function ages (years) {
    agesArray = [];
    for (var i = 0; i <= years.length - 1; i++) {
        var age = 2018 - years[i];
        agesArray.push(age);
    }
    return agesArray
}

function isFullAge(agesArray) {
    isFullAges = [];
    for (var i = 0; i <= agesArray.length - 1; i++) {

        if (agesArray[i] >= 18) {
            var fullAge = true;
            isFullAges.push(fullAge);
            console.log("The " + (i + 1) + "th person is full age and their age is " + agesArray[i]);
        } else {
            var fullAge = false;
            isFullAges.push(fullAge);
            }
        }

}



function printFullAge(years) {
    ages(years);
    console.log(agesArray);
    isFullAge(agesArray);
    console.log(isFullAges);

}

var full_2 = printFullAge(bornYears2);
var full_1 = printFullAge(bornYears);

*/

///////////////////////////////////////
// CODING CHALLENGE 2

/*
1. Create an array with some years where persons were born
2. Create an empty array (just [] )
3. Use a loop to fill the array with the ages of the persons
4. Use another loop to log into the console whether each person is of full age (18 or older), as well as their age

5. Finally, create a function called printFullAge which receives the array of years as an argument, executes the steps 2., 3. and 4. and returns an array of true/false boolean values: true if the person is of full age (>= 18 years) and false if not (< 18 years)
6. Call the function with two different arrays and store the results in two variables: full_1 and full_2

Example input:  [1965, 2008, 1992]
Example output: [true, false, true]

Hint: you can use a loop not only to read from an array, like y[i], but also to set values in an array, like y[i] = ... You can also use the specific array methods.
*/

/*
function printFullAge(years) {
    var ages = [];
    var fullAges = [];
    
    for (var i = 0; i < years.length; i++) {
        ages[i] = 2016 - years[i];
    }

    for (i = 0; i < ages.length; i++) {
        if (ages[i] >= 18) {
            console.log('Person ' + (i + 1) + ' is ' + ages[i] + ' years old, and is of full age.');
            fullAges.push(true);
        } else {
            console.log('Person ' + (i + 1) + ' is ' + ages[i] + ' years old, and is NOT of full age.');
            fullAges.push(false);
        }
    }
    
    return fullAges;
}

var years = [2001, 1985, 1994, 2014, 1973];
var full_1 = printFullAge(years);
var full_2 = printFullAge([2012, 1915, 1999]);
*/



//Coding challenge 5
var johnBills = {
    name : "John",
    bills : [124, 48, 268, 180, 42],
    calcTips : function () {
        this.tips = [];
        this.totals = [];
        for (var i = 0; i < this.bills.length; i++)
        {
            if (this.bills[i] < 50) {
                this.tips.push(this.bills[i]*0.2);
                this.totals.push(this.bills[i]+this.bills[i]*0.2)
            } else if (this.bills[i] >= 50 && this.bills[i] < 200){
                this.tips.push(this.bills[i]*0.15);
                this.totals.push(this.bills[i]+this.bills[i]*0.15)
            } else {
                this.tips.push(this.bills[i]*0.1);
                this.totals.push(this.bills[i]+this.bills[i]*0.1)
            }
        }
        console.log(this.name + "'s tips : " + this.tips);
        console.log(this.name + "'s totals: " + this.totals);
        return this.tips, this.totals;

    }

};

/* Should have been done this way
var johnBills = {
    name : "John",
    bills : [124, 48, 268, 180, 42],
    calcTips : function () {
        this.tips = [];
        this.totals = [];
        for (var i = 0; i < this.bills.length; i++)
        {
            var percentage;
            var bill = this.bills[i];

            if (bill < 50) {
                percentage = .2;
            } else if (bill >= 50 && bill < 200){
                percentage = .15;
            } else {
                percentage = .1;
            }
        }
        this.tips[i] = bill * percentage;
        this.totals[i] = bill + bill * percentage;
        console.log(this.name + "'s tips : " + this.tips);
        console.log(this.name + "'s totals: " + this.totals);
        return this.tips, this.totals;

    }

};



*/

var markBills = {
    name: "Mark",
    bills: [77, 375, 110, 45],
    calcTips: function () {
        this.tips = [];
        this.totals = [];
        for (var i = 0; i < this.bills.length; i++)
        {
            if (this.bills[i] < 100) {
                this.tips.push(this.bills[i] * 0.2);
                this.totals.push(this.bills[i] + this.bills[i] * 0.2)
            } else if (this.bills[i] >= 100 && this.bills[i] < 300) {
                this.tips.push(this.bills[i] * 0.1);
                this.totals.push(this.bills[i] + this.bills[i] * 0.1)
            } else {
                this.tips.push(this.bills[i] * 0.25);
                this.totals.push(this.bills[i] + this.bills[i] * 0.25)
            }
        }
        console.log(this.name + "'s tips: " + this.tips);
        console.log(this.name + "'s totals: " + this.totals);
        return this.tips, this.totals;
    }
}

johnBills.calcTips();
markBills.calcTips();

function calcAvgTips(tips) {
    sum = 0;
    for (var i=0; i < tips.length; i++) {
        sum = sum + tips[i];
    }
    var avgTips = sum / tips.length;
    return avgTips;

}

console.log(johnBills.name + "'s avg tips " + calcAvgTips(johnBills.tips));
console.log(markBills.name + "'s avg tips " + calcAvgTips(markBills.tips));
johnBills.average = calcAvgTips(johnBills.tips);

console.log(johnBills, markBills);