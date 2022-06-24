import React, { Component } from "react";
import { connect } from "react-redux";
import { Container } from "@mui/material";

import {
  LoginForm,
  Navbar,
  NewAvailabilityForm,
  SignupForm,
} from "../Components";
import "../index.css";
import { selectCurrentUser } from "../Reducers/Users/UsersSelectors";

class FormContainer extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Container
          sx={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "3rem",
          }}
        >
          <NewAvailabilityForm />
          <LoginForm />
          <SignupForm />
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: selectCurrentUser(state),
});

export default connect(mapStateToProps)(FormContainer);
