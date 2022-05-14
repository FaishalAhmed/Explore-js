const year = 1900;
if ((0 == year % 4 && 0 != year % 100) || 0 == year % 400) {
  console.log(year + ` is a leap year`);
} else {
  console.log(year + ` is not a leap year`);
}

// Uisng this code in function

function checkYear(year) {
  if ((0 == year % 4 && 0 != year % 100) || 0 == year % 400) {
    return year + ` is a leap year`;
  } else {
    return year + ` is not a leap year`;
  }
}

let user = checkYear(2000);
console.log(user);
