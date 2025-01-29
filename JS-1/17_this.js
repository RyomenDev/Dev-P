// In the global execution context (outside of any function), this refers to the global object:
// In a browser, this refers to the window object.
// In Node.js, this refers to the global object.

console.log(this); // In a browser, it logs the window object else {}

function regularFunction() {
  console.log(this); // `this` refers to the global object (window in browsers)
}

// regularFunction();

//

// * When this is used inside an object method, it refers to the object that called the method (the object the method belongs to).

const person1 = {
  name: "Alice",
  greet: function () {
    console.log(`Hello, my name is ${this.name}`);
  },
};

person1.greet(); // `this` refers to the `person` object

//

// * When using this inside a constructor function, it refers to the new object that is being created by that constructor.

function Persons(name, age) {
  this.name = name;
  this.age = age;
}

const john = new Persons("John", 25);
console.log(john.name); // John

//

// * In an event handler, this refers to the element that triggered the event (the DOM element). However, if an arrow function is used, this will refer to the surrounding context instead of the event target.

// ! regular function:

// const button = document.querySelector("button");

// button.addEventListener("click", function () {
//   console.log(this); // `this` refers to the button element
// });

// ! an arrow function:

// const button = document.querySelector("button");

// button.addEventListener("click", () => {
//   console.log(this); // `this` refers to the surrounding context (e.g., window or undefined in strict mode)
// });

// ! this in call(), apply(), and bind()
// JavaScript allows you to explicitly set the value of this using call(), apply(), and bind().

// call(): Invokes the function immediately and allows you to specify the value of this.
// apply(): Similar to call(), but the arguments are passed as an array.
// bind(): Returns a new function with a specific this value and optional arguments, but does not execute it immediately.

function greet() {
  console.log(`Hello, ${this.name}`);
}

const person = { name: "Charlie" };

greet.call(person); // Hello, Charlie
greet.apply(person); // Hello, Charlie

const boundGreet = greet.bind(person);
boundGreet(); // Hello, Charlie
