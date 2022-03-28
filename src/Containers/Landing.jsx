import { Container } from "@mui/material";
import React, { Component } from "react";
import UserForm from "../Components/UserForm";
export class Landing extends Component {
  render() {
    return (
      <Container sx={{ width: "80vw", height: "80vh", margin: "100px" }}>
        <UserForm />
      </Container>
    );
  }
}

export default Landing;
