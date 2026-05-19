let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const score = document.querySelector("#user-score");
const score2 = document.querySelector("#comp-score");

const genCompChoice = () => {
    const option = ["rock", "paper", "scissors"];
    const randIndex = Math.floor(Math.random () * 3)
    return option[randIndex];
}

const drawGame = () => {
    msg.innerText = "Game draw";
    msg.style.backgroundColor = "#081b31";
}
const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        msg.innerText = `You win Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        userScore++;
        score.innerText = userScore;
    } else{
        msg.innerText = `you lost ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
        compScore++;
        score2.innerText = compScore;
    }
} 

const playGame = (userChoice) => {
    const compChoice = genCompChoice();    
    if (userChoice === compChoice) {
        drawGame();
    } else{
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        }
        else if (userChoice === "paper"){
            userWin = compChoice === "scissors" ? false : true;
        }
        else{
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click",() =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})