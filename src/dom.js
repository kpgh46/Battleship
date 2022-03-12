import { gameboards} from "./gameboard";

let dom = (() => {

    let renderBoard = () => {
        gameboards.board.forEach(cell => {
            cell.forEach(item => {
                let block = document.createElement('div');
                block.classList.add("block");
                
                document.querySelector("#player-board").appendChild(block);
                   
            })
        })
        
    }
    
    let submitName = () => {
 
        document.querySelector("#submit-name").addEventListener("click", () =>{
            document.querySelector("#name-prompt").style.visibility = "hidden";
            
        })
    
    }

    submitName();
    renderBoard();

   return {renderBoard}

})();

export {dom}