// const element = document.createElement('h1')
// element.innerText = 'Dieghoatc'
// const container = document.getElementById('app')
// container.appendChild(element)

import React from "react";
import ReactDOM from "react-dom";

// const element = <h1>Dieghoatc</h1>;
const sum = () => 8 * 9;
function resta() {
  return 9 - 1;
}
const name = "Dieghoatc";
const jsx = <h1>Hola soy, {resta()}</h1>;
const jsxx = (
  <div>
    <h1>Hola, soy Diego</h1>
    <p>Soy ingeniero Fronted</p>
  </div>
);
const container = document.getElementById("app");

//render optiene dos argumentos(El que, y el donde)
ReactDOM.render(jsxx, container);
