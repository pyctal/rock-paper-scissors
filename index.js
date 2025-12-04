"use strict";

let humanScore = 0;
let computerScore = 0;

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

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();
  switch (humanChoice) {
    case "rock":
      switch (computerChoice) {
        case "rock":
          return "It's a tie! Rock matches rock";
          break;
        case "paper":
          computerScore++;
          return "You lose! Paper beats rock";
          break;
        case "scissors":
          humanScore++;
          return "You win! Rock beats scissors";
          break;
      }

    case "paper":
      switch (computerChoice) {
        case "rock":
          humanScore++;
          return "You win! Paper beats rock";
          break;
        case "paper":
          return "It's a tie! Paper matches paper";
          break;
        case "scissors":
          computerScore++;
          return "You lose! Scissors beats paper";
          break;
      }

    case "scissors":
      switch (computerChoice) {
        case "rock":
          return "You lose! Rock beats scissors";
          break;
        case "paper":
          return "You win! Scissors beats paper";
          break;
        case "scissors":
          return "It's a tie! Scissors matches scissors";
          break;
      }

    default:
      return "You lose! Incorrect value provided";
  }
}
