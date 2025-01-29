let str1 = "abcefg";
let str2 = new String("abcefg");

console.log(str1); // abcefg
console.log(str2); // [String: 'abcefg']
console.log(Object.getPrototypeOf(str2)); // {}

console.log(str1.length); // 3
console.log(str2.length); // 3

console.log(str1.charAt(1)); // b
console.log(str2.charAt(1)); // b

let str11 = str1.slice(1, 3);
console.log(str1, str11);

// str1.splice(1,2); // specifically for arrays. Strings in JavaScript are immutable
