let arr1 = [1, 2, 3, 4, 5];

console.log(arr1.slice(1, 3));
// console.log(arr1.splice(1,3)); // leaves rest of the part
console.log(arr1); // [ 1, 5 ]

let arr2 = arr1;
console.log(arr2.splice(1, 3)); // leaves rest of the part and change in both arr1, arr2
console.log(arr1, arr2); // [ 1, 5 ] [ 1, 5 ]

let arr3 = ["a", "b", "c", "d"];

console.log(...arr1, ...arr3); // 1 5 a b c d

let arr4 = [1, 2, 3, 4, 5];
const fun1 = (a, ...b) => {
  console.log(a); // 1
  console.log(b); // [ [ 2, 3, 4, 5 ] ]
  // return a+b;
};

fun1(arr4[0], arr4.slice(1, 6));

const fun2 = (a, ...b) => {
  console.log("First argument (a):", a); // 1
  console.log("Rest arguments (b):", b); //[ 2, 3, 4, 5 ]
  return [a, ...b]; // Combines `a` and `b` using the spread operator
};

// Using spread operator to pass elements of arr4 to the function
console.log(fun2(...arr4)); //  [1, 2, 3, 4, 5];
