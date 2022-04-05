let newShip = require("./shipConstructor");
import { player } from "./player";

let gameboards = (name) => {
	let boardName = name;
	let shipCount = 0;

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
		document.querySelector(".direction").addEventListener("click", (e) => {
			e.target.innerHTML === "Vertical"
				? (e.target.innerHTML = "Horizontal")
				: (e.target.innerHTML = "Vertical");

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

	//validates coordinates do not go exceed board limit
	let validateLength = (coordinate, len) => {
		let max = 10 - len;
		if (coordinate > max) {
			return false;
		} else {
			return true;
		}
	};

	// let checkIfEmpty = (arr) => {
	// 	arr.every((space) => space === "true");
	// };

	//validates ship coords do not overlap another ship
	let validateOverlap = (x, y, len) => {
		let arr = [];

		if (horizontal) {
			for (let i = 0; i < len; i++) {
				arr.push(board[x][y + i]);
			}
		}

		if (!horizontal) {
			for (let i = 0; i < len; i++) {
				arr.push(board[x + i][y]);
			}
		}

		let result = arr.every((space) => {
			return space === " ";
		});

		return result;
	};

	//places ships on board and adds to "ShipsInPlay"
	let placeShips = () => {
		let ship = shipsNotPlaced[0];
		let x = parseInt(ship.x);
		let y = parseInt(ship.y);
		let len = shipsNotPlaced[0].len;
		let validateHorizontal = validateLength(y, len);
		let validateVertical = validateLength(x, len);

		//if horizontal, check if y coord is too large OR if it overlaps.  If either return false, exit the function.
		if (horizontal) {
			if (!validateHorizontal) {
				return;
			}
		}

		if (!horizontal) {
			if (!validateVertical) {
				return;
			}
		}

		if (!validateOverlap(x, y, len)) {
			return;
		}

		for (let i = 0; i < ship.len; i++) {
			if (horizontal) {
				board[x][y + i] = shipCount;
				document.getElementById(`${ship.name}`).classList.add("hidden");
			}
			if (!horizontal) {
				board[x + i][y] = shipCount;
				document.getElementById(`${ship.name}`).classList.add("hidden");
			}
		}

		shipsNotPlaced.splice(0, 1);
		shipsInPlay.push(ship);
		shipCount++;
	};

	createGameShips();
	toggleDirection();

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
