"use strict";

function getComputerChoice() {
  let randomValue = Math.random();
  if (randomValue <= 1 / 3) {
    return "rock";
  } else if (randomValue <= 2 / 3) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  return prompt("Rock, paper, scissors?");
}
