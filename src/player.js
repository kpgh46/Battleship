import { gameboards } from "./gameboard";

let player = (name) => {
	let attack = (x, y) => {
		if (gameboards.board[x][y] === "X" || gameboards.board[x][y] === "O") {
			console.log("this space is already taken");
		} else {
			gameboards.receieveAttack(x, y);
		}
	};

	return { attack, name };
};

let computer = () => {
	let attack = (x) => {
		x = Math.floor(Math.random() * 11);

		if (gameboards.board[x][y] === "X" || gameboards.board[x][y] === "O") {
			console.log("this space is already taken");
		} else {
			gameboards.receieveAttack(x, x);
		}
	};

	return { attack };
};

export { player, computer };
