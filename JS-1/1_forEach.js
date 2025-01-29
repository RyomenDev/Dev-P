// For each : used to iterate over elements of an array and execute a provided callback function for each element.
// forEach doesn't work well with async functions since it doesn’t wait for promises to resolve:

// ! array.forEach(callback(currentValue, index, array), thisArg);

let myArr = [1, 2, 3, 4, 5, "a"];

// Print All Elements

myArr.forEach((element) => {
  console.log(element); // 1 2 3 4 5 a
});

// Access Index and Element

const fruits = ["apple", "banana", "cherry"];
fruits.forEach((fruit, index) => {
  console.log(`Index: ${index}, Fruit: ${fruit}`);

  /* Index: 0, Fruit: apple
    Index: 1, Fruit: banana
    Index: 2, Fruit: cherry
*/
});

// Modify Elements (Not Recommended)

const numbers = [1, 2, 3];
numbers.forEach((num, index, arr) => {
  arr[index] = num * 2;
});
console.log(numbers); // [2, 4, 6]

// Use thisArg -refer to an external object.

const multiplier = {
  factor: 2,
};
const nums = [1, 2, 3];
nums.forEach(function (num) {
  console.log(num * this.factor);
}, multiplier); // Output: 2 4 6

// Nested Arrays

const matrix = [
  [1, 2],
  [3, 4],
];
matrix.forEach((row) => {
  row.forEach((num) => {
    console.log(num);
  });
});

// forEach with a Map

const map = new Map([
  ["a", 1],
  ["b", 2],
]);
map.forEach((value, key) => {
  console.log(`${key}: ${value}`);
});

//
const str = "hello";
str.forEach((char) => {
  console.log(char); // NOT a function
});
