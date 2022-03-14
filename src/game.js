import { userPlayer, computerPlayer } from "./player";
import { dom } from "./dom"

let gameController = (() => {
    let playerOne = userPlayer("Kevin");
    let computerOne = computerPlayer("Watson")

    dom.renderBoard();

    console.log(playerOne);

   


    dom.clearBoard();

    playerOne.attack(1,2);

    dom.renderBoard();
    




})()

export {gameController}