import "./style.css";
let newShip = require("./shipConstructor");
import { gameboards } from "./gameboard";
import { dom } from "./dom";
import { gameController } from "./game";

let dragShips = () => {
	let draggableShips = document.querySelectorAll(".ship-start");
	let dropZone = document.querySelectorAll(".game-cells");

	draggableShips.forEach((ship) => {
		ship.addEventListener("dragstart", () => {
			ship.classList.add("dragging");
		});

		ship.addEventListener("dragend", () => {
			ship.classList.remove("dragging");
		});
	});

	dropZone.forEach((zone) => {
		zone.addEventListener("dragover", (e) => {
			e.preventDefault();
			let draggable = document.querySelector(".dragging");
			zone.append(draggable);
		});
	});
};
dom.ships();
dragShips();
