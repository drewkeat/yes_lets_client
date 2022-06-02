import React, { Component } from "react";
// import { connect } from "react-redux";
import LoginForm from "../Components/LoginForm/LoginForm";
import SignupForm from "../Components/SignupForm/SignupForm";
// import { createUser } from "../Actions/userActions";

export class Landing extends Component {
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
            // createUser={this.props.createUser}
          />
        )}
      </div>
    );
  }
}

// export default connect(null, { createUser })(Landing);
export default Landing;
