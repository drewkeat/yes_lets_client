import React from "react";
import { connect } from "react-redux";
import { Container, Grid, IconButton, Typography } from "@mui/material";
import { RemoveCircle, Edit } from "@mui/icons-material";

import { destroyEntity } from "../Actions";

export const AvailabilityListItem = ({
  availability,
  destroyEntity,
  ...props
}) => {
  const start = new Date(availability.attributes.start).toLocaleTimeString();
  const end = new Date(availability.attributes.end).toLocaleTimeString();

  const handleRemove = (e, entityData) => {
    const { id, type } = entityData;
    destroyEntity(id, type);
  };

  return (
    <Container key={availability.id}>
      <Grid container data-entity-id={availability.id} alignItems="center">
        <Typography variant="subtitle1">
          {start} - {end}
        </Typography>
        <IconButton>
          <Edit />
        </IconButton>
        <IconButton
          data-entity-id={availability.id}
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
