import { userPlayer, computerPlayer } from "./player";
import { dom } from "./dom";
import {gameboards} from "./gameboard";

let gameController = (() => {
    let players = [];
    let active = players[0];
  
    let playerBoard = gameboards("player");
    let computerBoard = gameboards("computer");

    let player = userPlayer("Kevin", computerBoard);
    let computer = computerPlayer("Watson", playerBoard);
    players.push(player,computer)
    

    dom(playerBoard).renderBoard();
    dom(computerBoard).renderBoard();

    document.addEventListener("click", (el) => {
    if(el.target.classList.contains("block")){
        let value = el.target.dataset.id.toString().split("")
        player.attack(value[0], value[1])
        dom(computerBoard).clearBoard();
        dom(computerBoard).renderBoard();
        computer.attack();
        dom(playerBoard).clearBoard();
        
        dom(playerBoard).renderBoard();
        


    }
    })


})()

export {gameController}