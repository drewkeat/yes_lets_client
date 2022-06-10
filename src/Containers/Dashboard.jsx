import React, { Component } from "react";
import { connect } from "react-redux";
// import AvailabilitiesView from "../Components/AvailabilitiesView/AvailabilitiesView";

import SmallCalendar from "../Components/SmallCalendar/SmallCalendar";
import { fetchAvailability } from "../Actions/availabilityActions";
import { selectCurrentUser } from "../Reducers/Users/UsersSelectors";

class Dashboard extends Component {
  state = {
    selectedDate: new Date(),
  };

  componentDidMount() {
    this.props.currentUser.availabilities.forEach((id) =>
      this.props.fetchAvailability(id)
    );
  }

  changeDate = (date) => {
    this.setState({ ...this.state, selectedDate: date });
  };

  render() {
    if (this.props.loading) {
      return <h1>Loading</h1>;
    }
    return (
      <div>
        <h1 style={{ textAlign: "center" }}>
          Welcome {this.props.currentUser.fullName}
        </h1>
        <div style={{ width: "80%", margin: "auto" }}>
          <SmallCalendar
            date={this.state.selectedDate}
            changeDate={this.changeDate}
            user={this.props.currentUser}
          />
          {/* <AvailabilitiesView
            selectedDate={this.state.selectedDate}
            availabilityIDs={this.props.currentUser.availabilities}
          /> */}
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    loading: state.users.loading,
    currentUser: selectCurrentUser(state),
  };
};
export default connect(mapStateToProps, { fetchAvailability })(Dashboard);
