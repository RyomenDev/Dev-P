// ! Callback Hell (also known as Pyramid of Doom) refers to a situation in asynchronous programming where callbacks are nested within other callbacks in such a way that the code becomes difficult to read, maintain, and debug. It often occurs when working with asynchronous operations like I/O, timers, or network requests.

// How to Avoid Callback Hell? - Using Promises, Using async/await, Modularizing the Code

function step1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Step 1 completed");
      resolve();
    }, 1000);
  });
}

function step2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Step 2 completed");
      resolve();
    }, 1000);
  });
}

function step3() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Step 3 completed");
      resolve();
    }, 1000);
  });
}

step1()
  .then(() => step2())
  .then(() => step3())
  .then(() => console.log("All steps completed"));
