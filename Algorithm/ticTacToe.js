var utility = require('../Utility/utility');
const readline = require('readline-sync');

function ticTacToe() {
    var flag = false;
    var arr = utility.intializeGame();
    console.log("Player 1 : Computer, Symbole : O");
    console.log("Player 2 : You, Symbole : x");
    console.log("Winning isn't everything, but wanting to win is...");
    var count = 1;
    while (count <= 9) {
        arr = utility.computerPlayer(arr);
        count++;
        while (count > 4) {
            flag = utility.check(arr);
            break;
        }
        if (flag) {
            console.log("Computer is the winner. Better luck next time");
            break;
        }
        else if (count == 8) {
            console.log("Draw match..");
            break;
        }
        arr = utility.userPlayer(arr);
        while (count > 4) {
            flag = utility.check(arr);
            break;

        }
        if (flag) {
            console.log("You are the winner");
            break;
        }
        count++;
    }
    console.log("Game end");
}
ticTacToe();


