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
        {"name" : "carrier","len" : 5},
        {"name" : "battleship", "len" : 4},
        {"name" : "cruiser","len" : 3},
        {"name" : "submarine","len" : 3},
        {"name" : "destroyer", "len" : 2}
        ]

    let shipInPlay = [];
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

               if(horizontal) {
               board[x][y+i] = index;
               } 

               if(!horizontal){
                board[x+i][y] = index;
               }
           }
       })
    };

    //remove ship from play
    let removeFromPlay = (index) => {
        shipInPlay.splice(index, 1);
    }

    //revieve attack and evaluate if hit
    let receieveAttack = (x,y) => {
        let attack = board[x][y];

        if (Number.isInteger(attack)){
            board[x][y] = "X";
            shipInPlay[attack].hit();

            if(shipInPlay[attack].isSunk()){
                removeFromPlay(attack);
            }

        }  else {
            board[x][y] = "O";
        }
    }

    let startGame = () => {
        placeShips();
    }

    startGame();
    // receieveAttack(6,4)
    // receieveAttack(6,5)
    // receieveAttack(6,6)
    // receieveAttack(6,7)
    // receieveAttack(2,3)
    // receieveAttack(6,1)
    // receieveAttack(0,2)
    // receieveAttack(0,3)
    
    console.log(board)
    
     return {board}
})()

export {gameboards}