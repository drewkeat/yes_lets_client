import React, { Component } from "react";
import { connect } from "react-redux";
import { Box, Container, Typography } from "@mui/material";

import { Navbar, SmallCalendar, DailyDetails, UserSearch } from "../Components";
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
    this.props.fetchEntity(this.props.currentUser.id, "user");
    this.props.relationships.forEach((entity) =>
      this.props.fetchEntity(entity.id, entity.type)
    );
  }

  changeDate = (date) => {
    this.setState({ ...this.state, selectedDate: date });
  };

  render() {
    const { currentUser } = this.props;
    // if (loading) {
    //   return <div> Loading </div>;
    // }
    return (
      <Box>
        <Navbar />
        <Container maxWidth={"xl"}>
          <Box display="flex" justifyContent={"end"}>
            <Box display="flex" gap={2} alignItems="center">
              <Typography variant="h6" textAlign={"center"}>
                Friends
              </Typography>
              <UserSearch />
            </Box>
          </Box>
          <Typography variant="h2" textAlign="center">
            Welcome {currentUser.fullName}
          </Typography>
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
      </Box>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    // loading: state.users.loading,
    currentUser: selectCurrentUser(state),
    relationships: selectUserRelationships(state),
  };
};
export default connect(mapStateToProps, {
  fetchEntity,
})(Dashboard);
