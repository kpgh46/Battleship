import { gameboards} from "./gameboard";

let dom = (() => {

    let renderBoard = () => {

        window.addEventListener("load", () => {
            gameboards.board.forEach(cell => {
                cell.forEach(item => {
                    let block = document.createElement('div');
                    block.classList.add("block");
                    
                    document.querySelector("#player-board").appendChild(block);
                })
            })
        })

    }

    return { renderBoard }

})()

export {dom}