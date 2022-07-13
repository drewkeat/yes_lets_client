import React, { Component } from "react";
import { connect } from "react-redux";
import { Box, Container, Typography } from "@mui/material";
import { Navbar, UserSearch, SmallCalendar, SmallDetails } from "../Components";
import withRouter from "../Utils/withRouter";
import { fetchEntity } from "../Actions";
import {
  selectUserByID,
  selectUserRelationships,
} from "../Reducers/Users/UsersSelectors";

export class Profile extends Component {
  state = {
    selectedDate: new Date(),
  };

  componentDidMount() {
    this.props.fetchEntity(this.props.pageUser.id, "user");
    this.props.relationships.forEach((entity) =>
      this.props.fetchEntity(entity.id, entity.type)
    );
  }

  changeDate = (date) => {
    this.setState({ ...this.state, selectedDate: date });
  };

  render() {
    const { pageUser } = this.props;
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
            {pageUser.attributes.fullName}
          </Typography>
          <SmallCalendar
            date={this.state.selectedDate}
            changeDate={this.changeDate}
            user={pageUser}
          />
          <SmallDetails user={pageUser} date={this.state.selectedDate} />
        </Container>
      </Box>
    );
  }
}

const mapStateToProps = (state, props) => ({
  pageUser: selectUserByID(state, props.router.params.id),
  relationships: selectUserRelationships(state, props.router.params.id),
});

export default withRouter(connect(mapStateToProps, { fetchEntity })(Profile));
