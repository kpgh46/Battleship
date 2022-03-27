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

    let generateRandom = (len) => {
        let num = 10 - len;
        return Math.floor(Math.random() * num);
    }

    let shipTypes = [
        {"name" : "carrier","len" : 5, "x" : Math.floor(Math.random() * 10), "y": generateRandom(5)},
        {"name" : "battleship", "len" : 4, "x" : Math.floor(Math.random() * 10), "y": generateRandom(4)},
        {"name" : "cruiser","len" : 3, "x" : Math.floor(Math.random() * 10), "y": generateRandom(3)},
        {"name" : "submarine","len" : 3, "x" : Math.floor(Math.random() * 10), "y": generateRandom(3)},
        {"name" : "destroyer", "len" : 2, "x" : Math.floor(Math.random() * 10), "y": generateRandom(2)}
        ]



    let noOverlap = (ship) => {
        let arrX = []
        ship.forEach(item => arrX.push(item.x));
        let unique = [...new Set(arrX)];
        

        if (arrX.length === unique.length){
            return true;
        }else {
            return false;
        }

    }

    let regenerateNumbers = (ship) => {
        console.log("test")
        ship.forEach(coord => {
            coord.x = Math.floor(Math.random() * 10)
        })
        
    }



    let verifyShipPlacement = (value, len) => {
        let num = 10 - len;
        return num < value ? false : true
    
    }

    let updateShipTypes = () => {

        shipTypes.forEach(ship => {
           let xVal = document.getElementById(`${ship.name}`).value; 
           let yVal = document.getElementById(`${ship.name}Y`).value;
           ship.x = xVal;

            if (verifyShipPlacement(yVal,ship.len)){
                    ship.y = yVal
            }else{
                console.log("does not work!")
            }
        })
    }
    
    
    //create ships and add to "shipsInPlay"
    let createShips = (typesOfShips) => {
        let shipsArr = [];

        typesOfShips.forEach(shiptype => {
            let ship = newShip(shiptype.len,shiptype.name,shiptype.x,shiptype.y);
            shipsArr.push(ship);
        })

        return shipsArr;
    }

    let shipsInPlay;
    let shipsOutPlay = [];
    let horizontal = true;

    //place ships on board
    let placeShips = () => {
        
        console.log(shipsInPlay)

        while(noOverlap(shipTypes) === false){
            regenerateNumbers(shipTypes)
            console.log("duplicates")
        }

        shipsInPlay = createShips(shipTypes);
        
        shipsInPlay.forEach((ship,index) => {
           let x = parseInt(ship.x);
           let y = parseInt(ship.y);
           let num = Math.round(Math.random());

        //    if (num === 1){horizontal = true}else{horizontal = false}

           
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
    
     return {board, receieveAttack, boardName, shipTypes, updateShipTypes, placeShips, noOverlap}

};

export {gameboards}