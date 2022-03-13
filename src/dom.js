import { gameboards} from "./gameboard";

let dom = (() => {

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
                
                document.querySelector("#player-board").appendChild(block);
                   
            })
        })
    }
    
    let submitName = () => {
        let submitName = document.querySelector("#submit-name");
        let playerName = document.querySelector("#name");
        let playerInput = document.querySelector("#input-name")

        submitName.addEventListener("click", () => {
            playerName.textContent = playerInput.value;
            document.querySelector("#name-prompt").style.visibility = "hidden";
        })
    }

    submitName();
    renderBoard();

   return {renderBoard, submitName}

})();

export {dom}