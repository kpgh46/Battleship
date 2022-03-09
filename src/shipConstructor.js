
let newShip = (numberSize, name) => {
    let sunk = false;
    let len = numberSize;
    let numberHit = 0;
    let currentState = [];

    for (let i = 0; i < len; i++){
        currentState.push("X");
    }

    let isSunk = () => {
        console.log(`${name} has sunk!!!`);
    }

    let checkCurrentState = (value) => {
        return value === "O";
    }

    let checkIfSunk = () => {
        console.log(numberHit)
        if (numberHit === len){
            console.log(sunk);
            sunk = true;
            isSunk();
            return sunk;
        }
    }

    let hit = () => {
        numberHit++
        checkIfSunk();
    };

    return { len, currentState, hit, checkIfSunk, name};
} 

module.exports = newShip;