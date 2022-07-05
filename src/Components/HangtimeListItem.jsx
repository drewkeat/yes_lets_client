import React from "react";
import { connect } from "react-redux";
import { Container, Grid, Typography, IconButton } from "@mui/material";
import { RemoveCircle } from "@mui/icons-material";

const HangtimeListItem = ({ hangtime, destroyEntity, ...props }) => {
  const start = new Date(hangtime.attributes.start).toLocaleTimeString();
  const end = new Date(hangtime.attributes.end).toLocaleTimeString();

  const handleRemove = (e, entityData) => {
    const { id, type } = entityData;
    destroyEntity(id, type);
  };

  return (
    <Container key={hangtime.id}>
      <Grid container data-entity-id={hangtime.id} alignItems="center">
        <Typography variant="subtitle1">
          {start} - {end}
        </Typography>
        <IconButton
          data-entity-id={hangtime.id}
          onClick={(e) =>
            handleRemove(e, { type: "hangtime", id: hangtime.id })
          }
        >
          <RemoveCircle color="error" />
        </IconButton>
      </Grid>
    </Container>
  );
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(HangtimeListItem);
