import { Card, Container, Grid, IconButton, Typography } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import EditIcon from "@mui/icons-material/Edit";
import React from "react";
import { connect } from "react-redux";
import { getAvailabilitiesFromUser } from "../Reducers/Availabilities/AvailabilitiesSelectors";
import { getHangtimesFromUser } from "../Reducers/Hangtimes/HangtimesSelectors";

const DailyDetails = ({ user, date, availabilities, hangtimes, ...props }) => {
  const renderAvailabilities = () => {
    if (availabilities) {
      let availList = availabilities.filter(
        (avail) =>
          new Date(avail.attributes.start).toLocaleDateString() ===
          date.toLocaleDateString()
      );
      return availList.map((avail) => {
        const start = new Date(avail.attributes.start).toLocaleTimeString();
        const end = new Date(avail.attributes.end).toLocaleTimeString();
        return (
          <Container key={avail.id}>
            <Grid container alignItems="center">
              <Typography variant="subtitle1">
                {start} - {end}
              </Typography>
              <IconButton>
                <EditIcon />
              </IconButton>
              <IconButton>
                <RemoveCircleIcon color="error" />
              </IconButton>
            </Grid>
          </Container>
        );
      });
    }
  };

  const renderHangtimes = () => {
    if (hangtimes) {
      let hangList = hangtimes.filter(
        (hang) =>
          new Date(hang.attributes.start).toLocaleDateString() ===
          date.toLocaleDateString()
      );
      return hangList.map((hang) => {
        const start = new Date(hang.attributes.start).toLocaleTimeString();
        const end = new Date(hang.attributes.end).toLocaleTimeString();
        return (
          <Container key={hang.id}>
            <Grid container alignItems="center">
              <Typography variant="subtitle1">
                {start} - {end}
              </Typography>
              <IconButton>
                <EditIcon />
              </IconButton>
              <IconButton>
                <RemoveCircleIcon color="error" />
              </IconButton>
            </Grid>
          </Container>
        );
      });
    }
  };

  return (
    <Card raised sx={{ mt: 2, padding: 1 }}>
      <Typography variant="h4" textAlign="center">
        {date.toLocaleDateString()}
      </Typography>
      <Container>
        <Grid container alignItems="center">
          <Typography variant="h5">Availabilities</Typography>
          <IconButton>
            <AddCircleIcon color="success" />
          </IconButton>
          {renderAvailabilities()}
        </Grid>
        <Grid container alignItems="center">
          <Typography variant="h5">Hangtimes</Typography>
          <IconButton>
            <AddCircleIcon color="success" />
          </IconButton>
          {renderHangtimes()}
        </Grid>
      </Container>
    </Card>
  );
};

const mapStateToProps = (state, { user }) => ({
  availabilities: getAvailabilitiesFromUser(state, user),
  hangtimes: getHangtimesFromUser(state, user),
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(DailyDetails);
