// ! Higher-Order Function Taking a Function as Input -> Example: Array.prototype.map
const numbers = [1, 2, 3];
const squared = numbers.map((num) => num ** 2);
console.log(squared); // Output: [1, 4, 9]

// ! Higher-Order Function Returning a Function -> Example: Function Factory
function createMultiplier(multiplier) {
  return function (num) {
    return num * multiplier;
  };
}

const double = createMultiplier(2);
console.log(double(5)); // Output: 10

const triple = createMultiplier(3);
console.log(triple(5)); // Output: 15

//  ! Composing Higher-Order Functions -> Example: Chaining filter, map, and redu
const nums = [1, 2, 3, 4, 5];

// Filter for even numbers, square them, and calculate the sum.
const result = nums
  .filter((num) => num % 2 === 0) // [2, 4]
  .map((num) => num ** 2) // [4, 16]
  .reduce((sum, num) => sum + num, 0); // 20

console.log(result); // Output: 20

// ~  Advantages of Higher-Order Functions
// * Reusability: Abstract common patterns into reusable functions.
// * Modularity: Breaks problems into smaller, manageable functions.
// * Clean Code: Reduces the need for repetitive loops and conditions.
// * Functional Paradigm: Enables functional programming techniques like composition.
