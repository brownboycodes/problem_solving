// given a string of words, return the length of the shortest word(s).

function findShort(s) {
  //converting the string into an array
  let words = s.split(" ");
  //using the reduce method so that only the shortest word is left
  let shortest = words.reduce((shortestWord, currentWord) => {
    return currentWord.length < shortestWord.length
      ? currentWord
      : shortestWord;
  }, words[0]);
  return shortest.length;
}
