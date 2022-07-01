import React, { Component } from "react";
import { connect } from "react-redux";

import { Navbar, SmallCalendar, DailyDetails } from "../Components";
import { fetchEntity } from "../Actions";
import {
  selectCurrentUser,
  selectUserRelationships,
} from "../Reducers/Users/UsersSelectors";

class Dashboard extends Component {
  state = {
    selectedDate: new Date(),
  };

  componentDidMount() {
    this.props.relationships.forEach((entity) =>
      this.props.fetchEntity(entity.id, entity.type)
    );
    //QUESTION: Why does my app get hung up on account creation if mapStateToProps is called by the connect HOC?  Error states that friends = null
  }

  changeDate = (date) => {
    this.setState({ ...this.state, selectedDate: date });
  };

  render() {
    const { currentUser, loading } = this.props;
    if (loading) {
      return <div> Loading </div>;
    }
    return (
      <div>
        <Navbar />
        <h1 style={{ textAlign: "center" }}>Welcome {currentUser.fullName}</h1>
        <div style={{ width: "80%", margin: "auto" }}>
          <SmallCalendar
            date={this.state.selectedDate}
            changeDate={this.changeDate}
            user={currentUser}
          />
          <DailyDetails
            date={this.state.selectedDate || new Date()}
            user={currentUser}
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
    relationships: selectUserRelationships(state),
  };
};
export default connect(mapStateToProps, {
  fetchEntity,
})(Dashboard);
