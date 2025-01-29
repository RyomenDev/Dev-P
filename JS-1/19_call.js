// the call() method is used to invoke a function with a specified this value and individual arguments. It is a part of the Function prototype and allows you to invoke a function in a more flexible way, especially when you want to control the context (this) and pass arguments explicitly.

// Key Points:
// The call() method allows you to specify the context (this) for the function.
// The arguments passed to the function using call() are passed individually, not as an array.

// ! Use Case 1: Borrowing Methods - can use call() to borrow methods from one object and apply them to another object. This is useful for reusing code.

function greet(city, country) {
  console.log(`Hello, I am ${this.name} from ${city}, ${country}.`);
}

const person = { name: "Alice" };

greet.call(person, "Paris", "France"); // Hello, I am Alice from Paris, France.

// ! Use Case 2: Using call() with Constructors - working with a constructor function and you want to create a new instance of one object and call another constructor, you can use call() to invoke the second constructor inside the first one.

function Animal(name) {
  this.name = name;
}

function Dog(name, breed) {
  Animal.call(this, name); // Calling Animal constructor with Dog context
  this.breed = breed;
}

const myDog = new Dog("Max", "Golden Retriever");
console.log(myDog.name); // Max
console.log(myDog.breed); // Golden Retriever

// ! Use Case 3: Using call() with the Math Object - javaScript's built-in objects, such as Math, do not have the concept of this in their methods. However, you can still use call() to use methods from objects like Math on non-object values.

const num = 16;
console.log(Math.sqrt.call(Math, num)); // 4
