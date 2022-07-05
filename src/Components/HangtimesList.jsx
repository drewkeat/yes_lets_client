import React from "react";
import { connect } from "react-redux";
import { Container, Grid, Typography, IconButton } from "@mui/material";
import { AddCircle } from "@mui/icons-material";

import { destroyEntity } from "../Actions";
import { getHangtimesFromUser } from "../Reducers/Hangtimes/HangtimesSelectors";
import { HangtimeListItem } from "../Components";

const HangtimesList = ({ user, date, hangtimes, destroyEntity, ...props }) => {
  const renderHangtimes = () => {
    if (hangtimes) {
      let hangList = hangtimes.filter(
        (hang) =>
          new Date(hang.attributes.start).toLocaleDateString() ===
          date.toLocaleDateString()
      );
      return hangList.map((hang) => {
        return <HangtimeListItem key={hang.id} hangtime={hang} />;
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
