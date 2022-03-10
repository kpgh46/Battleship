let newShip = require('./shipConstructor')

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
        // {"name" : "battleship", "len" : 4},
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
    }

    let startGame = () => {
        placeShips();
    }

    startGame();
    // receieveAttack(0,3)
    // receieveAttack(0,4)
    // receieveAttack(0,5)
    // receieveAttack(1,2)
    // receieveAttack(1,3)

    // receieveAttack(1,2)
    // receieveAttack(0,2)
    // receieveAttack(0,3)
    
    console.log(board)
    
     return {board}
})()

export {gameboards}