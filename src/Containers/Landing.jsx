import { Box, Grid, Typography } from "@mui/material";
import React, { Component } from "react";
export class Landing extends Component {
  render() {
    return (
      <Grid
        container
        direction="column"
        columns={{ xs: 1, sm: 2 }}
        minHeight={"100vh"}
        minWidth="100%"
      >
        <Typography
          id="header"
          variant="h1"
          align="center"
          minWidth={"100%"}
          flexGrow={0}
        >
          Yes, Lets!
        </Typography>
        <Box
          flexGrow={1}
          width="100%"
          minHeight="100%"
          backgroundColor="primary.main"
        ></Box>
      </Grid>
    );
  }
}

export default Landing;
