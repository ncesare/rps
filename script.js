// Let player choose 'Best of x' with a slider

const matchLength = document.querySelector('#best-of-slider');

let winningScore = Number(matchLength.value);

matchLength.addEventListener('input', () => {
    if (user.score === 0 && computer.score === 0) winningScore = Number(matchLength.value);
    else matchLength.value = winningScore;
});

// Assigning variables to misc on-page elements

const resetButton = document.querySelector('#reset');
resetButton.addEventListener('click', () => {
    user.score = computer.score = playerScore.textContent = computerScore.textContent = 0; 
})

const roundOutcome = document.querySelector('#previous-round');

const playerScore = document.querySelector('#player-score');
const computerScore = document.querySelector('#computer-score');

const rpsButtons = document.querySelectorAll('.container>button');

rpsButtons.forEach(element => {
    element.value = element.id;
    element.addEventListener('click', () => {
            if (user.score === winningScore || computer.score === winningScore) return;
            else playRound(element.value);
        });
    });

// Create player object that stores choice and score

function Player(type) {
    let score = 0;
    let choice;
    return {type, score, choice};
}

let user = Player('human');
let computer = Player('computer');

// Each time the user players a round, evluate their choice vs computer choice
// Change scores accordingly
// Check to see if the game if over

function playRound(buttonValue) {
    user.choice = buttonValue;
    computer.choice = randomRPS();
    roundOutcome.textContent = evalRound();
    playerScore.textContent = user.score;
    computerScore.textContent = computer.score;
    checkGameOver();

    function randomRPS() {
        const rps = ['rock', 'paper', 'scissors'];
        const randInt = Math.floor(Math.random() * 3);
        return rps[randInt];
    }

    function evalRound() {
        if (user.choice === computer.choice) return `Tie! You both chose ${user.choice}.`;
        else if (user.choice === 'rock' && computer.choice === 'scissors' ||
                user.choice === 'paper' && computer.choice === 'rock' ||
                user.choice === 'sissors' && computer.choice === 'paper') {
                    user.score++;
                    return `You win! ${user.choice} beats ${computer.choice}.`;
                } else {
                    computer.score++;
                    return `You lose. ${computer.choice} beats ${user.choice}.`;
                } 
    }

    function checkGameOver() {
        if (user.score === winningScore) console.log('user wins');
        else if (computer.score === winningScore) console.log('computer wins');
    }
}