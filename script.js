"use ctrict";

var score = 0;
var header = document.getElementById("header");
var calc = 0;
var userAnswer = document.getElementById("form");

const inputEl = document.getElementById("input");

let a;
let b;
let taskText;

a = Math.ceil(Math.random() * 10);
b = Math.ceil(Math.random() * 10);
calc = a * b;

userAnswer.addEventListener("submit", () => {
  const userAnswer = +inputEl.value;
  console.log(userAnswer, typeof userAnswer);
  if (userAnswer === calc) {
    score++;
  } else {
    score--;
  }
  console.log(score);
});

console.log(calc);
console.log(userAnswer);

taskText = "What is " + a + " multiply by " + b + "?";

header.innerHTML = taskText;
score.innerHTML = score;
