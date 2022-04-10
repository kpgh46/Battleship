import { gameboards } from "./gameboard";

let dom = (userBoard) => {
	let gameboard = document.querySelector(`#${userBoard.name}-board`);

	let renderBoard = () => {
		showSunkShips();
		if (gameboard != null) {
			clearBoard(gameboard);
		}

		let count = 0;

		userBoard.board.forEach((cell) => {
			cell.forEach((item) => {
				let block = document.createElement("div");
				block.classList.add("block");
				if (count < 10) {
					block.dataset.id = count.toString().padStart(2, "0");
					block.dataset.name = userBoard.name;
					count += 1;
				} else {
					block.dataset.id = count.toString();
					block.dataset.name = userBoard.name;
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

	let capitalize = (string) => {
		return string.charAt(0).toUpperCase() + string.slice(1);
	};

	let showSunkShips = () => {
		let sunkShips = userBoard.shipsOutPlay;
		let container = document.getElementById(`${userBoard.name}-sunk-ships`);

		clearBoard(container);

		sunkShips.forEach((ship) => {
			let div = document.createElement("div");
			let name = capitalize(ship.name);
			div.textContent = name;
			container.appendChild(div);
		});
	};

	let clearBoard = (section) => {
		while (section.firstChild) {
			section.removeChild(section.firstChild);
		}
	};

	return { renderBoard };
};

export { dom };
