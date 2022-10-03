// Let player choose 'Best of x' with a slider

const matchLength = document.querySelector('#best-of-slider');
const bestOfDisplay = document.querySelector('#best-of-display');

let winningScore = Number(matchLength.value);

matchLength.addEventListener('input', () => {
    if (user.score === 0 && computer.score === 0) {
        winningScore = Number(matchLength.value);
        bestOfDisplay.textContent = `Best of ${winningScore * 2 - 1}`
    }
    else matchLength.value = winningScore;
});


// Assigning variables to misc on-page elements

const resetButton = document.querySelector('#reset');
resetButton.addEventListener('click', () => {
    user.score = computer.score = playerScore.textContent = computerScore.textContent = 0; 
    roundOutcome.innerHTML = '';
    displayWinner.textContent = '';
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

const displayWinner = document.querySelector('#winner');

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
    roundOutcome.innerHTML = evalRound();
    playerScore.textContent = user.score;
    computerScore.textContent = computer.score;
    checkGameOver();

    function randomRPS() {
        const rps = ['rock', 'paper', 'scissors'];
        const randInt = Math.floor(Math.random() * 3);
        return rps[randInt];
    }

    function evalRound() {
        if (user.choice === computer.choice) return `${appendIcons(user.choice)} <img src="icons/swords_icon.svg" alt="versus"> ${appendIcons(computer.choice)}`;
        else if (user.choice === 'rock' && computer.choice === 'scissors' ||
            user.choice === 'paper' && computer.choice === 'rock' ||
            user.choice === 'scissors' && computer.choice === 'paper') user.score++;
        else computer.score++;
        return `${appendIcons(user.choice)} <img src="icons/swords_icon.svg" alt="versus"> ${appendIcons(computer.choice)}`;
    }

    function checkGameOver() {
        if (user.score === winningScore) return displayWinner.textContent = 'You win!';
        else if (computer.score === winningScore) return displayWinner.textContent = 'You lose :(';
    }

    function appendIcons(choice) {
        switch (choice) {
            case 'rock':
                return '<img src="icons/rock_icon.svg" alt="Rock">'
            case 'paper':
                return '<img src="icons/paper_icon.svg" alt="Paper">'
            case 'scissors':
                return '<img src="icons/scissors_icon.svg" alt="Scissors">'
        }
    }
}