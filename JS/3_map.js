// The .map() method in JavaScript is a powerful tool used to transform elements in an array, creating a new array based on the results of a provided callback function. It doesn’t modify the original array and is commonly used for operations like mapping, transforming, or extracting data.

// ! array.map(callback(currentValue, index, array), thisArg);

// Transform Elements

const numbers = [1, 2, 3, 4];
const doubled = numbers.map((num) => num * 2);
console.log(doubled); // [2, 4, 6, 8]

// Extract Properties from Objects

const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
];
const names = users.map((user) => user.name);
console.log(names); // ['Alice', 'Bob']

// Format Strings

const words = ["hello", "world"];
const upperCased = words.map((word) => word.toUpperCase());
console.log(upperCased); // ['HELLO', 'WORLD']

// Convert Data Types

const stringNumbers = ["1", "2", "3"];
const nums = stringNumbers.map(Number);
console.log(nums); // [1, 2, 3]

// Add Index to Elements

const items = ["a", "b", "c"];
const indexedItems = items.map((item, index) => `${index}: ${item}`);
console.log(indexedItems); // ['0: a', '1: b', '2: c']
