import './style.css';
let newShip = require("./shipConstructor");
import {gameboards} from "./gameboard"

let hi = document.querySelector("#test");
hi.textContent = "bye";


gameboards.createShips();
console.log(gameboards.board)
