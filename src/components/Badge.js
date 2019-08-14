import React from "react";

import "./styles/Badge.css";
import confLogo from "../images/badge-header.svg";

class Badge extends React.Component {
  render() {
    return (
      <div className="Badge">
        <div className="Badge__header">
          <img src={confLogo} alt="Logo de Conf" />
        </div>

        <div className="Badge__section-name">
          <img
            className="Badge__avatar"
            src="https://s.gravatar.com/avatar/c1d0a85cc9ed33f1839cf20d818a32a5?s=80"
            alt="Avatar"
          />
          <h1>
            Diego <br /> Tejedor
          </h1>
        </div>

        <div className="Badge__section-info">
          <h3>Frontend Engineer</h3>
          <div>@Dieghoatc</div>
        </div>

        <div className="Badge__footer">#Platziconf</div>
      </div>
    );
  }
}
export default Badge;
