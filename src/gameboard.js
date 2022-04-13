let newShip = require("./shipConstructor");
import { player } from "./player";

let gameboards = (name) => {
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
			console.log(horizontal);
		});
	};

	//create ships and add to "shipsNotPlaced"
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
			return true;
		}
	};

	let removeFromPlay = (index) => {
		shipsOutPlay.push(shipsInPlay[index]);
	};

	let gameOver = () => {
		let winningDiv = document.querySelector("#gameover");
		let message = document.querySelector("#winning-message");
		winningDiv.style.visibility = "visible";

		message.innerHTML = `All of ${name}'s ships are sunk!`;
	};

	//revieve attack and evaluate if hit
	let receieveAttack = (x, y) => {
		let attack = board[x][y];

		if (Number.isInteger(attack)) {
			board[x][y] = "X";
			shipsInPlay[attack].hit();

			if (shipsInPlay[attack].isSunk()) {
				removeFromPlay(attack);
				if (checkGameOver()) {
					gameOver();
				}
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

	let invalidLengthFeedback = (name) => {
		let invalid = document.querySelector(`#${name} .placement-feedback`);
		invalid.textContent = "Ship exceeds board. Enter new coordinates";

		setTimeout(() => {
			invalid.textContent = " ";
		}, 4000);
	};

	let invalidOverlapFeedback = (name) => {
		let invalid = document.querySelector(`#${name} .placement-feedback`);
		invalid.textContent = "Overlaps another ship.  Enter new coordinates";

		setTimeout(() => {
			invalid.textContent = " ";
		}, 4000);
	};

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
		let random = Math.round(Math.random());

		if (name === "computer") {
			if (random === 1) {
				horizontal = true;
			}

			if (random === 0) {
				horizontal = false;
			}
		}

		//if horizontal, check if y coord is too large OR if it overlaps.  If either return false, exit the function.
		if (horizontal) {
			if (!validateHorizontal) {
				invalidLengthFeedback(ship.name);
				return;
			}
		}

		if (!horizontal) {
			if (!validateVertical) {
				invalidLengthFeedback(ship.name);
				return;
			}
		}
		//validate the current ship coordinates do not extend into another ship already on the board
		if (!validateOverlap(x, y, len)) {
			invalidOverlapFeedback(ship.name);
			return;
		}
		//if above is validated, place ship on board and hide the coordinate html box
		for (let i = 0; i < ship.len; i++) {
			if (horizontal) {
				board[x][y + i] = shipCount;
				if (document.getElementById(`${ship.name}`) != null) {
					document
						.getElementById(`${ship.name}`)
						.classList.add("hidden");
				}
			}
			if (!horizontal) {
				board[x + i][y] = shipCount;
				if (document.getElementById(`${ship.name}`) != null) {
					document
						.getElementById(`${ship.name}`)
						.classList.add("hidden");
				}
			}
		}

		//once ship is placed on board, remove from shipsNotPlaced and add too shipsInPlay. increment index (shipCount++)
		shipsNotPlaced.splice(0, 1);
		shipsInPlay.push(ship);
		shipCount++;
	};

	createGameShips();
	toggleDirection();

	return {
		board,
		receieveAttack,
		placeShips,
		shipsNotPlaced,
		shipsInPlay,
		shipsOutPlay,
		updateCoordinates,
		toggleDirection,
		name,
	};
};

export { gameboards };
