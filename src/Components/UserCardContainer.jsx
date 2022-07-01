import React from "react";
import { connect } from "react-redux";
import { Grid, Typography } from "@mui/material";

import { UserCard } from "../Components";

export const UserCardContainer = ({ friendTypes, cardTitle, ...props }) => {
  const renderFriends = () => {
    const finalArr = [];
    for (let status in friendTypes) {
      finalArr.push(
        friendTypes[status].map((userID) => {
          return (
            <UserCard key={userID} userID={userID} status={status} xs={3} />
          );
        })
      );
    }
    return finalArr;
  };

  return (
    <Grid container>
      <Grid
        container
        justifyContent={"space-around"}
        columns={4}
        sx={{ gap: 1, mb: 3 }}
      >
        <Grid
          item
          component={Typography}
          variant={"h3"}
          gutterBottom
          textAlign="center"
          xs={4}
        >
          {cardTitle}
        </Grid>
        {renderFriends()}
      </Grid>
    </Grid>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(UserCardContainer);
