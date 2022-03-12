let newShip = require('./shipConstructor');
import {player} from "./player"

let gameboards = (() => {

    let board = [
        [" "," "," "," "," "," "," "," "," "," "],
        [" "," "," "," "," "," "," "," "," "," "],
        [" "," "," "," "," "," "," "," "," "," "],
        [" "," "," "," "," "," "," "," "," "," "],
        [" "," "," "," "," "," "," "," "," "," "],
        [" "," "," "," "," "," "," "," "," "," "],
        [" "," "," "," "," "," "," "," "," "," "],
        [" "," "," "," "," "," "," "," "," "," "],
        [" "," "," "," "," "," "," "," "," "," "],
        [" "," "," "," "," "," "," "," "," "," "]
        ]

    let shipTypes = [
        // {"name" : "carrier","len" : 5},
        {"name" : "battleship", "len" : 4},
        {"name" : "cruiser","len" : 3},
        // {"name" : "submarine","len" : 3},
        {"name" : "destroyer", "len" : 2}
        ]

    let shipInPlay = [];
    let shipOutPlay = [];
    let horizontal = true;

    //create ships and add to "shipsInPlay"
    let createShips = () => {
        shipTypes.forEach(shiptype => {
            let ship = newShip(shiptype.len,shiptype.name)
            shipInPlay.push(ship);
        })
    }

    //place ships on board
    let placeShips = () => {
        createShips();

       shipInPlay.forEach((ship,index) => {
           let x = index;
           let y = ship.len;
           
           for (let i = 0; i < ship.len; i++){
            horizontal ? board[x][y+i] = index : board[x+i][y] = index;
           }
       })
       console.log(board)
    };

    //remove ship from play
    let removeFromPlay = (index) => {
        shipOutPlay.push(shipInPlay[index])
    }

    let checkGameOver = () => {
        if (shipInPlay.length === shipOutPlay.length){
            console.log("game over")
        }
    }

    //revieve attack and evaluate if hit
    let receieveAttack = (x,y) => {
        let attack = board[x][y];

        if (Number.isInteger(attack)){
            board[x][y] = "X";
            shipInPlay[attack].hit();

            if(shipInPlay[attack].isSunk()){
                removeFromPlay(attack);
                checkGameOver();
            }

        }  else {
            board[x][y] = "O";
        }

        console.log(board)
    }
    
     return {board, receieveAttack}
})()

export {gameboards}