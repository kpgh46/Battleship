import './style.css';
let newShip = require("./shipConstructor");
import {gameboards} from "./gameboard"



window.addEventListener("load", () => {
    gameboards.board.forEach(cell => {
        cell.forEach(item => {
        let block = document.createElement('div');
        block.classList.add("block");

        document.querySelector("#player-board").appendChild(block);
        })
    })
})

// let game = gameboards();
// gameboards.startGame();