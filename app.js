// import functions and grab DOM elements
import { getRandomThrow, checkResult } from './gameUtils.js';

const startGame = document.querySelector('.startGame');
const theGame = document.querySelector('.theGame');
const shootButton = document.querySelector('.shootButton');


startGame.addEventListener('click', () => {
    startGame.classList.add('hidden');
    theGame.classList.remove('hidden');
})

shootButton.addEventListener('click', () => {
    const checkRadio = document.querySelector('input:checked');
    const checkRadioValue = checkRadio.value;
    console.log(checkRadioValue)
})

// initialize state

// set event listeners to update state and DOM 