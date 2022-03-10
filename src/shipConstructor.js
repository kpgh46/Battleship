
let newShip = (numberSize, name) => {
    let sunk = false;
    let len = numberSize;
    let numberHit = 0;

    let isSunk = () => {
        sunk = true;
        console.log(`${name} has sunk!!!`);
        return sunk;
    }

    let checkIfSunk = () => {
        if (numberHit === len){
            isSunk();
        }
    }

    let hit = () => {
        numberHit++
        checkIfSunk();
    };

    return { len, hit, checkIfSunk, name, sunk };
} 

module.exports = newShip;