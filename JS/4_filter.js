// The filter() method in JavaScript is used to create a new array that includes only the elements of the original array that satisfy a specific condition (i.e., for which the callback function returns true).

//!  array.filter(callback(currentValue, index, array), thisArg);

// Filter Even Numbers

const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers); // [2, 4]

// Remove Falsy Values

const mixed = [0, 1, false, 2, "", 3, null];
const truthyValues = mixed.filter(Boolean);
console.log(truthyValues); // [1, 2, 3]

// Filter Elements by Index

const nums1 = [10, 20, 30, 40, 50];
const evenIndexValues = nums1.filter((_, index) => index % 2 === 0);
console.log(evenIndexValues); // [10, 30, 50]

// Chain filter() with Other Methods

const nums2 = [1, 2, 3, 4, 5];
const squaredEvenNumbers = nums2
  .filter((num) => num % 2 === 0) // Filter even numbers
  .map((num) => num ** 2); // Square them
console.log(squaredEvenNumbers); // [4, 16]

//  Filter Using External this

const filterCriteria = {
  minAge: 25,
};

const users = [
  { name: "Alice", age: 22 },
  { name: "Bob", age: 30 },
];
const adults = users.filter(function (user) {
  return user.age >= this.minAge;
}, filterCriteria);

console.log(adults); // [{ name: 'Bob', age: 30 }]
