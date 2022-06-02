import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchUser } from "../Actions/userActions";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <h1>Welcome {this.props.currentUser.attributes.fullName}</h1>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  const currentUserID = state.users.current;
  return {
    currentUser: state.users[currentUserID],
  };
};
export default connect(mapStateToProps)(Dashboard);
