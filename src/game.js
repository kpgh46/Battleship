import { userPlayer, computerPlayer } from "./player";
import { dom } from "./dom"

let gameController = (() => {
    let playerOne = userPlayer("Kevin");
    let computerOne = computerPlayer("Watson")

    // dom("player").renderBoard();
    // dom("computer").renderBoard();

    // console.log(playerOne);
    // console.log(computerOne);

   
    // dom("player").clearBoard();
    // dom("computer").clearBoard();

    // playerOne.attack(1,2);
    // computerOne.attack();

    // dom("player").renderBoard();
    // dom("computer").renderBoard();

    // computerOne.attack();
    // dom("computer").clearBoard();
    // dom("computer").renderBoard();
    




})()

export {gameController}