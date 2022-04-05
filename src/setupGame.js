import { player, computer } from "./player";
import { gameboards } from "./gameboard";

let gameSetup = () => {
	let submitCarrier = document.querySelector("#submitCarrier");
	let carrierXValue = document.querySelector("#carrierx");
	let carrierYValue = document.querySelector("#carriery");

	let playerOne = player("Kevin");
	let computerOne = computer();

	let playerGameBoard = gameboards(playerOne.name);
	// console.log(playerGameBoard.shipsNotPlaced[0]);
	// playerGameBoard.shipsNotPlaced[0].x = 7;
	// console.log(playerGameBoard.shipsNotPlaced);

	playerGameBoard.toggleDirection();

	submitCarrier.addEventListener("click", () => {
		playerGameBoard.updateCoordinates(
			carrierXValue.value,
			carrierYValue.value
		);
		playerGameBoard.placeShips();
		console.log(playerGameBoard);
		console.log(playerGameBoard.shipsNotPlaced);
		console.log(playerGameBoard.shipsInPlay);
		document.querySelector("#carrier").classList.add("hidden");
	});
};

export { gameSetup };
