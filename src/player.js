import { gameboards } from "./gameboard";

let player = (name, enemyBoard) => {
	let attack = (x, y) => {
		if (enemyBoard.board[x][y] === "X" || enemyBoard.board[x][y] === "O") {
			document.getElementById("error").textContent =
				"space is already taken";
			setTimeout(() => {
				document.getElementById("error").textContent = " ";
			}, 1250);

			attack();
		} else {
			enemyBoard.receieveAttack(x, y);
		}
	};

	return { attack, name };
};

let computer = (name, enemyBoard) => {
	let attack = () => {
		let x = Math.floor(Math.random() * 10);
		let y = Math.floor(Math.random() * 10);

		if (enemyBoard.board[x][y] === "X" || enemyBoard.board[x][y] === "O") {
			console.log("this space is already taken");
		} else {
			enemyBoard.receieveAttack(x, y);
		}
	};

	return { name, attack };
};

export { player, computer };
