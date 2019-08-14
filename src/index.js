// const element = document.createElement('h1')
// element.innerText = 'Dieghoatc'
// const container = document.getElementById('app')
// container.appendChild(element)

import React from "react";
import ReactDOM from "react-dom";

//npm install bootstrap
import "bootstrap/dist/css/bootstrap.css";
import Badge from "./components/Badge";

const container = document.getElementById("app");

//render optiene dos argumentos(El que, y el donde)
ReactDOM.render(<Badge />, container);
