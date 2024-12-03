const playerEl = document.getElementById("player");
const computerEl = document.getElementById("computer");
const stoneBtn = document.getElementById("stone");
const paperBtn = document.getElementById("paper");
const scissorBtn = document.getElementById("scissor");
const scoreBtn = document.getElementById("checkScore");
const resultEl = document.getElementById("result");
const playerWinEl = document.getElementById("playerWin");
const computerWinEl = document.getElementById("computerWin");
const drawsEl = document.getElementById("draw");
const resetEl = document.getElementById("reset");

let playerChoice = ""
let computerChoice = ""
let result = ""
let playerWins = 0;
let computerWins = 0;
let draws = 0;

function computerChoose() {
    let randomNum = Math.floor(Math.random()*3)+1;

    switch(randomNum) {
        case 1:
            computerChoice = "Stone"
            break;
        case 2:
            computerChoice = "Paper"
            break;
        case 3:
            computerChoice = "Scissor"
            break;
    }
    computerEl.textContent = `Computer : ${computerChoice}`;
}

function getResult () {
    if(playerChoice === computerChoice){
        result = "Draw!"
    }
    else if( playerChoice === "Stone" && computerChoice === "Scissor"){
        result = "Player Wins!"

    }
    else if( playerChoice === "Paper" && computerChoice === "Stone"){
        result = "Player Wins!"
    }
    else if( playerChoice === "Stone" && computerChoice === "Paper"){
        result = "Computer Wins!"
    }
    else if( playerChoice === "Scissor" && computerChoice === "Paper"){
        result = "Player Wins!"
    }
    else if( playerChoice === "Paper" && computerChoice === "Scissor"){
        result = "Computer Wins!"
    }
    else if( playerChoice === "Scissor" && computerChoice === "Stone"){
        result = "Computer Wins!"
    }
    else {
        alert("Error Message : Check Your Code")
    }
    resultEl.textContent = `Result : ${result}`
    if(result === "Draw!"){
        draws++;
    }
    else if(result === "Player Wins!"){
        playerWins++;
    }
    else if( result === "Computer Wins!"){
        computerWins++;
    }
    else{
        alert('Error in counting wins')
    }
}


stoneBtn.addEventListener("click",()=>{
    playerChoice = "Stone";
    playerEl.innerText = `Player : ${playerChoice}`;
    computerChoose()
    getResult()
}
)

paperBtn.addEventListener("click",()=>{
    playerChoice = "Paper";
    playerEl.innerText = `Player : ${playerChoice}`;
    computerChoose()
    getResult()
}
)

scissorBtn.addEventListener("click",()=>{
    playerChoice = "Scissor";
    playerEl.innerText = `Player : ${playerChoice}`;
    computerChoose()
    getResult()
}
)

scoreBtn.addEventListener("click",()=>{
    playerEl.innerText = `Player :`
    computerEl.textContent = `Computer :`
    resultEl.textContent = `Result :`
    drawsEl.innerText = `Draws : ${draws}`
    playerWinEl.innerHTML = `Player Won : ${playerWins}`
    computerWinEl.innerHTML = `Computer Won : ${computerWins}`
}
)

resetEl.addEventListener("click",()=>{
    playerWinEl.innerHTML = `Player :`
    computerWinEl.innerHTML = `Computer :`
    drawsEl.innerText = `Draw :`
}
)



