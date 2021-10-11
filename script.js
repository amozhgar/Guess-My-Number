"use strict";

let secretNumber = Math.floor(Math.random() * 20);

let score = 20;
let highScore = 0;

document.querySelector(".check").addEventListener("click", () => {
  const guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    document.querySelector(".message").textContent = "⛔ No Number!!!";
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "🎉 Correct Number";
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").textContent = guess;
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent =
        guess > secretNumber ? "📈 Too high!" : "📉 Too low!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "🖐 You lost the game!";
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", () => {
  score = 20;
  secretNumber = Math.floor(Math.random() * 20);
  document.querySelector(".guess").value = "";
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".score").textContent = 20;
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").textContent = "?";
});
