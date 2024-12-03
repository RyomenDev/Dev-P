// ! the new keyword is used to create instances of objects and invoke constructor functions. It is commonly used with constructor functions or classes to create new objects with specific properties and methods.

// How the new Keyword Works
// When you invoke a constructor function with the new keyword, the following steps occur:

// 1- A new empty object is created.
// 2- The this keyword inside the constructor function is set to the newly created object.
// 3- The constructor function is executed, adding properties and methods to the new object.
// 4- The new object is returned (unless the constructor explicitly returns something else).

function Persons(name, age) {
  this.name = name;
  this.age = age;
}

const person1 = new Persons('Alice', 30);
console.log(person1.name); // Alice
console.log(person1.age);  // 30


class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const person2 = new Person('Bob', 25);
console.log(person2.name); // Bob
console.log(person2.age);  // 25
