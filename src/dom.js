import { gameboards} from "./gameboard";
import { player } from "./player";

let dom = (playerBoard) => {
    let userBoard = document.querySelector(`#${playerBoard.boardName}-board`);

    let renderBoard = () => {
        let count = 0;
        playerBoard.board.forEach(cell => {
            cell.forEach(item => {
                let block = document.createElement('div');
                block.classList.add("block");
                block.dataset.id = count;
                count += 1;

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

    document.addEventListener("click", (el) => {
        if(el.target.classList.contains("block")){
            let value = el.target.dataset.id.toString().split("")
            console.log(value)
        }
    })

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