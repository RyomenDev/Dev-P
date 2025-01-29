// he apply() method is similar to call(), but the primary difference is how arguments are passed to the function. Both methods are used to invoke a function with a specific this value, but apply() accepts the arguments as an array (or an array-like object), whereas call() passes arguments individually.

// Key Points about apply()
// apply() allows you to call a function with a specific this value.
// It accepts the function arguments as an array, which is useful when the number of arguments is dynamic or unknown.
// The arguments must be passed in an array format (or an array-like object).

// ! Use Case 1: Borrowing Methods (from another object

const person = {
  name: 'Bob',
  greet: function(city, country) {
    console.log('Hello ' + this.name + ' from ' + city + ', ' + country);
  }
};

const anotherPerson = { name: 'Charlie' };

// Borrowing greet method from person and applying it to anotherPerson
person.greet.apply(anotherPerson, ['Paris', 'France']); 
// Output: Hello Charlie from Paris, France

// ! Use Case 2: Using apply() for Math Functions

const numbers = [1, 3, 7, 2, 5];

// Using Math.max with apply to find the maximum number
const max = Math.max.apply(null, numbers); // 7

// Using Math.min with apply to find the minimum number
const min = Math.min.apply(null, numbers); // 1

console.log(max); // Output: 7
console.log(min); // Output: 1

// ! Use Case 3: Using apply() in Constructors
function Animal(name) {
  this.name = name;
}

function Dog(name, breed) {
  Animal.apply(this, [name]); // Borrow Animal's constructor
  this.breed = breed;
}

const myDog = new Dog('Max', 'Golden Retriever');
console.log(myDog.name);  // Max
console.log(myDog.breed); // Golden Retriever
