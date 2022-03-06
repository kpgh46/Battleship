import './style.css';
let newShip = require("./shipConstructor");

let hi = document.querySelector("#test");
hi.textContent = "hi";

let ship = newShip(5);
console.log(ship.currentState)