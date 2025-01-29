const myArr1 = [1, 2, 3, 4];

Array.prototype.myCustomMethod1 = () => {
  console.log("hello");
};

// console.log(myArr1.myCustomMethod1());  // hello 1 time

//

Array.prototype.myCustomMethod2 = (callback) => {
  for (let i = 0; i < this.length; i++) console.log("hello");
};
// console.log(myArr1.myCustomMethod2()); // undefined

Array.prototype.myCustomMethod3 = function () {
  for (let i = 0; i < this.length; i++) console.log("hello");
};

// console.log(myArr1.myCustomMethod3()); // hello 4 times

const myArr2 = [10, 20, 30, 40];

Array.prototype.myCustomMethod4 = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this); // Execute callback with value, index, and array
  }
};

// Proper callback function passed to the custom method
myArr2.myCustomMethod4((element, index, array) => {
  //   console.log(`hello: ${element + 10}`); // Custom logic here
});
// myArr1.myCustomMethod4((element, index, array) => {
//   console.log(`hello: ${element + 10}`); // Custom logic here
// });

for (let i in myArr2) {
  // console.log(i);
}
//

for (let i in myArr2) {
  if (myArr2.hasOwnProperty(i)) console.log(i);
}
