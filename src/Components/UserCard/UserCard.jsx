import React from "react";
import { connect } from "react-redux";
import { Card, Grid, Typography } from "@mui/material";
import { selectUserByID } from "../../Reducers/Users/UsersSelectors";

export const UserCard = ({ id, user, ...props }) => {
  const { fullName, email, phoneNumber } = user.attributes;
  return (
    <Grid
      item
      container
      component={Card}
      elevation={2}
      {...props}
      justifyContent={"center"}
      sx={{ width: "fit-content" }}
    >
      <Grid item xs={12}>
        <Typography variant={"h6"} textAlign={"center"}>
          {fullName}
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant={"subtitle2"}>{email}</Typography>
      </Grid>
      <Grid item>
        <Typography variant={"subtitle2"}>{phoneNumber}</Typography>
      </Grid>
    </Grid>
  );
};

const mapStateToProps = (state, { id, ...props }) => ({
  user: selectUserByID(state, id),
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(UserCard);
