function evenify(num) {
  if (num % 2 == 0) {
    console.log(num, ": is even number");
  } else {
    console.log(num * 2, ": is odd number");
  }
}

function evenify_all(numb) {
  for (let i = 0; i < numb.length; i++) {
    const num = numb[i];
    evenify(num);
  }
}
numb = [5, 12, 34, 45, 2, 476];
evenify_all(numb);

friendsAge = [12, 23, 45, 56, 21, 34];
evenify_all(friendsAge);
