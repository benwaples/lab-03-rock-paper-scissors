// import functions and grab DOM elements
import { getRandomThrow, checkResult } from './gameUtils.js';

const startGame = document.querySelector('.startGame');
const theGame = document.querySelector('.theGame');
const shootButton = document.querySelector('.shootButton');
const resultSpan = document.querySelector('.result');
const simulate = document.querySelector('.simulate');
const resetButton = document.querySelector('.resetButton');
const countWinElement = document.querySelector('.wins');
const countLossElement = document.querySelector('.losses');
const countDrawElement = document.querySelector('.draw');
const countGamesElement = document.querySelector('.numberOfPlays');

function hideGIF(arg) {
    arg.classList.add('hidden')
}

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
});

shootButton.addEventListener('click', () => {
    numberOfGames++;
    
    // gather players choice and compare to computer
    const checkRadio = document.querySelector('input:checked');
    playersDraw = Number(checkRadio.value);
    const matchResult = checkResult(playersDraw, computerDraw);
    
    //show gif and take it away
    simulate.classList.remove('hidden');
    setTimeout(function() {
        simulate.classList.add('hidden');
    }, 1000);

    //determine who won
    setTimeout(function() {
        if (matchResult === 'draw') {
            resultSpan.textContent = 'We tied, lets go again';
            countDraw++;
        }
        if (matchResult === 'lose') {
            resultSpan.textContent = 'You lost, don\' worry though we can play again';
            countLoss++;
        }
        if (matchResult === 'win') {
            resultSpan.textContent = 'You Won?! Alright let\'s go agiain';
            countWins++;
        }
    }, 1000);

    //update counters
    countWinElement.textContent = `You have won ${countWins} games`;
    countLossElement.textContent = `You have lost ${countLoss} games`;
    countDrawElement.textContent = `You have tied ${countDraw} games`;
    countGamesElement.textContent = `You have played ${numberOfGames} games`;


    //reset button appears
    resetButton.classList.remove('hidden');
});

resetButton.addEventListener('click', () => {
    resultSpan.classList.add('hidden');
    resetButton.classList.add('hidden');
    computerDraw = getRandomThrow();
    console.log(computerDraw, 'reset hand draw');
});

