import { gameboards} from "./gameboard";
import { player } from "./player";

let dom = (user) => {
    let userBoard = document.querySelector(`#${user}-board`);

    let renderBoard = () => {
        gameboards.board.forEach(cell => {
            cell.forEach(item => {
                let block = document.createElement('div');
                block.classList.add("block");

                    if (Number.isInteger(item)){
                        block.classList.add("ship")
                    }

                    if (item === "X"){
                        block.classList.add("hit")
                    }
                    if (item === "O"){
                        block.classList.add("miss")
                    }
                
                userBoard.appendChild(block);
                   
            })
        })
    }

    let clearBoard = () => {

        while (userBoard.firstChild) {
            userBoard.removeChild(userBoard.firstChild)
        }
    
    }
    
    let submitName = () => {
        let submitName = document.querySelector("#submit-name");
        let playerInput = document.querySelector("#input-name")

        submitName.addEventListener("click", () => {
            playerName.textContent = playerInput.value;
            document.querySelector("#name-prompt").style.visibility = "hidden";
        })
    }


   return {renderBoard, submitName, clearBoard}

};

export {dom}