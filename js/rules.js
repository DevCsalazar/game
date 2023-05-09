function randomSelection(minimum, maximum){
    let numRandom = Math.floor(Math.random() * (maximum - minimum + 1) + minimum);
    return numRandom;
}

const opt = ['Rock','Paper','Scissors'];
const computerSelection = randomSelection(0,2);
const playerSelection = prompt("Choose your weapon:\n 0 - Rock\n 1 - Paper\n 2 - Scissors");

alert("You chose " + opt[playerSelection]);
alert("JS chose " + opt[computerSelection]);

if(playerSelection == 0){
    /* alert("You chose Rock"); */
    if(computerSelection == 0){
        alert("Tie ... Both chose Rock");
    }else if(computerSelection == 1){
        alert("You LOSE! ... Paper beats Rock");
    }else if(computerSelection == 2){
        alert("You WON! ... Rock beats Scissors");
    }
}else if(playerSelection == 1){
/*     alert("You chose Paper");
 */    if(computerSelection == 0){
        alert("You WON! ... Paper beats Rock");
    }else if(computerSelection == 1){
        alert("Tie ... Both chose Paper");
    }else if(computerSelection == 2){
        alert("You LOSE! ... Scissors beats Paper");
    }
}else if(playerSelection == 2){
/*     alert("You chose Scissors");
 */    if(computerSelection == 0){
        alert("You LOSE! ... Rock beats Scissors");
    }else if(computerSelection == 1){
        alert("You WON! ... Scissors beats Paper");
    }else if(computerSelection == 2){
        alert("Tie ... Both chose Scissors");
    }
}else {
    alert("No valid option, please try again");
}


console.log(playerSelection, computerSelection);



/* function getComputerChoice(){
    
}
function playRound(playerSelection, computerSelection) {}

const playerSelection = "rock";
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection,computerSelection)); */