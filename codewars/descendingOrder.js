/*
Your task is to make a function that can take any non-negative integer 
as an argument and return it with its digits in descending order. 
Essentially, rearrange the digits to create the highest possible number.
*/

function descendingOrder(n){
    //checking if n is positive integer
    if(n>=0){
      /*
      using array methods and method chaining to solve the problem
      first we convert the integer to string
      then we split the string into an array
      then we use the array.sort() method to get the array sorted in ascending order
      then we use the array.reverse() method to get the array sorted in descending order
      then again we convert the array to a string using join method
      finally we convert the string to an Integer and return it
      */
      return parseInt(String(n).split('').sort().reverse().join(''));
    }
    
  }