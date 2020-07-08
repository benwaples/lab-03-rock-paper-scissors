// import functions and grab DOM elements
import { getRandomThrow, checkResult } from './gameUtils.js';

const startGame = document.querySelector('.startGame');
const theGame = document.querySelector('.theGame');
const shootButton = document.querySelector('.shootButton');
const resultSpan = document.querySelector('.result');
const resetButton = document.querySelector('.resetButton');
const countWinElement = document.querySelector('.wins');
const countLossElement = document.querySelector('.losses');
const countDrawElement = document.querySelector('.draw');
const countGamesElement = document.querySelector('.numberOfPlays');






// initialize state
let computerDraw = 0;
let playersDraw = 0;
let countWins = 0;
let countLoss = 0;
let countDraw = 0;
let numberOfGames = 0;

// set event listeners to update state and DOM 

startGame.addEventListener('click', () => {
    startGame.classList.add('hidden');
    theGame.classList.remove('hidden');
    computerDraw = getRandomThrow();
    console.log(computerDraw);
})

shootButton.addEventListener('click', () => {
    numberOfGames++;
    console.log(numberOfGames)
    
    const checkRadio = document.querySelector('input:checked');
    playersDraw = Number(checkRadio.value);

    const matchResult = checkResult(playersDraw, computerDraw);
    if (matchResult === 'draw') {
        resultSpan.textContent = 'We tied, lets go again';
        countDraw++;
    }
    if (matchResult === 'lose') {
        resultSpan.textContent = 'You lost, don\' worry though we can play again';
        countLoss++;
    }
    if (matchResult === 'win') {
        resultSpan.textContent = 'You Won?! Alright let\'s go agiain'
        countWins++;
    }
    countWinElement.textContent = `You have won ${countWins} games`;
    countLossElement.textContent = `You have lost ${countLoss} games`;
    countDrawElement.textContent = `You have tied ${countDraw} games`;
    countGamesElement.textContent = `You have played ${numberOfGames} games`;

});

