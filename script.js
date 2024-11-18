const hand = ['rock', 'paper', 'scissors'];
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let compChoice = Math.floor(Math.random() * 3);
    return hand[compChoice];
}

function getHumanChoice() {
    humanChoice = prompt("Choose: rock, paper, or scissors");

    humanChoice = humanChoice.toLowerCase();
    
    while (true) {
        if (humanChoice == 'rock' || humanChoice == 'paper' || humanChoice == 'scissors') {
            break;
        } else {
            console.log("Please enter a valid choice");
        }
    }

    return humanChoice;
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        console.log("Tie");
    } else if (
        (humanChoice == 'rock' && computerChoice == 'scissors') ||
        (humanChoice == 'paper' && computerChoice == 'rock') ||
        (humanChoice == 'scissors' && computerChoice == 'paper')

    ) {
        console.log('You win ', humanChoice, ' beats ', computerChoice);
        humanScore++;
    } else if (
        (humanChoice == 'rock' && computerChoice == 'paper') ||
        (humanChoice == 'paper' && computerChoice == 'scissors') ||
        (humanChoice == 'scissors' && computerChoice == 'rock')
    ) {
        console.log('You lose ', humanChoice, 'loses to ', computerChoice);
        computerScore++;
    }
    console.log('Current score: ', humanScore, '-', computerScore);
}

function playGame() {
    for (let i = 1; i<=5; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }

    if (humanScore > computerScore) {
        console.log('You win! ', humanScore, '-', computerScore);
    } else if (computerScore > humanScore) {
        console.log('You lose :( ', humanScore, '-', computerScore);
    } else {
        console.log('You tied ', humanScore, '-', computerScore);
    }
}

playGame();