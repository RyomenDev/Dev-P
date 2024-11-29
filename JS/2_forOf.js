// for...of loop in JavaScript is used to iterate over iterable objects like arrays, strings, maps, sets, and more. Unlike forEach, it works seamlessly with async/await and allows break, continue, and return statements.

//! for (const element of iterable) {
// !   // Code to execute for each element
// ! }

// Iterate Over an Array

const numbers = [10, 20, 30];
for (const num of numbers) {
  console.log(num); // 10, 20, 30
}

// Iterate Over a String

const str = "hello";
for (const char of str) {
  console.log(char); // 'h', 'e', 'l', 'l', 'o'
}

// Iterate Over a Set

const set = new Set([1, 2, 3]);
for (const value of set) {
  console.log(value); // 1, 2, 3
}

// Iterate Over a Map

const map = new Map([
  ["a", 1],
  ["b", 2],
  ["c", 3],
]);
for (const [key, value] of map) {
  console.log(`${key}: ${value}`); // a: 1, b: 2, c: 3
}

// Nested for...of Loops

const matrix = [
  [1, 2],
  [3, 4],
];
for (const row of matrix) {
  for (const num of row) {
    console.log(num); // 1, 2, 3, 4
  }
}

// @ SyntaxError: await is only valid in async functions and the top level bodies of modules
// for...of with async/await

// const asyncFunction = async (num) => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log(num);
//       resolve();
//     }, 1000);
//   });
// };

// const nums = [1, 2, 3];
// for (const num of nums) {
//   await asyncFunction(num);
// }

//Expected Output: 1, 2, 3 (each with a delay of 1 second)
