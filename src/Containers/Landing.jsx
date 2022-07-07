import React, { Component } from "react";
import { Box, Grid, Paper, Typography } from "@mui/material";
import { LoginForm, SignupForm } from "../Components";
import { EventAvailable } from "@mui/icons-material";

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
        component={Box}
        height="100vh"
        width="100vw"
        sx={{ flexDirection: { xs: "column-reverse", sm: "row" } }}
      >
        <Grid
          item
          component={Box}
          bgcolor={"secondary.main"}
          xs={7}
          sm={4}
          md={6}
          sx={{ minWidth: { xs: "100%", sm: "" } }}
        />
        <Grid
          item
          container
          component={Paper}
          elevation={15}
          xs={5}
          sm={8}
          md={6}
          height={"100%"}
          alignContent={"center"}
          alignItems={"center"}
          justifyContent={"center"}
          minHeight={"fit-content"}
          direction="column"
          sx={{ minWidth: { xs: "100%", sm: "" } }}
        >
          <Paper elevation={3} sx={{ padding: "1rem", textAlign: "center" }}>
            <EventAvailable
              fontSize="large"
              sx={{
                transform: "scale(2)",
                color: "#8c9eff",
                my: 2,
              }}
            />
            <Typography variant="h1">Yes, Let's!</Typography>
            {this.state.displayLogin ? (
              <Grid
                item
                component={LoginForm}
                changeForm={this.changeForm}
                style={{ paddingTop: "1rem" }}
              />
            ) : (
              <Grid
                item
                component={SignupForm}
                changeForm={this.changeForm}
                style={{ paddingTop: "1rem" }}
              />
            )}
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

export default Landing;
