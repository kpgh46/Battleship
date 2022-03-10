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
        {"name" : "destroyer", "len" : 2},
        {"name" : "cruiser","len" : 3},
        {"name" : "submarine","len" : 3},
        {"name" : "battleship", "len" : 4},
        {"name" : "carrier","len" : 5},
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
           let x = index * 2;
           let y = ship.len;
           
           for (let i = 0; i < ship.len; i++){
               board[x][y+i] = index;
           }
       })
    }

    //receive an attack.  Eval if hit.  If so, send to correct ship
    let receieveAttack = (x,y) => {
        let attack = board[x][y];

        if (Number.isInteger(attack)){
            board[x][y] = "X";
            shipInPlay[attack].hit();
        }  else {
            board[x][y] = "O";
        }
    }

    let startGame = () => {
        placeShips();
    }

    startGame();
    receieveAttack(6,4)
    receieveAttack(6,5)
    receieveAttack(6,6)
    receieveAttack(6,7)
    receieveAttack(2,3)
    receieveAttack(6,1)
    
    console.log(board)
    console.log(shipInPlay);


     return {board}
})()

export {gameboards}