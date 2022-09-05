const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const resetButton = document.querySelector('#reset');

rock.addEventListener('click', () => game('rock'));
paper.addEventListener('click', () => game('paper'));
scissors.addEventListener('click', () => game('scissors'));
resetButton.addEventListener('click', () => reset());


let playerScore = 0;
let computerScore = 0;
let gameOver = false;

const scoreCard = document.querySelector('.scoreCard');
const playerScoreDisplay = document.querySelector('#playerScore');
const computerScoreDisplay = document.querySelector('#computerScore');

playerScoreDisplay.textContent = playerScore;
computerScoreDisplay.textContent = computerScore;

function game(playerSelection) {
    const rps = ["rock", "paper", "scissors"];

    if ((playerScore < 5) && (computerScore < 5)) {        

        let computerSelection = getComputerChoice(rps);

        switch (playRound(playerSelection, computerSelection)) {
            case 'win':
                console.log('You win this round!');
                playerScore ++;
                break;
            case 'tie':
                console.log('This round was a tie.');
                break;
            case 'loss':
                console.log('You lose this round!');
                computerScore ++;
                break;
            case 'badInput':
                console.log('Try entering that again.');
                break;
        }
        console.log(playerScore, computerScore);
        playerScoreDisplay.textContent = playerScore;
        computerScoreDisplay.textContent = computerScore;

        if ((playerScore === 5) || (computerScore === 5)) {
            console.log(getWinner(playerScore, computerScore));
            const finalScore = document.createElement('p');
            finalScore.setAttribute('id','finalScore')
            finalScore.textContent = getWinner(playerScore, computerScore);
            scoreCard.append(finalScore);
            gameOver = true;
        }
    } 
}

function reset() {
    if (gameOver === true) {
        scoreCard.removeChild(finalScore);
        gameOver = false;
    }
    playerScore = 0;
    computerScore = 0;
    console.log(playerScore, computerScore);
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
}

function playRound(playerSelection, getComputerChoice) {
    if (
        (playerSelection === 'rock' && getComputerChoice === 'scissors') ||
        (playerSelection === 'paper' && getComputerChoice === 'rock') ||
        (playerSelection === 'scissors' && getComputerChoice === 'paper')
    )
        return 'win';

    else if (
        (playerSelection === 'rock' && getComputerChoice === 'paper') ||
        (playerSelection === 'paper' && getComputerChoice === 'scissors') ||
        (playerSelection === 'scissors' && getComputerChoice === 'rock')
    )
        return 'loss';

    else if (playerSelection === getComputerChoice)
        return 'tie';

    else
        return 'badInput';
    }

function getComputerChoice(rps) {
    return rps[Math.floor(Math.random() * 3)];
}



function getWinner(playerScore, computerScore) {
    if (gameOver === false) {
        return (playerScore > computerScore) ? 'You win the game!' : 'You lose the game :(';
    }
}