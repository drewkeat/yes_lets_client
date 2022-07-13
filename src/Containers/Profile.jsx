import React, { Component } from "react";
import { connect } from "react-redux";
import { Box, Container, Typography } from "@mui/material";
import { Navbar } from "../Components";
import withRouter from "../Utils/withRouter";

export class Profile extends Component {
  render() {
    return (
      <Box>
        <Navbar />
        <Container>
          <Typography variant="h2" textAlign="center">
            Welcome {this.props.router.params.id}
          </Typography>
        </Container>
      </Box>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Profile)
);
