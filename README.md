# Quiz App

This project is a quiz application built using React, designed to provide an interactive quiz experience for users. The questions are fetched from the Open Trivia database (https://opentdb.com/api_config.php).

## Features

- **Interactive Quiz**: Users can answer multiple-choice questions.
- **Loading Screen**: Animated loading screen with CSS animations.
- **Quiz Results**: Display correct and incorrect answers at the end.

## Technologies Used

## Technologies

- **React**: Frontend library for building user interfaces.
- **JavaScript**: Programming language used for implementing functionality and logic.
- **HTML/CSS**: Markup and styling languages for structuring and designing web pages.
- **Open Trivia DB**: API used for fetching the trivia questions.

## Demo

## Site

### Starting Screen

<img width="1436" alt="Screenshot 2024-07-08 at 12 57 48" src="https://github.com/PiaSR/trivia-quiz/assets/153298855/aa6d4095-0c3d-44c1-abc1-30df8d86f3a8">

### Quiz

<img width="1437" alt="Screenshot 2024-07-08 at 12 58 38" src="https://github.com/PiaSR/trivia-quiz/assets/153298855/fdf0e75b-fcee-4acc-857a-cccceb2552f5">

### Check Answers

<img width="1434" alt="Screenshot 2024-07-08 at 12 59 19" src="https://github.com/PiaSR/trivia-quiz/assets/153298855/998b3cea-24e9-4c7f-8e78-b8bbddea49fb">

## Usage

### Getting Started

1. **Home Screen**: Upon loading the application, users are greeted with a start screen featuring a title, subtitle, and a "Start Quiz" button. Clicking the button begins the quiz.

2. **Quiz Interface**: Once the quiz starts, users see a series of questions one at a time. Each question includes multiple-choice answers.

3. **Answer Selection**: Users select their answers by clicking on the provided options. Selected answers are highlighted.

4. **Quiz End and Feedback**: After selecting the answers and clicking "Check Answers", the interface provides immediate feedback:

   - If the answer is correct, the selected option background turns green.
   - If the answer is incorrect, the selected option background turns red, and the correct answer is highlighted.
     The screen displays the total number of correct answers out of the total questions.

5. **Play Again**: The "Play Again" button displays next to the tally of correctly answered questions. Clicking it will restart the game and fetch new questions from the API.

## Credits

- **Project Idea**: Inspired by [Scrimba](https://www.scrimba.com/), after completing their Learn React course
- **Design**: Figma design adapted from [Scrimba](https://www.scrimba.com/), which was provided in their Learn React course
