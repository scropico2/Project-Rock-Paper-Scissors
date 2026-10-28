console.log("Hello World");

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const number = Math.floor(Math.random() * 3);
  if (number === 0) {
    return "rock";
  } else if (number === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  const choice = prompt("Rock, paper or scissors?");
  return choice;
}

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();
  if (humanChoice === computerChoice) {
    console.log("It's a tie!");
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    humanScore++;
    console.log("You win! Rock beats Scissors");
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    humanScore++;
    console.log("You win! Scissors beats Paper");
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    humanScore++;
    console.log("You win! Paper beats Rock");
  } else {
    computerScore++;
    console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
  }
}

playRound("rock", "scissors");
playRound("paper", "scissors");
console.log(humanScore, computerScore);
