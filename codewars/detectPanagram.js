function isPangram(string){
    //storing the alphabets in an array
    let alphabets= ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    //creating a counter to count if all alphabets appear in the string
    let counter=0;
    for(let i=0;i<alphabets.length;i++){
      if(string.toLowerCase().includes(alphabets[i])){
        counter++;
      }
    }
    return counter===26;
  }