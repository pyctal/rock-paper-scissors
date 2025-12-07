# Rock Paper Scissors

![Status](https://img.shields.io/badge/Status-Completed-success)
![Focus](https://img.shields.io/badge/Focus-Event_Handling_%26_Branching-blue)

## Description

This project is a dynamic, browser-based implementation of the classic "Rock Paper Scissors" game, developed as part of The Odin Project's Foundations curriculum.

Originally built as a text-only console simulation, this project has been refactored into a fully interactive Graphical User Interface (GUI). The logic was migrated from a fixed loop structure to an event-driven architecture, allowing players to click buttons to make choices rather than typing text prompts. The game features a "First to 5" winning condition, with real-time DOM updates providing immediate visual feedback.

Development followed professional Git workflows, utilizing feature branches (`rps-ui`) to isolate new code before merging into the main production branch.

## Features

- **Interactive UI:** Replaced window prompts with clickable buttons for Rock, Paper, and Scissors, improving user experience.

- **Dynamic DOM Updates:** Game results and round announcements are rendered directly to the HTML page via DOM methods, removing the need for the developer console.

- **Live Score Tracking:** A running score is displayed on-screen, updating instantly after every round.

- **Win Condition Logic:** The game automatically detects when a player or the computer reaches 5 points and announces a final winner.

- **Event-Driven Architecture:** Utilizes event listeners to handle user inputs asynchronously rather than relying on synchronous loops.

## Skills Demonstrated

The evolution of this project required the application of intermediate JavaScript and version control concepts:

### 1. DOM Manipulation

- Targeting HTML nodes (`querySelector`, `getElementById`) to modify content dynamically.
- Creating and appending new elements (`createElement`, `appendChild`) to display results programmatically.

### 2. Event Handling

- Attaching `click` event listeners to buttons to trigger game rounds.
- Passing parameters through anonymous functions within event listeners to maintain clean function signatures.

### 3. Git Branching & Merging

- Created and managed feature branches to develop features in isolation.
- Performed safe merges to integrate UI logic into the main branch.
- Managed clean-up by deleting branches locally and remotely after successful integration.

### 4. Code Refactoring

- Transitioned control flow from a synchronous `for` loop to an event-based state machine.
