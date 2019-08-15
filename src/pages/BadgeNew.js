import React from "react";

import "./styles/BadgeNew.css";
import header from "../images/badge-header.svg";
import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";

class BadgeNew extends React.Component {
  state = {
    form: {
      firstName: "",
      lastName: "",
      jobTitle: "",
      twitter: "",
      email: ""
    }
  };

  handleChange = e => {
    this.setState({
      form: {
        //Caen todos los valores que estaban en this.state.form
        //crando un nuevo objeto o reesribiendo los valores del formulario
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
  };

  render() {
    return (
      <div>
        
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={header} alt="" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                firstName={this.state.form.firstName}
                lastName={this.state.form.lastName}
                twitter={this.state.form.twitter}
                jobTitle={this.state.form.jobTitle}
                email={this.state.form.email}
                avatarUrl="https://s.gravatar.com/avatar/c1d0a85cc9ed33f1839cf20d818a32a5?s=80"
              />
            </div>
            <div className="col-6">
              <BadgeForm
                onChange={this.handleChange}
                formValues={this.state.form}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeNew;
