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
	dom(playerGameBoard).renderBoard();

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
			console.log(playerGameBoard.horizontal);
			dom(playerGameBoard).renderBoard();
			ifAllShipsPlaced();
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

	dom(computerGameBoard).renderBoard();

	playRound(playerboard, computerGameBoard);

	return { computerGameBoard };
};

let playRound = (playerboard, computerboard) => {
	//game control
	let game = true;
	let turn = 0;
	let players = [];
	let active = players[0];
	let boards = [computerboard, playerboard];

	//generate players with respective enemy boards
	let playerOne = player("Kevin", computerboard);
	let computerOne = computer("Watson", playerboard);
	players.push(playerOne, computerOne);

	//not sure I need this???*******
	let toggleTurn = () => {
		turn = turn === 0 ? 1 : 0;

		active = players[turn];

		if (active === players[1]) {
			computerSelection();
		}
	};

	let updateGame = () => {
		dom(boards[turn]).renderBoard();
		toggleTurn();
	};

	let computerSelection = () => {
		setTimeout(() => {
			computerOne.attack();
			updateGame();
		}, 750);
	};

	let playRound = () => {
		document.addEventListener("click", (e) => {
			if (e.target.dataset.name === "computer") {
				let coord = e.target.dataset.id;

				let x = parseInt(coord.split("")[0]);
				let y = parseInt(coord.split("")[1]);

				playerOne.attack(x, y);

				updateGame();
			}
		});
	};

	playRound();
};

export { playerSetup };
