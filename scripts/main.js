const playerScoreSpanElement = document.getElementById("player-score");
const computerScoreSpanElement = document.getElementById("computer-score");
const roundResultsMsg = document.getElementById("results-msg");
const winnerMsgElement = document.getElementById("winner-msg");
const resetGameBtn = document.getElementById("reset-game-btn");
const optionsContainer = document.getElementById("options-container");

const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");
const scissorsBtn = document.getElementById("scissors-btn");

let playerScore = 0;
let computerScore = 0;

function getRandomComputerResult() {
    const options = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * 3);  
    return options[randomIndex];  
}

function hasPlayerWonTheRound(player, computer) {
    if (
        (player === "Rock" && computer === "Scissors") ||
        (player === "Scissors" && computer === "Paper") ||
        (player === "Paper" && computer === "Rock")
    ) {
        return true; 
    }
    return false; 
}

function getRoundResults(userOption) {
    const computerResult = getRandomComputerResult();  
    let roundMessage = ""; 

    if (hasPlayerWonTheRound(userOption, computerResult)) {
        playerScore++;  
        roundMessage = `Player wins! ${userOption} beats ${computerResult}`;
    } else if (userOption === computerResult) {
        roundMessage = `It's a tie! Both chose ${userOption}`;
    } else {
        computerScore++;  
        roundMessage = `Computer wins! ${computerResult} beats ${userOption}`;
    }

    return roundMessage; 
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;

    playerScoreSpanElement.innerText = playerScore;
    computerScoreSpanElement.innerText = computerScore;

    roundResultsMsg.innerText = "";
    winnerMsgElement.innerText = "";

    optionsContainer.style.display = "block";
    resetGameBtn.style.display = "none";

    rockBtn.disabled = false;
    paperBtn.disabled = false;
    scissorsBtn.disabled = false;
}

function showResults(userOption) {
    if (playerScore === 3 || computerScore === 3) {
        return; 
    }

    const roundResultMessage = getRoundResults(userOption);
    roundResultsMsg.innerText = roundResultMessage;

    playerScoreSpanElement.innerText = playerScore;
    computerScoreSpanElement.innerText = computerScore;

    if (playerScore === 3 || computerScore === 3) {
        winnerMsgElement.innerText = `${
            playerScore === 3 ? "Player" : "Computer"
        } has won the game!`;

        resetGameBtn.style.display = "block";
        optionsContainer.style.display = "none";

        rockBtn.disabled = true;
        paperBtn.disabled = true;
        scissorsBtn.disabled = true;
    }
}

rockBtn.addEventListener("click", function () {
    showResults("Rock");
});

paperBtn.addEventListener("click", function () {
    showResults("Paper");
});

scissorsBtn.addEventListener("click", function () {
    showResults("Scissors");
});

resetGameBtn.addEventListener("click", resetGame);
