import React, { Component } from "react";
import { connect } from "react-redux";
import { Container } from "@mui/material";

import { Navbar, NewAvailabilityForm } from "../Components";
import "../index.css";
import { selectCurrentUser } from "../Reducers/Users/UsersSelectors";

class FormContainer extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Container sx={{ display: "flex", justifyContent: "center" }}>
          <NewAvailabilityForm />
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: selectCurrentUser(state),
});

export default connect(mapStateToProps)(FormContainer);
