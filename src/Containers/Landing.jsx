import React, { Component } from "react";
import { LoginForm, SignupForm } from "../Components";

class Landing extends Component {
  state = {
    displayLogin: true,
  };

  changeForm = (bool) => {
    this.setState({ displayLogin: bool });
  };

  render() {
    return (
      <div className="pageWrapper">
        {this.state.displayLogin ? (
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
