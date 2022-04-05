let newShip = require("./shipConstructor");
import { player } from "./player";

let gameboards = (name) => {
	let boardName = name;

	let board = [
		[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
		[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
		[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
		[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
		[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
		[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
		[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
		[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
		[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
		[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	];

	let shipTypes = [
		{
			name: "carrier",
			len: 5,
			x: 0,
			y: 1,
		},
		{
			name: "battleship",
			len: 4,
			x: 2,
			y: 6,
		},
		{
			name: "cruiser",
			len: 3,
			x: 4,
			y: 4,
		},
		{
			name: "submarine",
			len: 3,
			x: 7,
			y: 0,
		},
		{
			name: "destroyer",
			len: 2,
			x: 8,
			y: 6,
		},
	];

	let shipsNotPlaced = [];
	let shipsInPlay = [];
	let shipsOutPlay = [];
	let horizontal = true;

	let toggleDirection = () => {
		document.querySelector("#direction").addEventListener("click", (e) => {
			e.target.classList.contains("on")
				? e.target.classList.remove("on")
				: e.target.classList.add("on");

			horizontal = !horizontal;
		});
	};

	//create ships and add to "shipsInPlay"
	let generateShips = (typesOfShips) => {
		typesOfShips.forEach((shiptype) => {
			let ship = newShip(
				shiptype.len,
				shiptype.name,
				shiptype.x,
				shiptype.y
			);
			shipsNotPlaced.push(ship);
		});
	};

	let createGameShips = () => generateShips(shipTypes);

	//check this:
	let checkGameOver = () => {
		if (shipsInPlay.length === shipsOutPlay.length) {
			console.log("game over");
		}
	};

	let removeFromPlay = (index) => {
		shipsOutPlay.push(shipsInPlay[index]);
	};

	//revieve attack and evaluate if hit
	let receieveAttack = (x, y) => {
		let attack = board[x][y];

		if (Number.isInteger(attack)) {
			board[x][y] = "X";
			shipsInPlay[attack].hit();

			if (shipsInPlay[attack].isSunk()) {
				removeFromPlay(attack);
				checkGameOver();
			}
		} else {
			board[x][y] = "O";
		}
	};

	//updates coords from GameSetup UI:
	let updateCoordinates = (xcoord, ycoord) => {
		shipsNotPlaced[0].x = xcoord;
		shipsNotPlaced[0].y = ycoord;
	};

	let validateCoordinates = (coordinate, len) => {
		let max = 10 - len;
		if (coordinate > max) {
			return false;
		} else {
			return true;
		}
	};

	//places ships on board and adds to "ShipsInPlay"
	let placeShips = () => {
		let ship = shipsNotPlaced[0];
		let x = parseInt(ship.x);
		let y = parseInt(ship.y);
		let len = shipsNotPlaced[0].len;
		let validateHorizontal = validateCoordinates(y, len);
		let validateVertical = validateCoordinates(x, len);

		if (horizontal && !validateHorizontal) {
			return;
		}

		if (!horizontal && !validateVertical) {
			return;
		}

		for (let i = 0; i < ship.len; i++) {
			if (horizontal && validateHorizontal) {
				board[x][y + i] = "X";
				document.getElementById(`${ship.name}`).classList.add("hidden");
			}
			if (!horizontal && validateVertical) {
				board[x + i][y] = "X";
				document.getElementById(`${ship.name}`).classList.add("hidden");
			}
		}

		shipsNotPlaced.splice(0, 1);
		shipsInPlay.push(ship);
	};

	createGameShips();

	return {
		board,
		receieveAttack,
		createGameShips,
		boardName,
		shipTypes,
		placeShips,
		shipsNotPlaced,
		shipsInPlay,
		updateCoordinates,
		toggleDirection,
	};
};

export { gameboards };
