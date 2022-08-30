function game() {
    const rps = ["rock", "paper", "scissors"];

    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {

        let playerSelection = getPlayerChoice();
        let computerSelection = getComputerChoice(rps);

        switch (playRound(playerSelection, computerSelection)) {
            case 1:
                console.log('You win this round!');
                playerScore ++;
                break;
            case 0:
                console.log('This round was a tie.');
                break;
            case -1:
                console.log('You lose this round!');
                computerScore ++;
                break;
            case 2:
                console.log('Try entering that again.')
                i --;
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
        return 1;

    else if (
        (playerSelection === 'rock' && getComputerChoice === 'paper') ||
        (playerSelection === 'paper' && getComputerChoice === 'scissors') ||
        (playerSelection === 'scissors' && getComputerChoice === 'rock')
    )
        return -1;

    else if (playerSelection === getComputerChoice)
        return 0;

    else
        return 2;
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