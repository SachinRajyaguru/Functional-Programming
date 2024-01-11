// 1. Pure Functions

// Concept Functions that always produce the same output given the same input, without side effects. Code Demo

function add(x, y) {
  return x + y;
}

const result1 = add(2, 3); // result1 will always be 5
const result2 = add(2, 3); // result2 will also be 5
const result3 = add(2, 3); // result2 will also be 5

console.log({ result1, result2, result3 });
