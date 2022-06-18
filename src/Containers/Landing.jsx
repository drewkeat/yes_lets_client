import React, { Component } from "react";
import { Grid, Typography } from "@mui/material";
import { LoginForm, SignupForm } from "../Components";

class Landing extends Component {
  state = {
    displayLogin: true,
  };

  changeForm = (bool) => {
    this.setState({ displayLogin: bool });
  };

  render() {
    return (
      <Grid
        container
        component={"Box"}
        height="100vh"
        width="100vw"
        sx={{ flexDirection: { xs: "column-reverse", sm: "row" } }}
      >
        <Grid
          item
          component={"Box"}
          bgcolor={"secondary.main"}
          xs={7}
          sm={4}
          md={6}
          sx={{ minWidth: { xs: "100%", sm: "" } }}
        />
        <Grid
          container
          xs={5}
          sm={8}
          md={6}
          height={"100%"}
          alignContent={"center"}
          justifyContent={"center"}
          minHeight={"fit-content"}
          sx={{ minWidth: { xs: "100%", sm: "" } }}
        >
          <Typography variant="h1">Yes, Let's!</Typography>
          {this.state.displayLogin ? (
            <LoginForm
              changeForm={this.changeForm}
              style={{ paddingTop: "3rem" }}
            />
          ) : (
            <SignupForm
              changeForm={this.changeForm}
              style={{ paddingTop: "3rem" }}
            />
          )}
        </Grid>
      </Grid>
    );
  }
}

export default Landing;
