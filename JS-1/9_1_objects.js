// * obj1 is created as a plain object with no prototype properties except for the default ones inherited from Object.prototype.
// * It has no own properties at the time of creation.

// & obj1 is a plain object where the property a is defined directly as its own property.
// & The property a exists on obj1 itself, not in its prototype.
// console.log(obj1); // cannot access
const obj1 = {
  a: "b",
};
// console.log(obj1); // { a: 'b' }
// console.log(obj1.a); // b

// * This creates a new object (obj2) with its prototype set to the object passed as an argument ({ a: "b" }).
// * obj2 itself will not have a property a. Instead, a will be accessible through its prototype.

// & obj2 is created with a prototype object { a: "b" }.
// & The property a exists in the prototype, not on obj2 itself.
// console.log(obj2); // Cannot access 'obj2' before initialization
const obj2 = Object.create({ a: "b" });

// console.log(obj2); // Logs: {}
// console.log(obj2.a);     // Logs: "b"

for (let key in obj1) {
  console.log(key); // a
}

for (let key in obj2) {
  console.log(key); // a
}

console.log(Object.keys(obj1)); // [ 'a' ]
console.log(Object.keys(obj2)); // []
