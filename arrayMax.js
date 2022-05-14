let list = [25, 85, 65, 14, 23, 84, 65, 12, 475, 15, 321, 1261];
let max = list[0];
for (i = 0; i < list.length; i++) {
  let element = list[i];
  //   console.log(element);
  if (element > max) {
    max = element;
  }
}
console.log("Highest Value is: ", max);
