
const winner = document.querySelector('.winner');
const explanation = document.querySelector('.explanation');

const playerInfo = document.querySelector('#player-info');
const computerInfo = document.querySelector('#computer-info');

const players = document.querySelectorAll('.choice');
const player = players[0];
const computer = players[1];

const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');

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
