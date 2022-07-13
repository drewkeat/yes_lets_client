import React from "react";
import { connect } from "react-redux";
import { Card, Typography, List, ListItem } from "@mui/material";

import { getAvailabilitiesForUser } from "../Reducers/Availabilities/AvailabilitiesSelectors";

const SmallDetails = ({ user, availabilities, date, ...props }) => {
  const renderAvailabilities = () => {
    if (availabilities) {
      let availList = availabilities.filter(
        (avail) =>
          new Date(avail.attributes.start).toLocaleDateString() ===
          date.toLocaleDateString()
      );
      return availList.map((avail) => {
        let start = new Date(avail.attributes.start).toLocaleTimeString();
        let end = new Date(avail.attributes.end).toLocaleTimeString();
        return <ListItem key={avail.id}>{`${start} - ${end}`}</ListItem>;
      });
    }
  };
  return (
    <Card sx={{ maxWidth: "fit-content", padding: "1rem" }}>
      <Typography variant="h6">Details</Typography>
      <List>{renderAvailabilities()}</List>
    </Card>
  );
};

const mapStateToProps = (state, { user, ...props }) => {
  return {
    availabilities: getAvailabilitiesForUser(state, user),
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(SmallDetails);
