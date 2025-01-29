// for...in loop in JavaScript is used to iterate over the enumerable properties (keys) of an object. It's primarily designed for working with objects, not arrays, though it can technically be used with arrays (but not recommended for arrays due to unexpected behavior).

//! for (const key in object) {
//!   // Code to execute for each key
//! }

//  Iterating Over Object Properties

const user1 = { name: "Alice", age: 25, city: "Paris" };
for (const key in user1) {
  console.log(`${key}: ${user1[key]}`);
}
// Output:
// name: Alice
// age: 25
// city: Paris

// Check for Own Properties

const user2 = Object.create({ inheritedProp: "value" });
user2.name = "Bob";
user2.age = 30;

for (const key in user2) {
  if (user2.hasOwnProperty(key)) {
    console.log(`${key}: ${user2[key]}`);
  }
}
// Output:
// name: Bob
// age: 30

// for...in with Arrays
const arr = [10, 20, 30];
arr.customProp = 'extra';

for (const key in arr) {
  console.log(`${key}: ${arr[key]}`);
}
// Output:
// 0: 10
// 1: 20
// 2: 30
// customProp: extra
