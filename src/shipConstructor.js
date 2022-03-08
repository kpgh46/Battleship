
let newShip = (numberSize, name) => {
    let sunk = false;
    let len = numberSize;
    let currentState = [];

    for (let i = 0; i < len; i++){
        currentState.push("X");
    }

    let isSunk = () => {
        console.log("This ship is sunk");
    }

    let checkCurrentState = (value) => {
        return value === "O"
    }

    let checkIfSunk = () => {
        if (currentState.every(checkCurrentState)){
            sunk = true;
            isSunk();
            return sunk;
        }
    }

    let hit = (index) => {
        currentState[index] = "O";
        return currentState;
        checkIfSunk();
    };

    return { len, currentState, hit, checkIfSunk, name};
} 

module.exports = newShip;