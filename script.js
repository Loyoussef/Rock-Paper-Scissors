function getComputerChoice (){
    let value = Math.floor(Math.random() * 3);
    let choice;
    switch (value) {
      case 0:
        choice = 'rock';
        break;
      case 1: 
        choice = 'paper'
        break;
      case 2: 
        choice = 'scissors'
        break;
    }
    console.log(choice);
    return choice;
}

function getHumanChoice(){
    let value = prompt("Rock, Paper or Scissors ? :","");
    return value.toLowerCase();
}

let humanScore = 0;
let computerScore = 0;

function playGame(humanSelection, computerSelection){

    if (humanSelection == computerSelection){
        return 
    }

    if (humanSelection == "rock"){
       if(computerSelection == "paper"){
          console.log("Robot Won !");
          computerScore =+1;
        }else if(computerSelection == "scissors")
          console.log("Human Won !");
          humanScore =+1;
        }
    
    if (humanSelection == "paper"){
       if(computerSelection == "scissors"){
          console.log("Robot Won !");
          computerScore =+1;
        }else if(computerSelection == "rock"){
          console.log("Human Won !");
          humanScore =+1;
        }
    }


    if (humanSelection == "scissors"){
       if(computerSelection == "rock"){
          console.log("Robot Won !");
          computerScore =+1;
        }else if(computerSelection == "paper"){
          console.log("Human Won !");
          humanScore =+1;
        }
    }
 }

 for(let i=1; i<5; i++){
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();
    playGame(humanSelection,computerSelection);
    console.log(humanScore,computerScore);
  }

   if(humanScore > computerScore){
    console.log("Human Won !");
  }else if(humanScore < computerScore){
    console.log("Computer Won !");
  }
  else if(humanScore == computerScore){
    console.log("it's a tie !");
  } 

    