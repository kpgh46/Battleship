import { player, computer } from "./player";
import { gameboards } from "./gameboard";

let playerSetup = () => {
	let submitCoordsArr = [
		"carrier",
		"battleship",
		// "submarine",
		// "cruiser",
		// "destroyer",
	];

	//initiate player gameboard
	let playerGameBoard = gameboards();

	let ifAllShipsPlaced = () => {
		if (playerGameBoard.shipsInPlay.length === 2) {
			console.log("ready!");
			computerSetup(playerGameBoard);
		}
	};

	//event listeners to capture player coordinates.  Once complete
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
			ifAllShipsPlaced();
		});
	});

	return { playerGameBoard };
};

let computerSetup = (playerboard) => {
	let computerGameBoard = gameboards();

	for (let i = 0; i < 5; i++) {
		computerGameBoard.placeShips();
	}

	playRound(playerboard, computerGameBoard);

	return { computerGameBoard };
};

let playRound = (playerboard, computerboard) => {
	let playerOne = player("Kevin", computerboard);
	let computerOne = computer("Watson", playerboard);

	console.log(playerOne);
	console.log(computerOne);
	computerOne.attack();
	playerOne.attack(2, 3);
	playerOne.attack(7, 2);
	computerOne.attack();
	computerOne.attack();
	console.log(playerboard);
	console.log(computerboard);
};

export { playerSetup };
