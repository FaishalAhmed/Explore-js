let list = [25, 85, 85, 14, 23, 25, 65, 25, 475, 15, 23, 475];
let empty = [];
for (i = 0; i < list.length; i++) {
  let element = list[i];
  let index = empty.indexOf(element);
  if (index == -1) {
    empty.push(element);
  }
}
console.log(empty);
