const playerSelectionDisplay = document.getElementById('playerSelection');
const computerSelectionDisplay = document.getElementById('computerSelection');
const resulDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');

let playerSelection
let computerSelection
let result

possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click',(e) => {
    playerSelection = e.target.id;
    playerSelectionDisplay.innerHTML = playerSelection;
    getComputerChoice();
    playRound();
}))

function getComputerChoice() {
    const numRandom = Math.floor(Math.random() * possibleChoices.length);
    if(numRandom === 0){
        computerSelection = 'rock';
    }
    if(numRandom === 1){
        computerSelection = 'scissors';
    }
    if(numRandom === 2){
        computerSelection = 'paper';
    }
    computerSelectionDisplay.innerHTML = computerSelection;
}

function playRound(){
    if(playerSelection ===  computerSelection){
        result = 'Tie';
    }else if(playerSelection === 'rock' && computerSelection === 'paper'){
        result = 'You Lose!';
    }else if(playerSelection === 'rock' && computerSelection === 'scissors'){
        result = 'You Win!';
    }else if(playerSelection === 'paper' && computerSelection === 'scissors'){
        result = 'You Lose!';
    }else if(playerSelection === 'paper' && computerSelection === 'rock'){
        result = 'You Win!';
    }else if(playerSelection === 'scissors' && computerSelection === 'rock'){
        result = 'You Lose!';
    }else if(playerSelection === 'scissors' && computerSelection === 'paper'){
        result = 'You Win!';
    }
    resulDisplay.innerHTML = result;
}
/* const opt = ["rock", "paper", "scissors"];

function getComputerChoice() {
    const numRandom = Math.floor(Math.random() * opt.length);
    return(opt[numRandom]);
}

function playRound(playerSelection, computerSelection){
    if(playerSelection === "rock" && computerSelection === "rock"){
        return "Tie ... You chose " + playerSelection + " and JS chose " + computerSelection;
    }else if(playerSelection === "rock" && computerSelection === "paper"){
        return "You Lose! ... " + computerSelection + " beats " + playerSelection;
    }else if(playerSelection === "rock" && computerSelection === "scissors"){
        return "You Win! ... " + playerSelection + " beats " + computerSelection;
    }else if(playerSelection === "paper" && computerSelection === "rock"){
        return "You Win! ... " + playerSelection + " beats " + computerSelection;
    }else if(playerSelection === "paper" && computerSelection === "paper"){
        return "Tie ... You chose " + playerSelection + " and JS chose " + computerSelection;
    }else if(playerSelection === "paper" && computerSelection === "scissors"){
        return "You Lose! ... " + computerSelection + " beats " + playerSelection;
    }else if(playerSelection === "scissors" && computerSelection === "rock"){
        return "You Lose! ... " + computerSelection + " beats " + playerSelection;
    }else if(playerSelection === "scissors" && computerSelection === "paper"){
        return "You Win! ... " + playerSelection + " beats " + computerSelection;
    }else if(playerSelection === "scissors" && computerSelection === "scissors"){
        return "Tie ... You chose " + playerSelection + " and JS chose " + computerSelection;
    }else{
        return "No valid option";
    }
}
 
 function game(){
    const playerSelection = prompt("Choose among Rock, Paper or Scissors").toLowerCase();
    const computerSelection = getComputerChoice();
    return playRound(playerSelection, computerSelection)
}  */