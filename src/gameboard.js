let newShip = require('./shipConstructor')

let gameboards = (() => {

    let ships = [
        ["destroyer",2,0,2],
        ["cruiser",3, 2,3],
        ["submarine",3, 3,3],
        ["battleship",4, 4,4],
        ["carrier",5,7, 5]
        ]
    let coords = [
        [0,2],
        [2,3],
        [3,3],
        [4,4],
        [7,5]
    ]
    let shipInPlay = [];
    let horizontal = true;

    let board = [
    [" "," "," ", " ", " ", " "," "," "," ", " "],
    [" "," "," ", " ", " ", " "," "," "," ", " "],
    [" "," "," ", " ", " ", " "," "," "," ", " "],
    [" "," "," ", " ", " ", " "," "," "," ", " "],
    [" "," "," ", " ", " ", " "," "," "," ", " "],
    [" "," "," ", " ", " ", " "," "," "," ", " "],
    [" "," "," ", " ", " ", " "," "," "," ", " "],
    [" "," "," ", " ", " ", " "," "," "," ", " "],
    [" "," "," ", " ", " ", " "," "," "," ", " "],
    [" "," "," ", " ", " ", " "," "," "," ", " "]
    ]

    let placeShip = (x,y,len) => {

        for (let i = 0; i < len; i++){
            board[x][y] = "X";
            y++;
        }
    }

    let createShips = () => {
        for (let i = 0; i < ships.length; i++){
            let createNewShip = newShip(ships[i][1],ships[i][0]);
            let x = coords[i][0];
            let y = coords[i][1];
            placeShip(x,y,createNewShip.len);
        }

    }


     
     return {board, createShips}
})()

export {gameboards}