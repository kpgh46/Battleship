import { userPlayer, computerPlayer } from "./player";
import { dom } from "./dom";
import {gameboards} from "./gameboard";

let gameController = (() => {
    let players = [];
    let boards = [];

    let player = userPlayer("Kevin");
    let computer = computerPlayer("Watson");

    let playerBoard = gameboards("player");
    let computerBoard = gameboards("computer");

    boards.push(playerBoard,computerBoard);

    boards[0].board[1][2] = "P";

    boards[1].board[2][6] = "W";

    player.attack(1,2,1,boards);
    

    console.log(boards[0].board);
    console.log(boards[1].board);

    



 
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