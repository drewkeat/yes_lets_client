import React, { Component } from "react";
import { connect } from "react-redux";
import { createUser, fetchUser } from "../../Actions/userActions";
import { withRouter } from "../../Utils/withRouter";
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
    this.props.createUser(this.state, this.props.navigate);
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
            name="phone_number"
            type="text"
            placeholder="Phone Number"
            onChange={(e) => this.handleChange(e)}
            value={this.state.phone_number}
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
        <button onClick={() => this.props.fetchUser(7)}>User 1</button>
        <button onClick={() => this.props.fetchUser(2)}>User 2</button>
        <button onClick={() => this.props.fetchUser(3)}>User 3</button>
      </div>
    );
  }
}

export default connect(null, { createUser, fetchUser })(withRouter(SignupForm));
