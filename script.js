let arr = ["rock", "paper", "scissors"];

let computerPlay = () => arr[Math.floor(Math.random() * arr.length)];

console.log(computerPlay());
