import React, { Component } from "react";
import { connect } from "react-redux";
import { Navbar, SignupForm } from "../Components";
import { selectCurrentUser } from "../Reducers/Users/UsersSelectors";

class Account extends Component {
  state = {};
  render() {
    const { user } = this.props;
    const [firstName] = user.fullName.split(" ");
    return (
      <div>
        <Navbar />
        <h1 style={{ textAlign: "center" }}>{firstName}'s Account</h1>
        <div>
          <SignupForm user={user} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: selectCurrentUser(state),
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Account);
