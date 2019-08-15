import React from "react";

class BadgeForm extends React.Component {
  //es necesario inicializar los estados, puede ser en cualquier liena
  //setStatey state con partes basicas en todo componente,

  state = {
    jobTitle: "Designer"
  };

  handleChenge = e => {
    // console.log({
    //   name: e.target.name,
    //   value: e.target.value
    // });

    //Guardar informacion en estado, funcion de la clase component
    this.setState({
      //se guarda la info dentro del elemento que lo esta llamando
      [e.target.name]: e.target.value
    });
  };
  handleClick = e => {
    console.log("Button was Clicked");
  };

  handleSubmit = e => {
    //Para que el formulario no se envie
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <h1>New Attendant</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>First name</label>
            <input
              onChange={this.handleChenge}
              className="form-control"
              type="text"
              name="firstname"
              value={this.state.firstName}
            />
          </div>
          <div className="form-group">
            <label>Last name</label>
            <input
              onChange={this.handleChenge}
              className="form-control"
              type="text"
              name="lastname"
              value={this.state.lastName}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              onChange={this.handleChenge}
              className="form-control"
              type="text"
              name="email"
              value={this.state.email}
            />
          </div>
          <div className="form-group">
            <label>Job Title</label>
            <input
              onChange={this.handleChenge}
              className="form-control"
              type="text"
              name="jobTitle"
              value={this.state.jobTitle}
            />
          </div>
          <div className="form-group">
            <label>Teitter</label>
            <input
              onChange={this.handleChenge}
              className="form-control"
              type="text"
              name="twitter"
              value={this.state.twitter}
            />
          </div>
          <button onClick={this.handleClick} className="btn btn-primary">
            Save
          </button>
        </form>
      </div>
    );
  }
}

export default BadgeForm;
