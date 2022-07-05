import React, { useState } from "react";
import { connect } from "react-redux";
import {
  Container,
  Grid,
  IconButton,
  Popover,
  Typography,
} from "@mui/material";
import { RemoveCircle, Edit } from "@mui/icons-material";

import { NewAvailabilityForm } from "../Components";
import { destroyEntity } from "../Actions";

const AvailabilityListItem = ({
  availability,
  destroyEntity,
  date,
  ...props
}) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleEdit = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = (e) => {
    setAnchorEl(null);
  };

  const start = new Date(availability.attributes.start).toLocaleTimeString();
  const end = new Date(availability.attributes.end).toLocaleTimeString();

  const handleRemove = (e, entityData) => {
    const { id, type } = entityData;
    destroyEntity(id, type);
  };

  return (
    <Container key={availability.id}>
      <Grid container alignItems="center">
        <Typography variant="subtitle1">
          {start} - {end}
        </Typography>
        <IconButton onClick={handleEdit}>
          <Edit />
        </IconButton>
        <Popover anchorEl={anchorEl} open={open} onClose={handleClose}>
          <NewAvailabilityForm
            entityID={availability.id}
            start={availability.attributes.start}
            end={availability.attributes.end}
          />
        </Popover>
        <IconButton
          onClick={(e) =>
            handleRemove(e, { type: "availability", id: availability.id })
          }
        >
          <RemoveCircle color="error" />
        </IconButton>
      </Grid>
    </Container>
  );
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { destroyEntity })(
  AvailabilityListItem
);
