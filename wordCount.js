let text = "My    name      is Faishal Ahmed. I    am 22 years old.";
count = 0;
for (i = 0; i < text.length; i++) {
  let char = text[i];
  if (char == " " && text[i - 1] != " ") {
    count++;
  }
}
count++;
console.log(count);
