import React from "react";

import Modal from "./Modal";

function DeleteBadgeModal(props) {
  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose}>
      <div className="DeleteBadgeModal">
        <h1>Are you Sure?</h1>
        <p>You are about to delete this badge</p>
      </div>
      <button onClick={props.onDeleteBadge} className="btn btn-danger mr-4">
        Delete
      </button>
      <button onClick={props.onClose} className="btn btn-primary">
        Cancel
      </button>
    </Modal>
  );
}
export default DeleteBadgeModal;
// La técnica de usar componentes genéricos para crear uno nuevo especializado se llama composición y es una herramienta que todo buen programador debe saber utilizar.
