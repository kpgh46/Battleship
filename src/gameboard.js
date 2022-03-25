let newShip = require('./shipConstructor');
import {player} from "./player"

let gameboards = (name) => {

    let boardName = name;

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
        {"name" : "carrier","len" : 5},
        {"name" : "battleship", "len" : 4},
        {"name" : "cruiser","len" : 3},
        {"name" : "submarine","len" : 3},
        {"name" : "destroyer", "len" : 2}
        ]

    
    //create ships and add to "shipsInPlay"
    let createShips = (typesOfShips) => {
        let shipsArr = [];

        typesOfShips.forEach(shiptype => {
            let ship = newShip(shiptype.len,shiptype.name)
            shipsArr.push(ship);
        })

        return shipsArr;
    }

    let shipsInPlay = createShips(shipTypes);
    let shipsOutPlay = [];
    let horizontal = true;

    //place ships on board
    let placeShips = () => {
        
        shipsInPlay.forEach((ship,index) => {
           let x = index;
           let y = ship.len;
           
           for (let i = 0; i < ship.len; i++){
                horizontal ? board[x][y+i] = index : board[x+i][y] = index;
           }
       })
    };

    //remove ship from play
    let removeFromPlay = (index) => {
        shipsOutPlay.push(shipsInPlay[index])
    }

    let checkGameOver = () => {
        if (shipsInPlay.length === shipsOutPlay.length){
            console.log("game over")
        }
    }

    //revieve attack and evaluate if hit
    let receieveAttack = (x,y) => {
        let attack = board[x][y];

        if (Number.isInteger(attack)){
            board[x][y] = "X";
            shipsInPlay[attack].hit();

            if(shipsInPlay[attack].isSunk()){
                removeFromPlay(attack);
                checkGameOver();
            }

        }  else {
            board[x][y] = "O";
        }

        console.log(board)
    }

    // placeShips();
    
     return {board, receieveAttack, boardName, shipTypes}

};

export {gameboards}