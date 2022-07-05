import React from "react";
import { Card, Container, Typography } from "@mui/material";
import { connect } from "react-redux";
import { AvailabilitiesList, HangtimesList } from "../Components";

const DailyDetails = ({ user, date, ...props }) => {
  return (
    <Card raised sx={{ mt: 2, padding: 1 }}>
      <Typography variant="h4" textAlign="center">
        {date.toLocaleDateString()}
      </Typography>
      <Container>
        <AvailabilitiesList user={user} date={date} />
        <HangtimesList user={user} date={date} />
      </Container>
    </Card>
  );
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(DailyDetails);
