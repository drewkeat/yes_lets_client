import { Box, Button, Typography } from "@mui/material";
import React, { Component } from "react";

export class Landing extends Component {
  render() {
    return (
      <div>
        <Typography variant="h1" align="center">
          Yes, Lets!
        </Typography>
        <Box display="flex" alignContent="center" justifyContent="center">
          <Button variant="contained">Click Me</Button>
        </Box>
      </div>
    );
  }
}

export default Landing;
