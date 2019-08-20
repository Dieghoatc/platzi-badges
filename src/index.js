import React from "react";
import ReactDOM from "react-dom";

//npm install bootstrap
import App from "./components/App";
import "bootstrap/dist/css/bootstrap.css";

const container = document.getElementById("app");

//render optiene dos argumentos(El que, y el donde)
ReactDOM.render(<App />, container);
