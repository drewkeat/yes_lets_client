import React, { useState } from "react";
import {
  Container,
  Grid,
  IconButton,
  Popover,
  Typography,
} from "@mui/material";
import { AddCircle } from "@mui/icons-material";
import { connect } from "react-redux";

import { NewAvailabilityForm, AvailabilityListItem } from "../Components";
import { destroyEntity } from "../Actions";
import { getAvailabilitiesForUser } from "../Reducers/Availabilities/AvailabilitiesSelectors";

const AvailabilitiesList = ({
  user,
  date,
  availabilities,
  destroyEntity,
  ...props
}) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleAdd = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = (e) => {
    setAnchorEl(null);
  };

  const renderAvailabilities = () => {
    if (availabilities) {
      let availList = availabilities.filter(
        (avail) =>
          new Date(avail.attributes.start).toLocaleDateString() ===
          date.toLocaleDateString()
      );
      return availList.map((avail) => {
        return <AvailabilityListItem key={avail.id} availability={avail} />;
      });
    }
  };

  return (
    <Container>
      <Grid container alignItems="center">
        <Typography variant="h5">Availabilities</Typography>
        <IconButton onClick={handleAdd}>
          <AddCircle color="success" />
        </IconButton>
        <Popover anchorEl={anchorEl} open={open} onClose={handleClose}>
          <NewAvailabilityForm
            start={date}
            end={date}
            handleClose={handleClose}
          />
        </Popover>
        {renderAvailabilities()}
      </Grid>
    </Container>
  );
};

const mapStateToProps = (state, { user, ...props }) => ({
  availabilities: getAvailabilitiesForUser(state, user),
});

export default connect(mapStateToProps, { destroyEntity })(AvailabilitiesList);
