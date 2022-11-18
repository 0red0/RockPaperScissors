const playerDisplay = document.getElementById("player-display");
const pcDisplay = document.getElementById("pc-display");
const player = document.getElementById("choose");
const btn = document.querySelectorAll("button");
const pc = document.getElementById("pcPicked");
const forPc = ["rock", "paper", "scissors"];
const result = document.getElementById("result");
const playerScore = document.querySelector(".score");
const pcScore = document.querySelector(".pc-score");
const playerImg = document.querySelector(".player-imag");
const pcImg = document.querySelector(".pc-imag");
let playerCounter = 1;
let pcCounter = 1;

btn.forEach((button) => {
   button.addEventListener("click", () => {
      const randomizer = Math.round(Math.random() * 2);
      let randomy = forPc[randomizer];
      pc.textContent = randomy.toUpperCase();
      pcImg.innerHTML = `<img src="./images/${randomy}.jpg" alt="${randomy}">`;
      player.textContent = button.value.toUpperCase();
      playerImg.innerHTML = `<img src="./images/${button.value}.jpg" alt="${button.value}">`;
      logic();
      keepingScore();
   });
});
function logic() {
   if (player.textContent === pc.textContent) {
      result.textContent = "It's A Draw.!";
      result.style.background = "yellow";
      result.style.color = "black";
   }
   if (player.textContent == "ROCK" && pc.textContent == "PAPER") {
      result.textContent = "You Lose! :(";
      result.style.background = "red";
      result.style.color = "white";
   }
   if (player.textContent == "ROCK" && pc.textContent == "SCISSORS") {
      result.textContent = "You Win. ;)";
      result.style.color = "white";
      result.style.background = "green";
   }
   if (player.textContent == "PAPER" && pc.textContent == "ROCK") {
      result.textContent = "You Win. ;)";
      result.style.color = "white";
      result.style.background = "green";
   }
   if (player.textContent == "PAPER" && pc.textContent == "SCISSORS") {
      result.textContent = "You Lose! :(";
      result.style.background = "red";
      result.style.color = "white";
   }
   if (player.textContent == "SCISSORS" && pc.textContent == "ROCK") {
      result.textContent = "You Lose! :(";
      result.style.background = "red";
      result.style.color = "white";
   }
   if (player.textContent == "SCISSORS" && pc.textContent == "PAPER") {
      result.textContent = "You Win. ;)";
      result.style.color = "white";
      result.style.background = "green";
   }
}
function keepingScore() {
   pcDisplay.style.opacity = "1";
   playerDisplay.style.opacity = "1";
   if (result.textContent == "You Win. ;)") {
      playerScore.innerText = playerCounter;
      playerCounter++;
      pcDisplay.style.opacity = ".5";
   }
   if (result.textContent == "You Lose! :(") {
      pcScore.innerText = pcCounter;
      pcCounter++;
      playerDisplay.style.opacity = ".5";
   }
}
