const rockbutton=document.getElementById("rock");
const paperbutton=document.getElementById("paper");
const scissorbutton=document.getElementById("scissor");
const resultdispaly=document.getElementById("result");

const option=["rock","paper","Scissor"];

rockbutton.addEventListener('click', function(){
        playgame("rock")
}
);
 paperbutton.addEventListener('click', function(){
    playgame("paper")
}
);
 scissorbutton.addEventListener('click', function(){
    playgame("scissor")
}
);

function playgame(UserChoice){
    const ComputerChoice=option[Math.trunc(Math.random()*option.length)];
    const result=determineWinner(UserChoice, ComputerChoice);
    resultdispaly.innerHTML = `You chose ${UserChoice}. The computer chose ${ComputerChoice}. ${result}.`;
    
    
}
function determineWinner(UserChoice, ComputerChoice){
    if(UserChoice==ComputerChoice){
        return "its a tie"
    }
    if(UserChoice=="rock"){
        if(ComputerChoice=="scissor"){
            return "you win"
        }
        else{
            return "computer win"
        }
    }
                if(UserChoice=="paper"){
        if(ComputerChoice=="rock"){
            return "you lose"
        }
        else{
            return "computer win"
        }
    }
                if(UserChoice=="scissor"){
        if(ComputerChoice=="paper"){
            return "you win"
        }
        else{
            return "computer win"
        }
    }

}