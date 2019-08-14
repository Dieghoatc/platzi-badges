import React from "react";

class BadgeForm extends React.Component {
  handleChenge = e => {
    console.log({
      name: e.target.name,
      value: e.target.value
    });
  };
  handleClick = e => {
    console.log("Button was Clicked");
  };

  handleSubmit = e => {
      //Para que el formulario no se envie
    e.preventDefault(); 
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
