//  Nullish Coalescing Operator (??)
// If left is null or undefined, the operator returns right. Otherwise, it returns left

// Difference Between || and ??
// While both ?? (nullish coalescing) and || (logical OR) can be used to provide default values, there's a key difference between them:

// || returns the right-hand operand if the left-hand operand is falsy (i.e., false, 0, NaN, "", null, undefined).
// ?? only returns the right-hand operand if the left-hand operand is null or undefined.

let result11 = 2 ?? 3;
let result12 = 2 || 3;

console.log(result11, result12); // 2 2

let res11 = null ?? 5;
let res12 = null || 5;

console.log(res11, res21); // 5 5

let res11 = null ?? 5;
let res21 = null || 5;

console.log(res11, res12); // 5 5

// let res11 = null ?? 5;
// let res21 = null || 5;

// console.log(res11, res21); // 5 5
