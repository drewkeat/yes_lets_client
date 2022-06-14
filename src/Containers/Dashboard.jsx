import React, { Component } from "react";
import { connect } from "react-redux";

import SmallCalendar from "../Components/SmallCalendar/SmallCalendar";
import DailyDetails from "../Components/DailyDetails/DailyDetails";
import Navbar from "../Components/Navbar/Navbar";
import { fetchAvailability } from "../Actions/availabilityActions";
import { fetchHangtime } from "../Actions/hangtimeActions";
import { fetchUser } from "../Actions/userActions";
import { selectCurrentUser } from "../Reducers/Users/UsersSelectors";

class Dashboard extends Component {
  state = {
    selectedDate: new Date(),
  };

  componentDidMount() {
    const user = this.props.currentUser;
    const userRels = [
      ...user.friends,
      ...user.pendingFriends,
      ...user.friendInvites,
    ];
    userRels.forEach((id) => this.props.fetchUser(id));
    user.availabilities.forEach((id) => this.props.fetchAvailability(id));
    user.hangtimes.forEach((id) => this.props.fetchHangtime(id));
  }

  changeDate = (date) => {
    this.setState({ ...this.state, selectedDate: date });
  };

  render() {
    return (
      <div>
        <Navbar />
        <h1 style={{ textAlign: "center" }}>
          Welcome {this.props.currentUser.fullName}
        </h1>
        <div style={{ width: "80%", margin: "auto" }}>
          <SmallCalendar
            date={this.state.selectedDate}
            changeDate={this.changeDate}
            user={this.props.currentUser}
          />
          <DailyDetails
            date={this.state.selectedDate || new Date()}
            user={this.props.currentUser}
          />
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
export default connect(mapStateToProps, {
  fetchAvailability,
  fetchHangtime,
  fetchUser,
})(Dashboard);
