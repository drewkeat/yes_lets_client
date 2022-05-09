import React, { Component } from "react";

class LoginForm extends Component {
  state = {
    email: "",
    password: "",
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
            gridTemplateColumns: "repeat(2, 1fr)",
            justifyContent: "center",
            gap: ".25rem",
          }}
          onSubmit={(e) => this.handleSubmit(e)}
        >
          <input
            name="email"
            type="email"
            placeholder="Email"
            onChange={(e) => this.handleChange(e)}
            value={this.state.email}
            style={{ gridColumn: "1/span 2" }}
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            onChange={(e) => this.handleChange(e)}
            value={this.state.password}
            style={{ gridColumn: "1/span 2" }}
          />
          <button type="submit">Login</button>
          <button onClick={() => this.props.changeForm(false)}>Signup</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
