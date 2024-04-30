"use strict";

const questions = [
  "What is the color of the sky?",
  "What planet are you on?",
  "What is the color of the sun?"
];

const answers = [
  "blue",
  "earth",
  "yellow"
];

let turn = 0;
let score = 0;
document.getElementById("submit").addEventListener("click", checkAnswer);

showQuestion();

function checkAnswer() {
  if (document.getElementById("answer").value === answers[turn]) {
    document.getElementById("message").innerHTML = "Correct Answer!";
    showScore();
    nextQuestion();
  } else {
    document.getElementById("message").innerHTML = "Sorry, wrong answer (Hint: Don't Capitalize)!";
  }
}

function showQuestion() {
  document.getElementById("counter").innerHTML = "Question: " + (turn + 1);

  document.getElementById("question").innerHTML = questions[turn];
}

function nextQuestion() {
  turn++;

  if (turn < questions.length) {
    showQuestion();
  } else {
    document.getElementById("message").innerHTML = "Game Over!";
  }
}

function showScore() {
  if (document.getElementById("message").innerHTML === "Correct Answer!") {
    score++;
  }
  document.getElementById("score").innerHTML = "Score: " + score;
}

showScore();



























