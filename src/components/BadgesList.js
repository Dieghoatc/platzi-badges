import React from "react";

import "./styles/BadgesList.css";

class BadgesListItem extends React.Component {
  render() {
    return (
      <div className="BadgesListItem">
        <img
          className="BadgesListItem__avatar"
          src={this.props.badge.avatarUrl}
          alt={`${this.props.badge.firstName} ${this.props.badge.lastName}`}
        />

        <div>
          <strong>
            {this.props.badge.firstName} {this.props.badge.lastName}
          </strong>
          <br />@{this.props.badge.twitter}
          <br />
          {this.props.badge.jobTitle}
        </div>
      </div>
    );
  }
}

class BadgesList extends React.Component {
  render() {
    return (
      <div className="BadgesList">
        <ul className="list-unstyled">
          {/* Para que por cada dato aparesca un componente. Por cada uno de los
          elementos que tengo en data, quiero convertirlos de un objeto a un
          elemento. La funcion sobre los arreglos es (.map) la cual recibe una
          funcion como argumento y tiene que regresar un valor
          cada hijo en una lista, tiene que tener un prop unico llamado key valor unico ayuda a react para determinar si hubo un cambio al volver a hacer render */}
          {this.props.badges.map(badge => {
            return (
              <li key={badge.id}>
                <BadgesListItem badge={badge} />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default BadgesList;
