function game() {
    const rps = ["rock", "paper", "scissors"];

    let playerScore = 0;
    let computerScore = 0;

    while ((playerScore || computerScore) < 5) {

        let playerSelection = getPlayerChoice();
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
        console.log(playerScore, computerScore)
    }
    console.log(getWinner(playerScore, computerScore));
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

function getPlayerChoice() {
    return prompt('Rock, paper, or scissors?', '').toLowerCase()
}

function getWinner(playerScore, computerScore) {
    return (playerScore > computerScore) ? 'You win the game!' : 'You lose the game :(';
}

game();