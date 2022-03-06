let newShip = (numberSize) => {
    let sunk = false;
    let len = numberSize;
    let currentState = [];

    for (let i = 0; i < len; i++){
        currentState.push("X");
    }

    let hit = (index) => {
        currentState[index] = "O";
        return currentState;
    };

    let checkCurrentState = (value) => {
        return value === "O"
    }

    let isSunk = () => {
        if (currentState.every(checkCurrentState)){
            sunk = true;
            return sunk;
        }
    }

    return { len, currentState, hit, isSunk};
} 

module.exports = newShip;