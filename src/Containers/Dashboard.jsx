import React, { Component } from "react";
import { connect } from "react-redux";

import { SmallCalendar } from "../Components/SmallCalendar/SmallCalendar";
// import { fetchUser } from "../Actions/userActions";
import { selectCurrentUser } from "../Reducers/UsersSelectors";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <h1>Welcome {this.props.currentUser.attributes.fullName}</h1>
        <div style={{ width: "80%", margin: "auto" }}>
          <SmallCalendar user={this.props.currentUser} />
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    currentUser: selectCurrentUser(state),
  };
};
export default connect(mapStateToProps)(Dashboard);
