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
                if(count < 10){
                    block.dataset.id = count.toString().padStart(2, "0");
                    count +=1;
                } else{
                    block.dataset.id = count.toString();
                    count += 1;
                }

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

    // let playerName = () => {
    //     let submitName = document.querySelector("#submit-name");
        
    //     submitName.addEventListener("click", () => {
    //         let playerInput = document.getElementById("input-name").value;
    //         document.getElementById("name").textContent = playerInput;
    //         document.querySelector("#name-prompt").style.visibility = "hidden";
    //     })

    // }

    let clearBoard = () => {

        while (userBoard.firstChild) {
            userBoard.removeChild(userBoard.firstChild)
        }
    
    }
    
    // playerName();


   return {renderBoard, clearBoard}

};

export {dom}