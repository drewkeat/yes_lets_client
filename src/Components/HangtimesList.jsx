import React from "react";
import { connect } from "react-redux";
import { Container, Grid, Typography, IconButton } from "@mui/material";
import { AddCircle, RemoveCircle } from "@mui/icons-material";

import { destroyEntity } from "../Actions";
import { getHangtimesFromUser } from "../Reducers/Hangtimes/HangtimesSelectors";

const HangtimesList = ({ user, date, hangtimes, destroyEntity, ...props }) => {
  const handleRemove = (e, entityData) => {
    const { id, type } = entityData;
    destroyEntity(id, type);
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
            <Grid container data-entity-id={hang.id} alignItems="center">
              <Typography variant="subtitle1">
                {start} - {end}
              </Typography>
              <IconButton
                data-entity-id={hang.id}
                onClick={(e) =>
                  handleRemove(e, { type: "hangtime", id: hang.id })
                }
              >
                <RemoveCircle color="error" />
              </IconButton>
            </Grid>
          </Container>
        );
      });
    }
  };

  return (
    <Container>
      <Grid container alignItems="center">
        <Typography variant="h5">Hangtimes</Typography>
        <IconButton>
          <AddCircle color="success" />
        </IconButton>
        {renderHangtimes()}
      </Grid>
    </Container>
  );
};

const mapStateToProps = (state, { user, ...props }) => ({
  hangtimes: getHangtimesFromUser(state, user),
});

export default connect(mapStateToProps, { destroyEntity })(HangtimesList);
