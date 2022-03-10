
let newShip = (numberSize, name) => {

    let len = numberSize;
    let numberHit = 0;

    let isSunk = () => {
        console.log(`${name} has sunk!!!`);
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

    return { len, hit, checkIfSunk, name };
} 

module.exports = newShip;