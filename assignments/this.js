/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window

Whenever a function is contained in the global scope, the value of 'this' inside the function will be the window (also called Global) object.

* 2. Implicit

Whenever a function is called by a preceding dot (e.g. arr.length), the object before the dot is 'this'.

* 3. New

Whenever a constructor function is used 'this' refers to the specific instance of an object created and returned by the constructor function.

* 4. Explicit

Whenever .call() or .apply() are used, 'this' is explicitly defined within their input arguments.

*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function windowBinding () {
    return this;
}

console.log(windowBinding());

// Principle 2

// code example for Implicit Binding

var implicitBinding = {
    name: 'Shaun',
    sayHi: function () {
        return `Hi ${this.name}!`;
    },
}

console.log(implicitBinding.sayHi());

// Principle 3

// code example for New Binding

function Car (make, model) {
    this.make = make;
    this.model = model;
}

var myCar = new Car ('Ford', 'Fiesta');

console.log(myCar.make);

// Principle 4

// code example for Explicit Binding

Car.prototype.sayMakeAndModel = function () {
    return `${this.make} ${this.model}`;
}

var yourCar = new Car ('Misubishi', 'Pajero');

console.log(yourCar.sayMakeAndModel.call(myCar));