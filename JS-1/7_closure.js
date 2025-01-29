let a1 = 5;
const fun1 = () => {
  let b1 = 10;
  return a1 + b1;
};
// console.log(fun1());


// * the outer function cannot directly access the variables or parameters of the inner function. This is because the inner function's scope is isolated and not exposed to the outer function. However, you can achieve a similar result by having the inner function explicitly expose its variables or results to the outer function through a returned value or a shared object.
function outerFunction() {
  let outerScopedVariable = "I am in the outer scope";

  function innerFunction() {
    let innerScopedVariable = "I am in the inner scope";
    return innerScopedVariable; // Expose the inner variable
  }

  // Call the inner function to get its value
  const innerData = innerFunction();
  console.log("Outer Scoped Variable:", outerScopedVariable);
  console.log("Inner Scoped Variable (Accessed from Outer):", innerData);
}

outerFunction();
