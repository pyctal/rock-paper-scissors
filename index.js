"use strict";

let roundNumber = 1;
const humanScoreSpan = document.querySelector("#human-score-val");
let humanScore = 0;
const computerScoreSpan = document.querySelector("#computer-score-val");
let computerScore = 0;

function getComputerChoice() {
  const randomValue = Math.random();
  if (randomValue <= 1 / 3) {
    return "rock";
  } else if (randomValue <= 2 / 3) {
    return "paper";
  } else {
    return "scissors";
  }
}

function displayRoundResult(resultStr) {
  const roundResultsDiv = document.querySelector(".round-results");
  const roundResult = document.createElement("p");
  roundResult.textContent = `Round ${roundNumber}: ` + resultStr;
  roundResultsDiv.appendChild(roundResult);
}

function incrementHumanScore() {
  humanScore++;
  humanScoreSpan.textContent = "" + humanScore;
}

function incrementComputerScore() {
  computerScore++;
  computerScoreSpan.textContent = "" + computerScore;
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
          incrementComputerScore();
          displayRoundResult("You lose! Paper beats rock");
          break;
        case "scissors":
          incrementHumanScore();
          displayRoundResult("You win! Rock beats scissors");
          break;
      }
      break;

    case "paper":
      switch (computerChoice) {
        case "rock":
          incrementHumanScore();
          displayRoundResult("You win! Paper beats rock");
          break;
        case "paper":
          displayRoundResult("It's a tie! Paper matches paper");
          break;
        case "scissors":
          incrementComputerScore();
          displayRoundResult("You lose! Scissors beats paper");
          break;
      }
      break;

    case "scissors":
      switch (computerChoice) {
        case "rock":
          incrementComputerScore();
          displayRoundResult("You lose! Rock beats scissors");
          break;
        case "paper":
          incrementHumanScore();
          displayRoundResult("You win! Scissors beats paper");
          break;
        case "scissors":
          displayRoundResult("It's a tie! Scissors matches scissors");
          break;
      }
      break;
  }

  roundNumber++;
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

function endGame() {
  if (humanScore > computerScore) {
    alert("You won this game, Game Over! Reload the page to play again.");
  } else if (humanScore < computerScore) {
    alert("You lose this game, Game Over! Reload the page to play again.");
  } else {
    alert("It's a tie game, Game Over! Reload the page to play again.");
  }

  const buttonsNodeList = document.querySelectorAll(".hand-choice-menu button");
  buttonsNodeList.forEach((button) => (button.disabled = true));
}

function playGame(event) {
  const humanChoice = event.target.id;
  playRound(humanChoice, getComputerChoice());

  const isGameOver = roundNumber > 5;
  if (isGameOver) {
    setTimeout(endGame, 1);
  }
}

const handChoiceMenu = document.querySelector(".hand-choice-menu");
handChoiceMenu.addEventListener("click", playGame);
