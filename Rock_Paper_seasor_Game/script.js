
const msg = document.querySelector("#msg");
const userScore = document.querySelector("#user-score")
const compScore = document.querySelector("#comp-score")
let scoreUser = 0;
let scoreComp = 0;

const choices = document.querySelectorAll(".choice");

const genComputerChoice = ()=>{
    const options = ["rock","paper","seasor"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx]

}
const drowGame = ()=>{
    console.log("Game was drow.");
    msg.innerText = "Game was drow.";
}

const showWinner = (userWin)=>{
    if(userWin){
        scoreUser++;
        userScore.innerText = scoreUser;
        console.log("You win");
        msg.innerText = "your win."
        msg.style.backgroundColor = "green"
    }else{
        scoreComp++;
        compScore.innerText = scoreComp;
        console.log("You lose");
        msg.innerText = "your lose. "
        msg.style.backgroundColor = "red"

    }
}

const playGame = (userChoice)=>{
    console.log("user choice = ",userChoice);
    //generate computer choice
    const compChoice = genComputerChoice();
    console.log("computer Choice : ",compChoice);

    if(userChoice === compChoice){
        drowGame();
    }else{
        let userWin=true;
        if(userChoice === "rock"){
            userWin =  compChoice === "paper"?false : true;
        }else if(userChoice ==="paper"){
            //rock,seasor
            userWin = compChoice ==="seasor"?false:true;
        }else{
            userWin = compChoice ==="rock"?false:true;
        }
        showWinner(userWin);
        

    }
}
choices.forEach((choice)=>{
    const userChoice = choice.getAttribute("id");
    choice.addEventListener("click",()=>{
        // console.log("Choice was clicked",userChoice);
        playGame(userChoice);
    })
})