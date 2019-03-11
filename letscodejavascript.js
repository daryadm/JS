var answer = {
    get: function fn1() {
        return this.val;
    },
    val: 42
};

var firmAnswer = Object.create(answer);
firmAnswer.get = function fn2() {
    return answer.get.call(this) + "!!"  //if I don't have .call(this) I will get 42!! when calling firmAnswer.get();
};

firmAnswer.val = 3.14;


//Separate your methods from your data
// Classes are about methods and instances are about data. We create classes and instanciate. Extend prototype. Initialize instance. 
//_val - property is private, you shouldn't change it
// PROTOTYPAL MODEL
var answerPrototype ={
    constructor: function fn0(value) {
        this._val = value;
    },    
    get: function fn1() {
        return this._val;
    }
};

var firmAnswerPrototype = Object.create(answerPrototype);
firmAnswerPrototype.get = function fn2(){
    return answerPrototype.get.call(this) + "!!";
};

var magicAnswer = Object.create(firmAnswerPrototype);
magicAnswer.constructor(3);

//CLASSICAL MODEL
function MyClass() {
 //   this._val = value; value as arg
}
MyClass.prototype.method = function (){
}

function MySubClass() {
    MySubClass.call(this);
}
MySubClass.prototype = Object.create(MyClass.prototype);
MySubClass.prototype.constructor = MySubClass;

MySubClasss.prototype.method = function() {
    MyClass.prototype.method.call(this);
}