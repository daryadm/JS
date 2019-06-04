Function.prototype.method = function(name, func) {
	this.prototype[name] = func;
	return this;
}

Cart.prototype.total = function() {/* impl */}
Cart.prototype.empty = function() {/* impl */}

//instead two lines above, and using the upper thing we can write:

Cart
	.method('total', function() {/* impl */})
    .method('empty', function() {/* impl */});


function Animal() {} //constructor
function Mamal() {}
function Cat() {}


//establish inheritance hierarchy
Mamal.prototype = Object.create(Animal.prototype); // make Mamal a sub-class of Animal. Object.create will copy all
// the properties including a reference to the constructor function that is used to create objects of this tiem
Mamal.prototype.constructor = Mamal; // corrctly referencing the conctructor function
Cat.prototype = Object.create(Mamal.prototype); // order is important
Cat.prototype.constructor = Cat;


Function.prototype.extends = function(superclass) {
	this.prototype = Object.create(superclass.prototype);
	this.prototype.constructor = this;
}

// instead of establishing inheritance hierarchy, with the extends function we can do in easier

Mamal.extends(Animal); //order is still important!
Cat.extends(Mamal);


