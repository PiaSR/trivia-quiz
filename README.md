# Quiz App

This project is a quiz application built using React, designed to provide an interactive quiz experience for users. The questions are fetched from the Open Trivia database.

## Features

- **Interactive Quiz**: Users can answer multiple-choice questions.
- **Loading Screen**: Animated loading screen with CSS animations.
- **Quiz Results**: Display correct and incorrect answers at the end.

## Technologies Used

## Technologies

- **React**: Frontend library for building user interfaces.
- **JavaScript**: Programming language used for implementing functionality and logic.
- **HTML/CSS**: Markup and styling languages for structuring and designing web pages.
- **Open Trivia DB**: API used for fetching the trivia questions ((https://opentdb.com/api_config.php))

## Demo

Click this link for a live demo: (https://piasr.github.io/trivia-quiz/)

## Site

### Starting Screen

<img width="1434" alt="Screenshot 2024-07-08 at 17 16 50" src="https://github.com/PiaSR/trivia-quiz/assets/153298855/5518cac5-bac4-4106-9cf9-5523fac06cf2">


### Quiz

<img width="1430" alt="Screenshot 2024-07-08 at 17 17 06" src="https://github.com/PiaSR/trivia-quiz/assets/153298855/52372e70-d0b4-47e5-b465-8a1be1c5d922">


### Check Answers

<img width="1432" alt="Screenshot 2024-07-08 at 17 17 35" src="https://github.com/PiaSR/trivia-quiz/assets/153298855/4d684e38-9fca-4be0-9bbb-f4dccaee196c">


## Usage

### Getting Started

1. **Start Screen**: Upon loading the application, users are greeted with a start screen featuring a title, subtitle, and a "Start Quiz" button. Clicking the button begins the quiz.

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
