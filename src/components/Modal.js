import React from "react";
import ReactDOM from "react-dom";

import "./styles/Modal.css";

function Modal(props) {
  if (!props.isOpen) {
    return null;
  }
  return (
    /* Uso de modales y portales */
    ReactDOM.createPortal(
      <div className="Modal">
        <div className="Modal__container">
          <button onClick={props.onClose} className="Modal__close-button">
            X
          </button>
          {props.children}
        </div>
      </div>,
      document.getElementById("modal")

      //                 Portales
      // Hay momentos en los que queremos renderizar un modal, un tooltip, etc. Esto puede volverse algo complicado ya sea por la presencia de un z-index o un overflow hidden.

      // En estos casos lo ideal será renderizar en un nodo completamente aparte y para esto React tiene una herramienta llamada Portales que funcionan parecido a ReactDOM.render; se les dice qué se desea renderizar y dónde, con la diferencia de que ese dónde puede ser fuera de la aplicación.
    )
  );
}

export default Modal;
