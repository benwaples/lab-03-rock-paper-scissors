// import functions and grab DOM elements
import { 
    getRandomThrow, 
    checkResult, 
    computerHand,
    toggleElement 
} from './gameUtils.js';


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
const countReset = document.querySelector('.countReset');
const radioDiv = document.querySelector('#radiodiv');
const countStation = document.querySelector('.countingStation');


// initialize state
let computerDraw = 0;
let playersDraw = 0;
let countWins = 0;
let countLoss = 0;
let countDraw = 0;
let numberOfGames = 0;
let resetCounter = 0;


// set event listeners to update state and DOM 

startGame.addEventListener('click', () => {
    computerDraw = getRandomThrow();
    toggleElement([startGame, theGame]);
});

shootButton.addEventListener('click', () => {
    numberOfGames++;
    const computerString = computerHand(computerDraw);

    // gather players choice and compare to computer
    const checkRadio = document.querySelector('input:checked');
    playersDraw = Number(checkRadio.value);
    const matchResult = checkResult(playersDraw, computerDraw);
    
    //show gif and take it away
    simulate.classList.remove('hidden');
    setTimeout(function() {
        simulate.classList.add('hidden');
    }, 1500);
    
    //determine who won
    setTimeout(function() {
        resultSpan.classList.remove('hidden');
        if (matchResult === 'draw') {
            resultSpan.textContent = `The computer played ${computerString}. We tied, lets go again`;
            countDraw++;
        }
        if (matchResult === 'lose') {
            resultSpan.textContent = `The computer played ${computerString}. You lost, don't worry though we can play again`;
            countLoss++;
        }
        if (matchResult === 'win') {
            resultSpan.textContent = `The computer played ${computerString}. You Won?! Alright let's go again`;
            countWins++;
        }
        countWinElement.textContent = `You have won ${countWins} games`;
        countLossElement.textContent = `You have lost ${countLoss} games`;
        countDrawElement.textContent = `You have tied ${countDraw} games`;
        countGamesElement.textContent = `You have played ${numberOfGames} games`;

    }, 1500);
    
    //reset button appears and take away the shoot button

    toggleElement([resetButton, countStation, shootButton, radioDiv]);
    
    //update counters
});

resetButton.addEventListener('click', () => {
    resetCounter ++;
    toggleElement([resultSpan, resetButton, radioDiv, shootButton, countStation]);
    computerDraw = getRandomThrow();
    countReset.textContent = `You have reset the game ${resetCounter} times`;
});
