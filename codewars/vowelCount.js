function getCount(str) {
  var vowelsCount = 0;
  // enter your majic here
  //storing vowels in an array
  let vowels = ["a", "e", "i", "o", "u"];
  for (let i = 0; i < str.length; i++) {
    //checking if any character of the string is a vowel
    if (vowels.includes(str.charAt(i))) {
      vowelsCount++;
    }
  }
  return vowelsCount;
}
