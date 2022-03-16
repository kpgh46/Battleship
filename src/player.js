import {gameboards} from './gameboard'

let userPlayer = (name, computerBoard) => {

    let attack = (x,y) => {
        if (computerBoard.board[x][y] === "X" || computerBoard.board[x][y] === "O"){
            console.log("this space is already taken")
        } else {
        computerBoard.receieveAttack(x,y)
        }
    }

    return {attack, name}   

}

let computerPlayer = (name, playerBoard ) => {
    
    let attack = () => {
        let x = Math.floor(Math.random() * 9);
        let y = Math.floor(Math.random() * 9);

        if (playerBoard.board[x][y] === "X" || playerBoard.board[x][y] === "O"){
            console.log("this space is already taken")
        } else {
            playerBoard.receieveAttack(x,y)
        }
        
    }

    return {attack, name}
}

export {userPlayer, computerPlayer}