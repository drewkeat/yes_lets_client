import React, { Component } from "react";
import { connect } from "react-redux";
import AvailabilitiesView from "../Components/AvailabilitiesView/AvailabilitiesView";

import { SmallCalendar } from "../Components/SmallCalendar/SmallCalendar";
// import { fetchUser } from "../Actions/userActions";
import { selectCurrentUser } from "../Reducers/Users/UsersSelectors";

class Dashboard extends Component {
  state = {
    selectedDate: new Date(),
  };

  onChange = (date) => {
    this.setState({ ...this.state, selectedDate: date });
  };

  render() {
    return (
      <div>
        <h1 style={{ textAlign: "center" }}>
          Welcome {this.props.currentUser.fullName}
        </h1>
        <div style={{ width: "80%", margin: "auto" }}>
          <SmallCalendar
            date={this.state.selectedDate}
            onChange={this.onChange}
            user={this.props.currentUser}
          />
          <AvailabilitiesView
            selectedDate={this.state.selectedDate}
            availabilityIDs={this.props.currentUser.availabilities.map(
              (avail) => avail.id
            )}
          />
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
