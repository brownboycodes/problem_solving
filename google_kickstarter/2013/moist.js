/*
Moist has a hobby -- collecting figure skating trading cards. His card collection has been growing, 
and it is now too large to keep in one disorganized pile. 
Moist needs to sort the cards in alphabetical order, so that he can find the cards 
that he wants on short notice whenever it is necessary.

The problem is -- Moist can't actually pick up the cards because they keep sliding out his hands, 
and the sweat causes permanent damage. Some of the cards are rather expensive, mind you. 
To facilitate the sorting, Moist has convinced Dr. Horrible to build him a sorting robot. 
However, in his rather horrible style, Dr. Horrible has decided to make the 
sorting robot charge Moist a fee of $1 whenever it has to move a trading card during the sorting process.

Moist has figured out that the robot's sorting mechanism is very primitive. 
It scans the deck of cards from top to bottom. 
Whenever it finds a card that is lexicographically smaller than the previous card, 
it moves that card to its correct place in the stack above. This operation costs $1, 
and the robot resumes scanning down towards the bottom of the deck, 
moving cards one by one until the entire deck is sorted in lexicographical order from top to bottom.

As wet luck would have it, Moist is almost broke, 
but keeping his trading cards in order is the only remaining joy in his miserable life. 
He needs to know how much it would cost him to use the robot to sort his deck of cards.
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
    let N = parseInt(readline());

    let figureSkaters = [];

    for (let j = 0; j < N; j++) {
      figureSkaters.push(readline());
    }

    let sortingCost = findSortingCost(figureSkaters);

    console.log(`Case #${i}: ${sortingCost}`);
  }
}

function findSortingCost(figureSkaters) {
  let cost = 0,
    swaps = 0,
    temp;

  // implementing bubble sort
  for (let i = 0; i < figureSkaters.length; i++) {
    swaps = 0;
    for (let j = 0; j < figureSkaters.length - 1; j++) {
      //comparing strings
      if (figureSkaters[j].localeCompare(figureSkaters[j + 1]) === 1) {
        temp = figureSkaters[j];
        figureSkaters[j] = figureSkaters[j + 1];
        figureSkaters[j + 1] = temp;

        cost++;
        swaps++;
      }
    }
    if (swaps === 0) {
      break;
    }
  }

  return cost;
}
