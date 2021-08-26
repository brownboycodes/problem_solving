/*
Write a function that takes in a string of one or more words, 
and returns the same string, but with all five or more letter words reversed
*/

function spinWords(sentence){
    //converting stfring to array to get words
    let arr=sentence.split(" ");
    for(let i=0;i<arr.length;i++){
      //checking which of the words is equal to or more than 5 letters
      if(arr[i].length>=5){
        //reversing the words which satisfy the condition
        arr[i]=arr[i].split('').reverse().join('');
      }
    }
    //returning the formatted string
    return arr.join(' ');
  }