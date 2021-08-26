/*
Implement the function unique_in_order which takes as argument a sequence 
and returns a list of items without 
any elements with the same value next to each other 
and preserving the original order of elements.
*/

let uniqueInOrder=function(iterable){
    //your code here - remember iterable can be a string or an array
    let uniqueArray=[];
    //since iterable can be either be an array or a string
    //so converting to array if a string
    if(Array.isArray(iterable)===false){
      iterable=iterable.split('');
    }
    for(let i=0;i<iterable.length;i++){
      //only adding element if it is not same as previous element
      if(iterable[i]!==uniqueArray[uniqueArray.length-1]){
        uniqueArray[uniqueArray.length]=iterable[i];
      }
    }
    return uniqueArray;
  }