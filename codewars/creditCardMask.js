/*
Usually when you buy something, 
you're asked whether your credit card number, 
phone number or answer to your most secret question is still correct. 
However, since someone could look over your shoulder, 
you don't want that shown on your screen. Instead, we mask it.

Your task is to write a function maskify, 
which changes all but the last four characters into '#'.
*/

// return masked string
function maskify(cc) {
    let length=cc.length;
    let maskedString="";
    let firstPart= cc.slice(0, -4);
    let lastPart= cc.slice(-4,length);
    for(let i=0; i < firstPart.length; i++){
      maskedString+="#";
    }
    maskedString+=lastPart;
    return maskedString;
  }