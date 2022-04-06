import { player, computer } from "./player";
import { gameboards } from "./gameboard";

let gameSetup = () => {
	let submitCoordsArr = [
		"carrier",
		"battleship",
		// "submarine",
		// "cruiser",
		// "destroyer",
	];

	let playerOne = player("Kevin");
	let computerOne = computer();

	let playerGameBoard = gameboards(playerOne.name);

	let readyToPlay = () => {
		if ((playerGameBoard.shipsInPlay.length = 2)) {
			console.log("ready!");
		}
	};

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

			console.log(playerGameBoard);
			console.log(playerGameBoard.shipsNotPlaced);
			console.log(playerGameBoard.shipsInPlay.length);
		});
	});

	readyToPlay();
};

export { gameSetup };
