import React from "react";

import { Link } from "react-router-dom";

import "./styles/BadgesList.css";
import Gravatar from "./Gravatar";

class BadgesListItem extends React.Component {
  render() {
    return (
      <div className="BadgesListItem">
        <Gravatar
          className="BadgesListItem__avatar"
          email={this.props.badge.email}
          //src={this.props.badge.avatarUrl}
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
function useSearchBadges(badges) {
  const [query, setQuery] = React.useState("");

  const [filteredBadges, setFilteredBadges] = React.useState(badges);

  React.useMemo(() => {
    const results = badges.filter(badge => {
      return `${badge.firstName} ${badge.lastName}`
        .toLowerCase()
        .includes(query.toLowerCase());
    });

    setFilteredBadges(results);
  }, [badges, query]);

  return { query, setQuery, filteredBadges };
}

function BadgesList(props) {
  const badges = props.badges;
  const { query, setQuery, filteredBadges } = useSearchBadges(badges);

  if (filteredBadges.length === 0) {
    return (
      <div>
        <div className="form-group">
          <label>Filter Badges</label>
          <input
            type="text"
            className="form-control"
            value={query}
            onChange={e => {
              setQuery(e.target.value);
            }}
          />
        </div>
        <h3>No se econtro ningun badge</h3>
        <Link className="btn btn-primary" to="/badges/new">
          Create New Badge
        </Link>
      </div>
    );
  }
  return (
    <div className="BadgesList">
      <div className="form-group">
        <label>Filter Badges</label>
        <input
          type="text"
          className="form-control"
          value={query}
          onChange={e => {
            setQuery(e.target.value);
          }}
        />
      </div>
      <ul className="list-unstyled">
        {/* Para que por cada dato aparesca un componente. Por cada uno de los
          elementos que tengo en data, quiero convertirlos de un objeto a un
          elemento. La funcion sobre los arreglos es (.map) la cual recibe una
          funcion como argumento y tiene que regresar un valor
          cada hijo en una lista, tiene que tener un prop unico llamado key valor unico ayuda a react para determinar si hubo un cambio al volver a hacer render */}
        {filteredBadges.map(badge => {
          return (
            <li key={badge.id}>
              <Link
                className="text-reset text-decoration-none"
                to={`/badges/${badge.id}`}
              >
                <BadgesListItem badge={badge} />
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default BadgesList;
