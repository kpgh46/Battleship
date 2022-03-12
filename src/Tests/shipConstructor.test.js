let newShip = require('../shipConstructor')

test('name of ship', () => {
    let ship = newShip(3, "battleship")

    expect(ship.name).toBe("battleship");
})

test('length of ship', () => {
    let ship = newShip(5);
    expect(ship.len).toBe(5)
})

test('is ship hit', () => {
    let ship = newShip(3,"kevinsShip");
    ship.hit();

    expect(ship.isSunk()).toBe(false);
})

test("is ship sunk", () => {
    let ship = newShip(2, "kevinsShip");
    ship.hit();
    ship.hit();

    expect(ship.isSunk()).toBe(true);
})

