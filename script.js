let humanScore = 0;
let computerScore = 0;


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

function playGame(humanSelection, computerSelection){
    const result = document.querySelector('#result')
    if (humanScore == 5){
    result.textContent = "Winner is Human ";
    return
    }else if(computerScore == 5){
    result.textContent = "Winner is Machine ";
    }

    if (humanSelection == computerSelection){
        return 
    }

    if (humanSelection == "rock"){
       if(computerSelection == "paper"){
          display.textContent="Robot Won !";
          computerScore = computerScore+1;
        }else if(computerSelection == "scissors")
          display.textContent="Human Won !";
          humanScore =humanScore+1;
        }
    
    if (humanSelection == "paper"){
       if(computerSelection == "scissors"){
          display.textContent="Robot Won !";
          computerScore = computerScore+1;
        }else if(computerSelection == "rock"){
          display.textContent="Human Won !";
          humanScore =humanScore+1;
        }
    }


    if (humanSelection == "scissors"){
       if(computerSelection == "rock"){
          display.textContent="Robot Won !";
          computerScore = computerScore+1;
        }else if(computerSelection == "paper"){
          display.textContent="Human Won !";
          humanScore =humanScore+1;
        }
       
    }
    let messageH = "Human Score is : " + humanScore ;
    let messageM = "Machine Score is : " + computerScore ;
    scoreH.textContent= messageH;
    scoreM.textContent= messageM;


 }  



const rock = document.querySelector('#btnRock');
rock.addEventListener('click', () =>{
  let machineChoice = getComputerChoice()
   playGame("rock", machineChoice);
});

const paper = document.querySelector('#btnPaper');
paper.addEventListener('click', () =>{
  let machineChoice = getComputerChoice()
   playGame("paper", machineChoice);
});
    
const scisor = document.querySelector('#btnScisor');
scisor.addEventListener('click', () =>{
  let machineChoice = getComputerChoice()
   playGame("scissors", machineChoice);
});


