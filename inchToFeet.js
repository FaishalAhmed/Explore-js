var inch = 156;
var feet = inch / 12;
console.log(feet);

// Same calculation using function

function inchToFeet(inch) {
  var feet = inch / 12;
  return feet;
}

var customer1 = inchToFeet(150);
console.log(customer1);

var customer2 = inchToFeet(288);
console.log(customer2);
