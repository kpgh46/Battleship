import { player, computer } from "./player";
import { gameboards } from "./gameboard";

let gameSetup = () => {
	let submitCarrier = document.querySelector("#submitCarrier");
	let carrierXValue = document.querySelector("#carrierx");
	let carrierYValue = document.querySelector("#carriery");

	let submitBattleship = document.querySelector("#submitBattleship");
	let battleshipXValue = document.querySelector("#battleshipx");
	let battleshipYValue = document.querySelector("#battleshipy");

	let playerOne = player("Kevin");
	let computerOne = computer();

	let playerGameBoard = gameboards(playerOne.name);

	// playerGameBoard.toggleDirection();

	submitCarrier.addEventListener("click", () => {
		playerGameBoard.updateCoordinates(
			parseInt(carrierXValue.value),
			parseInt(carrierYValue.value)
		);
		playerGameBoard.placeShips();
		console.log(playerGameBoard);
		console.log(playerGameBoard.shipsNotPlaced);
		console.log(playerGameBoard.shipsInPlay);
	});

	// playerGameBoard.toggleDirection();

	submitBattleship.addEventListener("click", () => {
		playerGameBoard.updateCoordinates(
			parseInt(battleshipXValue.value),
			parseInt(battleshipYValue.value)
		);
		playerGameBoard.placeShips();
		console.log(playerGameBoard);
		console.log(playerGameBoard.shipsNotPlaced);
		console.log(playerGameBoard.shipsInPlay);
	});
};

export { gameSetup };
