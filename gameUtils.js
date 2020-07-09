//1 = rock
// 2 = paper
// 3 = scissors


export function getRandomThrow() {
// get a random number then decypher if it is gonna be rock paper or scissors. return a string of the above
    return Math.ceil(Math.random() * 3);
}

export function checkResult(player, computer) {
// evaluate what a win, loss, and draw, only for the player tho. return win loss or draw
    if (player === computer) {
        return 'draw';
    } else if ((player === 1 && computer === 2) || (player === 2 && computer === 3) || (player === 3 && computer === 1)) {
        return 'lose';    
    } else if ((player === 1 && computer === 3) || (player === 2 && computer === 1) || (player === 3 && computer === 2)) {
        return 'win';
    }
}

export function computerHand(number) {
    if (number === 1) {
        return 'Rock';
    }
    if (number === 2) {
        return 'Paper';
    }
    if (number === 3) {
        return 'Scissors';
    }
}

export function toggleElement(elements){
    elements.forEach(element => element.classList.toggle('hidden')
    );}