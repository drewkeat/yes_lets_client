import React, { Component } from "react";

class SignupForm extends Component {
  state = {
    first: "",
    last: "",
    email: "",
    phone_number: "",
    password: "",
    password_confirmation: "",
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  // TODO: Alter to transmit form values to api
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div
        className="form-container"
        style={{
          display: "grid",
          justifyContent: "center",
          width: "100vw",
          ...this.props.style,
        }}
      >
        <form
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2,1fr)",
            justifyContent: "center",
            gap: ".25rem",
          }}
          onSubmit={(e) => this.handleSubmit(e)}
        >
          <input
            name="first"
            type="text"
            placeholder="First Name"
            onChange={(e) => this.handleChange(e)}
            value={this.state.first}
          />
          <input
            name="last"
            type="text"
            placeholder="Last Name"
            onChange={(e) => this.handleChange(e)}
            value={this.state.last}
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            onChange={(e) => this.handleChange(e)}
            value={this.state.email}
          />
          <input
            name="phone"
            type="text"
            placeholder="Phone Number"
            onChange={(e) => this.handleChange(e)}
            value={this.state.phone}
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            onChange={(e) => this.handleChange(e)}
            value={this.state.password}
          />
          <input
            name="password_confirmation"
            type="password"
            placeholder="Confirm Password"
            onChange={(e) => this.handleChange(e)}
            value={this.state.password_confirmation}
          />
          <button type="submit">Join</button>
          <button onClick={() => this.props.changeForm(true)}>
            Back to Login
          </button>
        </form>
      </div>
    );
  }
}

export default SignupForm;
