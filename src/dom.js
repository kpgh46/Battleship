import { gameboards } from "./gameboard";

let dom = (userBoard) => {
	let gameboard = document.querySelector(`#${userBoard.name}-board`);

	let renderBoard = () => {
		if (gameboard != null) {
			clearBoard();
		}

		let count = 0;

		userBoard.board.forEach((cell) => {
			cell.forEach((item) => {
				let block = document.createElement("div");
				block.classList.add("block");
				if (count < 10) {
					block.dataset.id = count.toString().padStart(2, "0");
					count += 1;
				} else {
					block.dataset.id = count.toString();
					count += 1;
				}

				if (Number.isInteger(item)) {
					block.classList.add("ship");
				}

				if (item === "X") {
					block.classList.add("hit");
				}
				if (item === "O") {
					block.classList.add("miss");
				}

				gameboard.appendChild(block);
			});
		});
	};

	let clearBoard = () => {
		while (gameboard.firstChild) {
			gameboard.removeChild(gameboard.firstChild);
		}
	};

	return { renderBoard };
};

export { dom };
