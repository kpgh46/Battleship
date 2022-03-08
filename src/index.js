import './style.css';
let newShip = require("./shipConstructor");
import {gameboards} from "./gameboard"

let hi = document.querySelector("#test");
hi.textContent = "bye";

let render = () => {
    gameboards.placeShip(gameboards.smallShip.len,7,1);
    gameboards.placeShip(gameboards.mediumShip.len,1,5);
    gameboards.placeShip(gameboards.largeShip.len,2,2);


    console.log(gameboards.board)
}

render();
