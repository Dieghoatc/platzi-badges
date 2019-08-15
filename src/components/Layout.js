// React.Fragment es la herramienta que te ayudará a renderizar varios componentes y/o elementos sin necesidad de colocar un div o cualquier otro elemento de HTML para renderizar sus hijos. Al usar esta característica de React podremos renderizar un código más limpio y legible, ya que ``React.Fragment` no se renderiza en el navegador.

// El 404 es la ruta que se renderizará cuando ninguna otra coincida con la dirección ingresada.

import React from "react";

import Navbar from "./Navbar";

function Layout(props) {
  //   const children = props.children;

  return (
    <React.Fragment>
      <Navbar />
      {props.children}
    </React.Fragment>
  );
}
export default Layout;
