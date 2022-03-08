let newShip = require('../shipConstructor')

test('length of ship', () => {
    let ship = newShip(5);
    expect(ship.len).toBe(5)
})

test('where ship has been hit', () => {
    let ship = newShip(5);
    // let testArr = ["X","X","O","O","X"]
    expect(ship.hit(2)).toEqual(expect.arrayContaining(["O"]));

})

test("is ship sunk", () => {
    let ship = newShip(3);
    ship.hit(0)
    ship.hit(1)
    ship.hit(2)

    expect(ship.checkIfSunk()).toBe(true);
})

