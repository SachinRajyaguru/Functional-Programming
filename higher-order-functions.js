// 2. Higher-Order Functions
// Concept Functions that take other functions as arguments or return functions as results.

function map(array, callback) {
  const results = [];
  for (let i = 0; i < array.length; i++) {
    results.push(callback(array[i]));
  }
  return results;
}

const numbers1 = [1, 2, 3, 4, 5];
const doubledNumbers = map(numbers1, (number) => number * 2); // [2, 4, 6, 8]
console.log({ doubledNumbers });
