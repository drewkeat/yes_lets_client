import React, { Component } from "react";
import { connect } from "react-redux";
import { Box, Container, Typography } from "@mui/material";
import { Navbar } from "../Components";
import withRouter from "../Utils/withRouter";
import { fetchEntity } from "../Actions";
import { selectUserByID } from "../Reducers/Users/UsersSelectors";

export class Profile extends Component {
  componentDidMount() {
    console.log("mounted");
  }

  render() {
    const { pageUser } = this.props;
    return (
      <Box>
        <Navbar />
        <Container>
          <Typography variant="h2" textAlign="center">
            {pageUser.attributes.fullName}
          </Typography>
        </Container>
      </Box>
    );
  }
}

const mapStateToProps = (state, props) => ({
  pageUser: selectUserByID(state, props.router.params.id),
});

const mapDispatchToProps = {};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Profile)
);
