import { player, computer } from "./player";
import { gameboards } from "./gameboard";
import { dom } from "./dom";

let playerSetup = () => {
	let submitCoordsArr = [
		"carrier",
		"battleship",
		// "submarine",
		// "cruiser",
		// "destroyer",
	];

	//initiate player gameboard
	let playerGameBoard = gameboards("player");

	let ifAllShipsPlaced = () => {
		if (playerGameBoard.shipsInPlay.length === 2) {
			console.log("ready!");
			computerSetup(playerGameBoard);
		}
	};

	//event listeners to capture player coordinates.
	submitCoordsArr.forEach((ship) => {
		let submitButton = document.getElementById(`submit${ship}`);
		let shipX = document.getElementById(`${ship}x`);
		let shipY = document.getElementById(`${ship}y`);

		submitButton.addEventListener("click", () => {
			playerGameBoard.updateCoordinates(
				parseInt(shipX.value),
				parseInt(shipY.value)
			);
			playerGameBoard.placeShips();
			dom(playerGameBoard).renderBoard();
			// ifAllShipsPlaced();
		});
	});

	return { playerGameBoard };
};

// create computer gameboard and add ships.
let computerSetup = (playerboard) => {
	let computerGameBoard = gameboards("computer");

	for (let i = 0; i < 5; i++) {
		computerGameBoard.placeShips();
	}

	playRound(playerboard, computerGameBoard);

	return { computerGameBoard };
};

let playRound = (playerboard, computerboard) => {
	//game control
	let turn = 0;
	let players = [];
	let active = players[0];

	//generate players with respective enemy boards
	let playerOne = player("Kevin", computerboard);
	let computerOne = computer("Watson", playerboard);
	player.push(playerOne, computerOne);

	// console.log(playerOne);
	// console.log(computerOne);
	// computerOne.attack();
	// playerOne.attack(2, 3);
	// playerOne.attack(7, 2);
	// computerOne.attack();
	// computerOne.attack();
	// console.log(playerboard);
	// console.log(computerboard);
};

export { playerSetup };
