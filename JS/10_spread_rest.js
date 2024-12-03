function demo(first, ...rest) {
  console.log(first); // First element
  console.log(rest); // Rest of the elements
}

const nums = [1, 2, 3, 4];
demo(...nums); // Spread the array into individual arguments

//

const arr1 = [1, 2];
const arr2 = [3, 4];
const combined = [...arr1, ...arr2];
console.log(combined); // Output: [1, 2, 3, 4]

//

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const merged = { ...obj1, ...obj2 };
console.log(merged); // Output: { a: 1, b: 2, c: 3, d: 4 }
