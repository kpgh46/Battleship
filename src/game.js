import { userPlayer, computerPlayer } from "./player";
import { dom } from "./dom";
import {gameboards} from "./gameboard";

let gameController = (() => {
    //setupGame
    let turn = 0;
    let players = [];
    let boards = [];
    let active = players[0];
  
    let playerBoard = gameboards("player");
    let computerBoard = gameboards("computer");
    boards.push(playerBoard,computerBoard)

    let player = userPlayer("Kevin", computerBoard);
    let computer = computerPlayer("Watson", playerBoard);
    players.push(player,computer);
    
    dom(playerBoard).renderBoard();
    // dom(computerBoard).renderBoard();
    // dom(playerBoard).ships();
    //

    let toggle = () => {
        turn = turn === 0 ? 1 : 0;
    }

    let updateGame = () => {
        dom(boards[turn]).clearBoard();
        dom(boards[turn]).renderBoard();
        active = players[turn]
    };

    let computerSelection = () => {
        setTimeout(() => {
            computer.attack();
            toggle();
            updateGame();
        }, 750)
    }

    let playerSelection = () => {
        document.addEventListener("click", (el) => {
            if(el.target.classList.contains("block")){
                let value = el.target.dataset.id.toString().split("");  
                player.attack(Number.parseInt(value[0]), Number.parseInt(value[1]))
                toggle();
                updateGame();
                computerSelection();
            }
        })
    
    };

    let playRound = () => {
        playerSelection();
    }

    playRound();

})()

export {gameController}