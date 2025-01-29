const obj1 = {
  key1: "a",
  key2: 1,
};

console.log(obj1); // { key1: 'a', key2: 1 }

obj1.key1 = "b";
console.log(obj1); // { key1: 'b', key2: 1 }

Object.freeze(obj1);
obj1.key1 = "c";
console.log(obj1); // { key1: 'b', key2: 1 }

console.log(Object.keys(obj1)); // [ 'key1', 'key2' ]
console.log(Object.entries(obj1)); // [ [ 'key1', 'b' ], [ 'key2', 1 ] ]

// ! let obj2=new obj1(); // obj1 is not a constructor

const obj2 = { key1: "a", key2: 1 };
const obj3 = obj2;

console.log(obj3); // { key1: 'a', key2: 1 }
obj3.key1 = "e";
console.log(obj2, obj3); // { key1: 'e', key2: 1 } { key1: 'e', key2: 1 }

const obj4 = { key1: "a", key2: 1 };
const obj5 = Object.create(obj4);
console.log(obj5); //{} empty object with obj1 as prototype
console.log(obj5.key1); //  "a" (inherited from obj1)
obj5.key1 = "d";
console.log(obj5.key1); //  "d"
console.log(obj4.key1); //  "d"

//

const obj6 = { key1: "a", key2: 1 };
const obj7 = Object.assign({}, obj6);
console.log(obj7); // Logs { key1: 'a', key2: 1 }

//

function Obj8() {
  this.key1 = "a";
  this.key2 = 1;
}
const obj9 = new Obj8();
console.log(obj9); // Logs { key1: 'a', key2: 1 }

//

class Obj10 {
  constructor() {
    this.key1 = "a";
    this.key2 = 1;
  }
}
const obj11 = new Obj10();
console.log(obj11); // Logs { key1: 'a', key2: 1 }

//

const { key1, key2 } = obj11;
console.log(key1, key2); // a 1
