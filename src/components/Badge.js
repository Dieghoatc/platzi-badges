import React from "react";

import "./styles/Badge.css";
import confLogo from "../images/badge-header.svg";

class Badge extends React.Component {
  render() {
    //   Los props que es la forma corta de properties son argumentos de una función y en este caso serán los atributos de nuestro componente como class, src, etc
    // Estos props salen de una variable de la clase que se llama this.props y los valores son asignados directamente en el ReactDOM.render().

    return (
      <div className="Badge">
        <div className="Badge__header">
          <img src={confLogo} alt="Logo de Conf" />
        </div>

        <div className="Badge__section-name">
          <img
            className="Badge__avatar"
            src={this.props.avatarUrl}
            alt="Avatar"
          />
          <h1>
            {this.props.firstName} <br /> {this.props.lastName}
          </h1>
        </div>

        <div className="Badge__section-info">
          <h3>{this.props.jobTitle}</h3>
          <div>@{this.props.twitter}</div>
        </div>

        <div className="Badge__footer">#Platziconf</div>
      </div>
    );
  }
}
export default Badge;
