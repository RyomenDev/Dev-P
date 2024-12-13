const fs = require("fs");
const a = 100;

setImmediate(() => console.log("setImmediate"));

Promise.resolve().then(() => console.log("Promise")); //  Microtask Queue: Includes process.nextTick and Promises.

fs.readFile("./file.txt", "utf8", () => {
  console.log("File Reading CB");
}); // it will take some time so may be in second loop

setTimeout(() => console.log("Timer expired"), 0);

process.nextTick(() => console.log("process.nextTick"));

function printA() {
  console.log("a=", a);
}

printA();

console.log("Last line of the file.");
