// 4. Functional Composition
// Combining multiple functions to create more complex operations.

const addFive = (x) => x + 5;
const multiplyByTwo = (x) => x * 2;
const subtractThree = (x) => x - 3;

// =======================================================
// Use the functions directly
// =======================================================

var x = 3; // Input value
var result = addFive(multiplyByTwo(subtractThree(x)));

console.log({ result });

// =======================================================
// same with composition style
// =======================================================

function compose(...funcs) {
  return function (x) {
    return funcs.reduceRight((value, func) => func(value), x);
  };
}

// Create a new function that subtracts three, then multiplies by two, and then adds five
var newFunction = compose(addFive, multiplyByTwo, subtractThree);

// Use the new function
var result = newFunction(x);
console.log({ result });
