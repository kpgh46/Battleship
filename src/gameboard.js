let newShip = require('./shipConstructor')

let gameboards = (() => {

    let smallShip = newShip(2)
    let mediumShip = newShip(3)
    let largeShip = newShip(5);

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

    let placeShip = (len, x, y) => {
        
        for (let i = 0; i < len; i++){
            if (horizontal){
                board[x][y+i] = "X"; 
            }else {
                board[x+i][y] = "X"; 
            }
        }
    }

    let receiveAttack = (x,y) => {
        if (board[x][y] === "X"){
            
        }
    }

     
     return {board, placeShip, smallShip,mediumShip,largeShip}
})()

export {gameboards}