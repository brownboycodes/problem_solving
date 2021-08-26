/**
 you are required to, 
 given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.
 */

function alphabetPosition(text) {
  let result = [];
  /*
    first I used regex to replace any character that is not a string with an empty string
    next I converted it to lowercase
    then I used the split method to convert the text into an array
    */
  text = text
    .replace(/\W*\d+/g, "")
    .toLowerCase()
    .split("");
  /*
    creating an array of alphabets in lowercase and 
    sequential order as they appear in english language
    */
  let alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  //for loop for calculating position of text's character in a english language
  for (let i = 0; i < text.length; i++) {
    let j = alphabet.indexOf(text[i]) + 1;
    if (j) {
      result.push(j);
    }
  }
  return result.join(" ");
}
