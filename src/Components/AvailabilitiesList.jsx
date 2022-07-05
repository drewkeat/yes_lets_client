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
import { getAvailabilitiesFromUser } from "../Reducers/Availabilities/AvailabilitiesSelectors";

const AvailabilitiesList = ({
  user,
  date,
  availabilities,
  destroyEntity,
  ...props
}) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleRemove = (e, entityData) => {
    const { id, type } = entityData;
    destroyEntity(id, type);
  };

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
        // const start = new Date(avail.attributes.start).toLocaleTimeString();
        // const end = new Date(avail.attributes.end).toLocaleTimeString();
        return (
          <AvailabilityListItem key={avail.id} availability={avail} />
          // <Container key={avail.id}>
          //   <Grid container data-entity-id={avail.id} alignItems="center">
          //     <Typography variant="subtitle1">
          //       {start} - {end}
          //     </Typography>
          //     <IconButton>
          //       <Edit />
          //     </IconButton>
          //     <IconButton
          //       data-entity-id={avail.id}
          //       onClick={(e) =>
          //         handleRemove(e, { type: "availability", id: avail.id })
          //       }
          //     >
          //       <RemoveCircle color="error" />
          //     </IconButton>
          //   </Grid>
          // </Container>
        );
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
          <NewAvailabilityForm start={date} end={date} />
        </Popover>
        {renderAvailabilities()}
      </Grid>
    </Container>
  );
};

const mapStateToProps = (state, { user, ...props }) => ({
  availabilities: getAvailabilitiesFromUser(state, user),
});

export default connect(mapStateToProps, { destroyEntity })(AvailabilitiesList);
