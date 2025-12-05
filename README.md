# Rock Paper Scissors (Console Edition)

## Description

This project is a functional implementation of the classic "Rock Paper Scissors" game, built entirely in **Vanilla JavaScript**. It was developed as part of The Odin Project's Foundations curriculum.

The game runs directly in the browser console, prioritizing raw programming logic over DOM manipulation. It serves as a study in algorithmic thinking, focusing on how to translate human game rules into computer logic without the aid of a Graphical User Interface (GUI). The program pits a human player (via prompt inputs) against a computer opponent (via random generation) in a 5-round match.

## Features

- **Console-Based Gameplay:** The game operates entirely within the browser's developer tools, logging results directly to the console.

- **5-Round Match Structure:** An automated game loop plays exactly five rounds before declaring a final winner, preventing infinite play.

- **Smart Input Handling:** User inputs are processed case-insensitively, meaning "rock", "ROCK", and "RoCk" are all accepted as valid moves.

- **Live Scoreboard:** The console displays an updated score (Human vs. Computer) after every round to track progress.

- **Randomized Opponent:** The computer's moves are generated using a probability algorithm that ensures a fair 1/3 chance for each choice.

## Skills Demonstrated

The development of this project required the application of several core JavaScript concepts:

### 1. Control Flow & Logic:

- Implemented nested `switch` statements to efficiently handle the 3x3 matrix of possible game outcomes (e.g., Rock vs. Scissors, Paper vs. Rock).
- Utilized `"use strict";` to enforce cleaner code standards and prevent common JavaScript errors.

### 2. State Management & Scope:

- Managed global state variables (`humanScore`, `computerScore`) to persist game data across different function calls.
- Differentiated between global scope and function scope to maintain clean variable namespaces.

### 3. Algorithms & Math:

- Created a randomization engine using `Math.random()` and conditional logic (`if/else if`) to map numerical values to string outputs ("rock", "paper", "scissors").

### 4. Loops & Iteration:

- Constructed a `for` loop to encapsulate the game session, automating the flow of 5 consecutive rounds without manual repetition.

## How to Play

1. Open `index.html` in your browser.
2. Open the Developer Console (F12 > Console or Right Click > Inspect > Console).
3. Follow the prompts to play!
