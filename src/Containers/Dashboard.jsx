import React, { Component } from "react";
import { connect } from "react-redux";
import { Container } from "@mui/material";

import { Navbar, SmallCalendar, DailyDetails } from "../Components";
import { fetchEntity } from "../Actions";
import {
  selectCurrentUser,
  selectUserRelationships,
} from "../Reducers/Users/UsersSelectors";
import { Typography } from "@mui/material";

class Dashboard extends Component {
  state = {
    selectedDate: new Date(),
  };

  componentDidMount() {
    this.props.fetchEntity(this.props.currentUser.id, "user");
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
        <Typography variant="h2" textAlign="center">
          Welcome {currentUser.fullName}
        </Typography>
        <Container>
          <SmallCalendar
            date={this.state.selectedDate}
            changeDate={this.changeDate}
            user={currentUser}
          />
          <DailyDetails
            date={this.state.selectedDate || new Date()}
            user={currentUser}
          />
        </Container>
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
