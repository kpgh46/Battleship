
let newShip = (numberSize, name, x, y) => {

    let len = numberSize;
    let numberHit = 0;

    let isSunk = () => {

        if (numberHit === len){
            console.log(`${name} has sunk!`);
            return true;
        }else {
            return false;
        }
    }

    let hit = () => {
        numberHit++
        isSunk()
    };

    return { len, hit, name, isSunk, x, y };
} 

module.exports = newShip;