let useScore=0;
let compscore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const genCompChoice =()=>{
    const options=["Rock","paper","scissors"];
     const randIdx =Math.floor(Math.random() *3);
     return options[randIdx];
};

const drawGame=()=>{
    console.log("game was draw");
    msg.innerText="Game was draw,play again!"; 
          msg.style.backgroundColor="#081b31";
};
const showWinner=(userWin ,userChoice,compChoice)=>{
    if(userWin){
        console.log("you win");
        msg.innerText=`you win! your  ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        console.log("you lose");
        msg.innerText=`you lose! ${compChoice} beats  your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
};
const playGame=(userChoice)=>{
    console.log("user choice=",userChoice);
    const compChoice=genCompChoice();
    console.log("comp choice=",compChoice);

    if(userChoice===compChoice){
        drawGame();
    }
        else{
            let userWin=true;
            if(userChoice==="rock"){
                //paper,scissors
                 userWin = compChoice === "paper" ? false : true;
            }else if(userChoice === "paper"){
                //scissors,rock
                userWin = compChoice=== "scissors" ? false : true;
            }
            else{
                //paper,rock
                userWin = compChoice === "rock" ? false : true;
            }
            showWinner(userWin,userChoice,compChoice);
        }
    };


choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
    playGame(userChoice);
    });
});