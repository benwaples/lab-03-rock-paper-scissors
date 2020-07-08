// import functions and grab DOM elements
import { getRandomThrow, checkResult } from './gameUtils.js';

const startGame = document.querySelector('.startGame');
const theGame = document.querySelector('.theGame');
const shootButton = document.querySelector('.shootButton');



console.log(checkResult(2, 1));



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
    const checkRadio = document.querySelector('input:checked');
    playersDraw = Number(checkRadio.value);

    console.log(playersDraw, 'players choice');
    console.log(computerDraw, 'computer choice');

    console.log(checkResult(playersDraw, computerDraw), 'results');
});