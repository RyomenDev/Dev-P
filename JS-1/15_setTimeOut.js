// ! The setTimeout() function in JavaScript is used to execute a specified function after a delay (in milliseconds). It is often used to schedule one-time execution of code after a specified time interval.
// Delay is not guaranteed: The actual time delay may be longer than the specified delay, especially if the event loop is busy with other tasks.

setTimeout(() => {
  console.log("This message prints after 2 seconds.");
}, 2000);


function greet(name) {
  console.log(`Hello, ${name}!`);
}
setTimeout(greet, 1000, "Alice");

//

const timeoutID = setTimeout(() => {
  console.log("This will not be logged.");
}, 5000);

// Cancel the timeout before it executes
clearTimeout(timeoutID);

