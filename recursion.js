// 3. Recursion
// Functions that call themselves to solve a problem by breaking it down into smaller, self-similar subproblems.

function factorial(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

const resultOfFactorialN5 = factorial(5); // 120
const resultOfFactorialN8 = factorial(8); // 40320
console.log({ resultOfFactorialN5, resultOfFactorialN8 });
