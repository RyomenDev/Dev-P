// ! The reduce method in JavaScript is a higher-order array method used to reduce an array to a single value by iteratively applying a callback function to each element of the array.
// array.reduce(callback, initialValue);
// callback PARAMETERS = accumulator, currentValue, currentIndex (optional), array (optional)

const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, current) => acc + current, 0);
console.log(sum); // Output: 15


const fruits = [
  { type: 'apple', quantity: 10 },
  { type: 'orange', quantity: 5 },
  { type: 'apple', quantity: 3 },
];

const grouped = fruits.reduce((acc, fruit) => {
  acc[fruit.type] = (acc[fruit.type] || 0) + fruit.quantity;
  return acc;
}, {});

console.log(grouped); // Output: { apple: 13, orange: 5 }
