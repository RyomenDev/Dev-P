// the static keyword is used to define static methods or static properties within a class. Static methods and properties are associated with the class itself rather than with instances of the class. This means you can access them directly on the class, without creating an instance of the class.       

// Key Characteristics of the static Keyword

// * Static Methods:
// A static method is a method that is called on the class itself, not on an instance of the class.
// It is not accessible via instances of the class; instead, it is called on the class itself.

//  * Static Properties:

// Similarly to static methods, static properties are properties that belong to the class, not to individual instances.
// Static properties can be accessed directly on the class, not on instances.

//

// ! When to Use Static Methods and Properties
// * Utility Functions:  Static methods are ideal for utility functions or helper methods that do not depend on the state of any particular instance.
// * Shared Data Across All Instances: Static properties can be useful when you need to store data that should be shared across all instances of a class, such as a counter for the number of instances created.

// ! Example of Static Methods
class MathUtils {
  static add(a, b) {
    return a + b;
  }

  static multiply(a, b) {
    return a * b;
  }
}

console.log(MathUtils.add(2, 3)); // Output: 5
console.log(MathUtils.multiply(2, 3)); // Output: 6

// ! Example of Static Properties
class User {
  static count = 0;

  constructor(name) {
    this.name = name;
    User.count++;
  }
}

const user1 = new User("Alice");
const user2 = new User("Bob");

console.log(User.count); // Output: 2

