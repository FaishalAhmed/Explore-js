// let factorial = 1;
// for (i = 1; i < 5; i++) {
//   factorial = factorial * i;
//   console.log(i, factorial);
// }

// using Function

// function factorial(n) {
//   let factorial = 1;
//   for (i = 1; i < n; i++) {
//     factorial = factorial * i;
//   }
//   return factorial;
// }

// let user = factorial(100);
// console.log(user);

// Using while loop

// let i = 1;
// let factorial = 1;
// while (i <= 10) {
//   factorial = factorial * i;
//   i++;
// }
// console.log(factorial);

// using recursion

function factorial(n) {
  if (n == 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
let result = factorial(7);
console.log(result);
