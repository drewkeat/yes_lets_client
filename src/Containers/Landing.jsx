import { Container } from "@mui/material";
import React, { Component } from "react";
import UserForm from "../Components/UserForm";
export class Landing extends Component {
  render() {
    return (
      <Container
        sx={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
          alignItems: "center",
          background: "yellow",
        }}
      >
        <Container
          sx={{
            width: "80vw",
            height: "fit-content",
            py: "1.5rem",
            background: "blue",
          }}
        >
          <UserForm />
        </Container>
      </Container>
    );
  }
}

export default Landing;
