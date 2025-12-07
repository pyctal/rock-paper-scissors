"use strict";

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const randomValue = Math.random();
  if (randomValue <= 1 / 3) return "rock";
  else if (randomValue <= 2 / 3) return "paper";
  else return "scissors";
}

function displayRoundResult(resultStr) {
  const roundResultsDiv = document.querySelector(".round-results");
  const roundResult = document.createElement("p");
  roundResult.textContent = resultStr;
  roundResultsDiv.appendChild(roundResult);
}

// function getHumanChoice() {
//   return prompt("Rock, paper, scissors?");
// }

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();
  switch (humanChoice) {
    case "rock":
      switch (computerChoice) {
        case "rock":
          displayRoundResult("It's a tie! Rock matches rock");
          break;
        case "paper":
          computerScore++;
          displayRoundResult("You lose! Paper beats rock");
          break;
        case "scissors":
          humanScore++;
          displayRoundResult("You win! Rock beats scissors");
          break;
      }
      break;

    case "paper":
      switch (computerChoice) {
        case "rock":
          humanScore++;
          displayRoundResult("You win! Paper beats rock");
          break;
        case "paper":
          displayRoundResult("It's a tie! Paper matches paper");
          break;
        case "scissors":
          computerScore++;
          displayRoundResult("You lose! Scissors beats paper");
          break;
      }
      break;

    case "scissors":
      switch (computerChoice) {
        case "rock":
          computerScore++;
          displayRoundResult("You lose! Rock beats scissors");
          break;
        case "paper":
          humanScore++;
          displayRoundResult("You win! Scissors beats paper");
          break;
        case "scissors":
          displayRoundResult("It's a tie! Scissors matches scissors");
          break;
      }
      break;
  }
}

// function playGame() {
//   let numberOfRounds = 5;
//   let humanSelection, computerSelection;
//   let roundNumber = 1;

//   for (let i = 0; i < numberOfRounds; i++) {
//     humanSelection = getHumanChoice();
//     computerSelection = getComputerChoice();

//     playRound(humanSelection, computerSelection);
//     console.log(
//       "Round " +
//         roundNumber +
//         "\nScoreboard: Computer - " +
//         computerScore +
//         ", You - " +
//         humanScore +
//         "\n\n"
//     );
//     roundNumber++;
//   }

//   if (humanScore > computerScore) {
//     console.log("You won this game, Game Over! Reload the page to play again.");
//   } else if (humanScore < computerScore) {
//     console.log(
//       "You lose this game, Game Over! Reload the page to play again."
//     );
//   } else {
//     console.log("It's a tie game, Game Over! Reload the page to play again.");
//   }
// }

const handChoiceMenu = document.querySelector(".hand-choice-menu");
handChoiceMenu.addEventListener("click", (event) => {
  const handChoice = event.target.id;
  playRound(handChoice, getComputerChoice());
});
