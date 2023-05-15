const opt = ["rock", "paper", "scissors"];

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

const playerSelection = prompt("Choose among Rock, Paper or Scissors").toLowerCase();
const computerSelection = getComputerChoice();

alert(playRound(playerSelection,computerSelection));
 
/* function game(){
    return playRound(playerSelection,computerSelection);
} */

