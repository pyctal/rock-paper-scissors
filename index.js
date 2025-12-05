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
          console.log("It's a tie! Rock matches rock");
          break;
        case "paper":
          computerScore++;
          console.log("You lose! Paper beats rock");
          break;
        case "scissors":
          humanScore++;
          console.log("You win! Rock beats scissors");
          break;
      }
      break;

    case "paper":
      switch (computerChoice) {
        case "rock":
          humanScore++;
          console.log("You win! Paper beats rock");
          break;
        case "paper":
          console.log("It's a tie! Paper matches paper");
          break;
        case "scissors":
          computerScore++;
          console.log("You lose! Scissors beats paper");
          break;
      }
      break;

    case "scissors":
      switch (computerChoice) {
        case "rock":
          computerScore++;
          console.log("You lose! Rock beats scissors");
          break;
        case "paper":
          humanScore++;
          console.log("You win! Scissors beats paper");
          break;
        case "scissors":
          console.log("It's a tie! Scissors matches scissors");
          break;
      }
      break;

    default:
      computerScore++;
      console.log("You lose! Incorrect value provided");
  }
}

function playGame() {
  let numberOfRounds = 5;
  let humanSelection, computerSelection;

  for (let i = 0; i < numberOfRounds; i++) {
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
    console.log(
      "Scoreboard: Computer - " + computerScore + ", You - " + humanScore
    );
  }

  if (humanScore > computerScore) {
    console.log("You won this game, Game Over! Reload the page to play again.");
  } else if (humanScore < computerScore) {
    console.log(
      "You lose this game, Game Over! Reload the page to play again."
    );
  } else {
    console.log("It's a tie game, Game Over! Reload the page to play again.");
  }
}

playGame();
