// ! The setInterval() function in JavaScript is used to repeatedly execute a specified function at fixed intervals (in milliseconds).

// setInterval(() => {
//   console.log("This message prints every second");
// }, 1000);

let seconds = 0;
const timer = setInterval(() => {
  seconds++;
  console.log(seconds);

  // Stop the interval after 5 seconds
  if (seconds === 5) {
    clearInterval(timer);
    console.log("Timer stopped.");
  }
}, 1000);
