
const winner = document.getElementsByClassName('winner')[0];
const explanation = document.getElementsByClassName('explanation')[0];

const playerInfo = document.getElementById('player-info');
const computerInfo = document.getElementById('computer-info');

const player = document.getElementsByClassName('choice')[0];
const computer = document.getElementsByClassName('choice')[1];

const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');

let playerScore = 0;
let computerScore = 0;

let choices = ['rock', 'paper', 'scissors'];

rockButton.addEventListener('click', () => buttonClick('rock'));
paperButton.addEventListener('click', () => buttonClick('paper'));
scissorsButton.addEventListener('click', () => buttonClick('scissors'));

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function buttonClick(playerChoice) {
    computerChoice = getComputerChoice();
    player.textContent = capitalizeFirstLetter(playerChoice);
    computer.textContent = capitalizeFirstLetter(computerChoice);
    getWinner(playerChoice, computerChoice);
}

function getWinner(playerChoice, computerChoice) {
    if (playerChoice == 'rock' && computerChoice == 'scissors')
        playerWin(playerChoice, computerChoice);
    else if (playerChoice == 'paper' && computerChoice == 'rock')
        playerWin(playerChoice, computerChoice);
    else if (playerChoice == 'scissors' && computerChoice == 'paper')
        playerWin(playerChoice, computerChoice);
    else if (playerChoice == computerChoice)
        tie(playerChoice, computerChoice);
    else
        computerWin(playerChoice, computerChoice);
}

function playerWin(playerChoice, computerChoice) {
    playerScore++;
    playerInfo.textContent = `Player: ${playerScore}`;
    winner.textContent = 'You won!';
    explanation.textContent = `${capitalizeFirstLetter(playerChoice)} beats ${capitalizeFirstLetter(computerChoice)}.`;
}

function computerWin(playerChoice, computerChoice) {
    computerScore++;
    computerInfo.textContent = `Computer: ${computerScore}`;
    winner.textContent = 'You lost!'
    explanation.textContent = `${capitalizeFirstLetter(playerChoice)} loses to ${capitalizeFirstLetter(computerChoice)}.`;
}

function tie(playerChoice, computerChoice) {
    winner.textContent = 'It\'s a tie!'
    explanation.textContent = `You both chose ${capitalizeFirstLetter(playerChoice)}.`;
}
