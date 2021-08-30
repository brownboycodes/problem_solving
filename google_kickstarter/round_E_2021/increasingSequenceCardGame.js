/*
Problem
You're playing a card game as a single player.

There are N cards. The i-th card has integer i written on it.

You first shuffle N cards randomly and put them in a pile. Take the card at the top of the pile to your hand. Then repeat the following process until the pile becomes empty:

Check the card on the top of the pile.
If the number on the card is larger than the number on the last card you took, take the card.
Otherwise, discard the card.
The score of the game is the number of cards in your hand at the end. With the given number of cards N, what is the expected score of the game?

Input
The first line of the input contains the number of test cases, T. T lines follow. 
Each line contains a single integer N, the number of cards in the pile.

Output
For each test case, output one line containing Case #x: y, where x is the test case number (starting from 1) and y is the expected score at the end of the game.

y will be considered correct if it is within an absolute or relative error of 10-6 of the correct answer.
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

    let finalScore = findScore(N);

    console.log(`Case #${i}: ${finalScore}`);
  }
}


function findScore(N) {
  let cards = [...Array(N).keys()],
    cardsAtHand = [];
  cards.shift();
  cards.push(N);
  // console.log(cards);
  //instead of shuffling cards I am taking out a random card from the pile
  let randomPosition = Math.floor(Math.random() * cards.length);
  let randomCard = cards[randomPosition];
  cardsAtHand.push(randomCard);
  cards.splice(randomPosition, 1);
  // console.log(cards);
  while (cards.length !== 0) {
    randomPosition = Math.floor(Math.random() * cards.length);
    randomCard = cards[randomPosition];
    if (randomCard > cardsAtHand[cardsAtHand.length - 1]) {
      cardsAtHand.push(randomCard);
    }
    // console.log(cards);
    cards.splice(randomPosition, 1);
  }
  // console.log(cardsAtHand);
  return cardsAtHand.length.toFixed(1);
}