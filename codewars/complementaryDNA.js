/*
Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells 
and carries the "instructions" for the development and functioning of living organisms.

In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". 
You have function with one side of the DNA (string, except for Haskell); 
you need to get the other complementary side. 
DNA strand is never empty or there is no DNA at all (again, except for Haskell).
*/

function DNAStrand(dna) {
  //storing the complementary letters of DNA in an object
  let dnaLetters = { A: "T", T: "A", C: "G", G: "C" };
  let formattedDna = [];
  for (let i = 0; i < dna.length; i++) {
    //checking if character of dna is equal to any key of dnaLetters
    //if equal push the key's value to formattedDna
    formattedDna[i] = dnaLetters[dna[i]];
  }
  //returning the formatted DNA
  return formattedDna.join("");
}
