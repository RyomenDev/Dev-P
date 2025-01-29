// ! Promise is an object representing the eventual completion (or failure) of an asynchronous operation and its resulting value. It allows you to handle asynchronous operations more effectively than traditional callback functions, which can lead to more readable and maintainable code.
// ^ Pending, Fulfilled, Rejected

// % Promise.all() takes an array of promises and returns a new promise that resolves when all promises in the array resolve, or rejects when one of them rejects.

// * Promise.race() takes an array of promises and returns a new promise that resolves or rejects as soon as the first promise in the array resolves or rejects.

const myPromise = new Promise((resolve, reject) => {
  let success = true;

  if (success) {
    resolve("The operation was successful!");
  } else {
    reject("Something went wrong.");
  }
});

myPromise
  .then((result) => {
    console.log(result); // "The operation was successful!"
  })
  .catch((error) => {
    console.log(error); // "Something went wrong."
  });

//

//

const task1 = new Promise((resolve) =>
  setTimeout(() => resolve("Task 1 done"), 1000)
);
const task2 = new Promise((resolve) =>
  setTimeout(() => resolve("Task 2 done"), 2000)
);
const task3 = new Promise((resolve) =>
  setTimeout(() => resolve("Task 3 done"), 500)
);

Promise.all([task1, task2, task3])
  .then((results) => {
    console.log(results); // ["Task 1 done", "Task 2 done", "Task 3 done"]
  })
  .catch((error) => {
    console.log(error); // If any promise fails, this will be triggered
  });

//

//

const task1 = new Promise((resolve) =>
  setTimeout(() => resolve("Task 1 done"), 3000)
);
const task2 = new Promise((resolve) =>
  setTimeout(() => resolve("Task 2 done"), 1000)
);

Promise.race([task1, task2]).then((result) => {
  console.log(result); // "Task 2 done"
});
