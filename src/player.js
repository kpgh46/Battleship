import {gameboards} from './gameboard'

let userPlayer = (name) => {

    let attack = (x,y) => {
        if (gameboards.board[x][y] === "X" || gameboards.board[x][y] === "O"){
            console.log("this space is already taken")
        } else {
        gameboards.receieveAttack(x,y)
        }
    }

    return {attack, name}

}

let computerPlayer = (name) => {
    
    let attack = () => {
        let x = Math.floor(Math.random() * 11);
        let y = Math.floor(Math.random() * 11);

        if (gameboards.board[x][y] === "X" || gameboards.board[x][y] === "O"){
            console.log("this space is already taken")
        } else {
            gameboards.receieveAttack(x,y)
        }
        
    }

    return {attack, name}
}

export {userPlayer, computerPlayer}