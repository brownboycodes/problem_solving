/**
 
Problem
Alex and Bob are brothers and they both enjoy reading very much. 
They have widely different tastes on books so they keep their own books separately. 
However, their father thinks it is good to promote exchanges 
if they can put their books together. 
Thus he has bought an one-row bookshelf for them today and put all his sons' books on it in random order. He labeled each position of the bookshelf the owner of the corresponding book ('Alex' or 'Bob').

Unfortunately, Alex and Bob went outside and didn't know what their father did. 
When they were back, they came to realize the problem: 
they usually arranged their books in their own orders, but the books 
seem to be in a great mess on the bookshelf now. They have to sort them right now!!

Each book has its own worth, which is represented by an integer. 
Books with odd values of worth belong to Alex and the books with even values of worth belong to Bob.
 Alex has a habit of sorting his books 
from the left to the right in an increasing order of worths, 
while Bob prefers to sort his books from the left to the right in a decreasing order of worths.

At the same time, they do not want to change the positions of the labels, 
so that after they have finished sorting the books according their rules, 
each book's owner's name should match with the label in its position.

Here comes the problem. A sequence of N values s0, s1, ..., sN-1 is given, 
which indicates the worths of the books from the left to the right on the bookshelf currently. 
Please help the brothers 
to find out the sequence of worths after sorting such that it satisfies the above description.

 */

"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString
    .trim()
    .split("\n")
    .map((string) => {
      return string.trim();
    });

  main();
});

function readline() {
  return inputString[currentLine++];
}

function main() {
  const testCases = parseInt(readline());

  for (let i = 1; i <= testCases; i++) {
    let numberOfBooks = parseInt(readline());
    let booksInRow = readline()
      .split(" ")
      .map((x) => parseInt(x));

    let sortedBooksInRow = sortBooks(booksInRow, numberOfBooks);

    console.log(`Case #${i}: ${sortedBooksInRow.join(' ')}`);
  }
}

//books of alex has an odd value, sorted in ascending order
// books of bob has an even value, sorted in decreasing order

function sortBooks(booksInRow, numberOfBooks) {
  let bobsEvenBooks = booksInRow
    .filter((value) => value % 2 === 0)
    .sort((a, b) => b - a);
  let alexsOddBooks = booksInRow.filter((value) => value % 2 !== 0).sort();


  for (let index = 0; index < numberOfBooks; index++) {
    if (booksInRow[index] % 2 === 0) {
      booksInRow[index] = bobsEvenBooks.shift();
    }
    if (booksInRow[index] % 2 !== 0) {
      booksInRow[index] = alexsOddBooks.shift();
    }
  }

  return booksInRow;
}
