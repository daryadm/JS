function Cart() {
    this.store = "Granny's Groceries";
    this.items = [];

}

Cart.prototype.total = function () {
    return this.items.reduce(function(a,item) { return a+= item.price;},0);

    }


var cart1 = new Cart();
cart1.items.push({ name: "mayonaise", price: 2.27});


//prototype chain

function Animal() {} //constructor
function Mamal() {}
function Cat() {}


//establish inheritance hierarchy
Mamal.prototype = Object.create(Animal.prototype); // make Mamal a sub-class of Animal. Object.create will copy all
// the properties including a reference to the constructor function that is used to create objects of this tiem
Mamal.prototype.constructor = Mamal; // corrctly referencing the conctructor function
Cat.prototype = Object.create(Mamal.prototype); // order is important
Cat.prototype.constructor = Cat;


// data hiding

function Cart() {
    var items = [];

    this.getItems = function() {
        return items.slice(); //don't return items array because it will be accessible outside the f,
        //if we use slice() without arguments it creates a copy of items array
    }

    this.addItem = function (item) { //should be defined in the constructor so to have access to the closuer
        items.push(item);

    };
}

var cart = new Cart();
cart.addItem({ name: "broccoli", price: 2.79});

cart.items //undefined because var items is inside f Cart
var itemsOutside = cart.getItems();


//Helper functions to facilitate OOP
