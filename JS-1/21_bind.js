// the bind() method is used to create a new function that, when invoked, has its this value set to the provided value, and the arguments provided to bind() are prepended to the arguments passed when the new function is called.

// Key Characteristics of bind()
// Creates a new function: bind() does not invoke the function immediately. It returns a new function with the specified this and arguments.
// Permanent binding of this: The value of this inside the new function is permanently bound to the thisArg provided to bind(), regardless of how the function is called.
// Prepares arguments: The arguments provided to bind() are fixed and are prepended to any arguments passed when the function is called later.

// ! Use Case 1: Ensuring Proper this Context

const person = {
  name: "Bob",
  greet: function () {
    console.log(`Hello, I am ${this.name}`);
  },
};

const greetBob = person.greet;
greetBob(); // Output: Hello, I am undefined (because 'this' is not bound to 'person')

// Using bind to ensure 'this' is bound to 'person'
const greetPerson = person.greet.bind(person);
greetPerson(); // Output: Hello, I am Bob

// ! Use Case 2: Partial Function Application
function multiply(a, b) {
  return a * b;
}

// Creating a partially applied function that multiplies by 2
const multiplyByTwo = multiply.bind(null, 2);

console.log(multiplyByTwo(5)); // Output: 10
console.log(multiplyByTwo(3)); // Output: 6

// ! Use Case 3: Handling Event Listeners
const button = document.querySelector("button");

const person = {
  name: "Charlie",
  greet: function () {
    console.log(`Hello, I am ${this.name}`);
  },
};

// Without bind, 'this' would refer to the button element
button.addEventListener("click", person.greet); // 'this' inside greet would be the button

// Using bind to ensure 'this' refers to 'person'
button.addEventListener("click", person.greet.bind(person)); // 'this' inside greet will be 'person'
