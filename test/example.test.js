// IMPORT MODULES under test here:
import { getRandomThrow, checkResult } from '../gameUtils.js';

const test = QUnit.test;

test('compare 2 draws and return if the player won, lost or tied the computer', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const player1 = 1;
    const computer1 = 1;
    const expected1 = 'draw';
    const player2 = 2;
    const computer2 = 2;
    const expected2 = 'draw';
    const player3 = 3;
    const computer3 = 3;
    const expected3 = 'draw';
    const player4 = 1;
    const computer4 = 2;
    const expected4 = 'lose';
    const player5 = 2;
    const computer5 = 3;
    const expected5 = 'lose';
    const player6 = 3;
    const computer6 = 1;
    const expected6 = 'lose';
    const player7 = 1;
    const computer7 = 3;
    const expected7 = 'win';
    const player8 = 2;
    const computer8 = 1;
    const expected8 = 'win';
    const player9 = 3;
    const computer9 = 2;
    const expected9 = 'win';
    
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual1 = checkResult(player1, computer1);
    const actual2 = checkResult(player2, computer2);
    const actual3 = checkResult(player3, computer3);
    const actual4 = checkResult(player4, computer4);
    const actual5 = checkResult(player5, computer5);
    const actual6 = checkResult(player6, computer6);
    const actual7 = checkResult(player7, computer7);
    const actual8 = checkResult(player8, computer8);
    const actual9 = checkResult(player9, computer9);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual1, expected1);
    expect.equal(actual2, expected2);
    expect.equal(actual3, expected3);
    expect.equal(actual4, expected4);
    expect.equal(actual5, expected5);
    expect.equal(actual6, expected6);
    expect.equal(actual7, expected7);
    expect.equal(actual8, expected8);
    expect.equal(actual9, expected9);
});

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const param = getRandomThrow();
    const expected = 'number';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = typeof param;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
