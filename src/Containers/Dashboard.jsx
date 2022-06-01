import React, { Component } from "react";
import { connect } from "react-redux";

export class Dashboard extends Component {
  render() {
    return <h1>Welcome User</h1>;
  }
}

export default connect((state) => {
  return { currentUser: state.users[state.users.current] };
})(Dashboard);
