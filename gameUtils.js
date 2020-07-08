//1 = rock
// 2 = paper
// 3 = scissors


export function getRandomThrow() {
// get a random number then decypher if it is gonna be rock paper or scissors. return a string of the above
    Math.ceil(Math.random() * 3);
}

export function checkResult(player, computer) {
// evaluate what a win is, loss, and draw, only for the player tho. return win loss or draw
    if (player === 1 && computer === 1) {
        return 'draw';
    } else if (player === 2 && computer === 2) {
        return 'draw';
    } else if (player === 3 && computer === 3) {
        return 'draw';
    } else if (player === 1 && computer === 2) {
        return 'lose';
    } else if (player === 2 && computer === 3) {
        return 'lose';
    } else if (player === 3 && computer === 1) {
        return 'lose';
    } else if (player === 1 && computer === 3) {
        return 'win';
    } else if (player === 2 && computer === 1) {
        return 'win';
    } else if (player === 3 && computer === 2) {
        return 'win';
    }
}