let playerScore = 0;
let jsScore = 0;

const instructions = document.querySelector('#instructions');
const containerPlayerScore = document.querySelector('#player-score');
const containerJsScore = document.querySelector('#js-score');
const message = document.querySelector('#message');
const containerPointWin = document.querySelector('#point-win');
const choseWapon = document.querySelector('#choose-weapon');
const playerSelectionDisplay = document.querySelector('#playerSelection');
const computerSelectionDisplay = document.querySelector('#computerSelection');
const btnWeapons = document.querySelectorAll(".weapon");

btnWeapons.forEach(btn => {
    btn.addEventListener("click", playRound);
})

function playRound(e){
    let computerSelection = Math.floor(Math.random() * 3);
    let playerSelection = e.currentTarget.id;
    
    if(computerSelection === 0){
        computerSelection = "rock🪨";
    }else if(computerSelection === 1){
        computerSelection = "paper📄";
    }else{
        computerSelection = "scissors✂️";
    }
    console.log("User: " + playerSelection);
    console.log("JS: " + computerSelection);

    if((playerSelection === "rock🪨" && computerSelection === "scissors✂️") ||
       (playerSelection === "scissors✂️" && computerSelection === "paper📄") ||
       (playerSelection === "paper📄" && computerSelection === "rock🪨")){
        userWin();
       }else if((computerSelection === "rock🪨" && playerSelection === "scissors✂️") ||
       (computerSelection === "scissors✂️" && playerSelection === "paper📄") ||
       (computerSelection === "paper📄" && playerSelection === "rock🪨")){
        jsWin();
       }else {
        tie();
       }
       message.classList.remove("disabled");
       playerSelectionDisplay.innerText = playerSelection;
       computerSelectionDisplay.innerText = computerSelection;

       if(playerScore === 5 || jsScore === 5){
        if(playerScore === 5){
            instructions.innerText = "You won the game";
        }
        if(jsScore === 5){
            instructions.innerText = "JS won the game"
        }
        choseWapon.classList.add("disabled");
        restart.classList.remove("disabled");
        restart.addEventListener("click", restartGame);
       }
}

function userWin(){
    playerScore++;
    containerPlayerScore.innerText = playerScore;
    containerPointWin.innerText = "You earned a point";
}

function jsWin(){
    jsScore++;
    containerJsScore.innerText = jsScore;
    containerPointWin.innerText = "JS has won one point"
}

function tie(){
    containerPointWin.innerText = "TIE"
}

function restartGame(){
    restart.classList.add("disabled");
    choseWapon.classList.remove("disabled");
    message.classList.add("disabled");

    playerScore = 0;
    jsScore = 0;

    containerPlayerScore.innerText = playerScore;
    containerJsScore.innerText = jsScore;
    instructions.innerText = "First to 5 points WINS!";
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