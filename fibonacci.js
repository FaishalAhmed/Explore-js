// let fibo = [0, 1];
// for (i = 2; i <= 12; i++) {
//   fibo[i] = fibo[i - 1] + fibo[i - 2];
// }
// console.log(fibo);

// using Function

// function fibonacci(n) {
//   let fibo = [0, 1];
//   for (i = 2; i <= n; i++) {
//     fibo[i] = fibo[i - 1] + fibo[i - 2];
//   }
//   return fibo;
// }

// let val = fibonacci(12);
// console.log(val);

// Using recursive
function fibonacci(n) {
  if (n == 0) {
    return 0;
  }
  if (n == 1) {
    return 1;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}
let val = fibonacci(12);
console.log(val);
