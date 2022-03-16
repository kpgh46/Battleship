import { userPlayer, computerPlayer } from "./player";
import { dom } from "./dom";
import {gameboards} from "./gameboard";

let gameController = (() => {
    let players = [];
  
    let playerBoard = gameboards("player");
    let computerBoard = gameboards("computer");

    let player = userPlayer("Kevin", computerBoard);
    let computer = computerPlayer("Watson");


    player.attack(1,2)
    player.attack(1,3)
    player.attack(1,4)
    player.attack(6,4)
    player.attack(1,3)
    player.attack(9,9)
    



 
    // let playerBoard = dom("player").renderBoard();
    // let computerBoard = dom("computer").renderBoard();

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