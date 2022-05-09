import React, { Component } from "react";
import LoginForm from "../Components/LoginForm/LoginForm";
import SignupForm from "../Components/SignupForm/SignupForm";

export class Landing extends Component {
  state = {
    displayForm: true,
  };

  changeForm = (bool) => {
    this.setState({ displayForm: bool });
  };

  render() {
    return (
      <div className="pageWrapper">
        {this.state.displayForm ? (
          <LoginForm
            changeForm={this.changeForm}
            style={{ marginTop: "3rem" }}
          />
        ) : (
          <SignupForm
            changeForm={this.changeForm}
            style={{ marginTop: "3rem" }}
          />
        )}
      </div>
    );
  }
}

export default Landing;
