import React from "react";
import { connect } from "react-redux";
import {
  Box,
  Card,
  Grid,
  IconButton,
  Typography,
  Tooltip,
} from "@mui/material";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { selectUserByID } from "../Reducers/Users/UsersSelectors";

export const UserCard = ({ id, user, status, ...props }) => {
  const { fullName, email, phoneNumber } = user.attributes;
  const statusMap = {
    current: null,
    // (
    //   <Tooltip title="Remove Friend">
    //     <IconButton color="error">
    //       <PersonRemoveIcon />
    //     </IconButton>
    //   </Tooltip>
    // ),
    pending: (
      <Tooltip title="Pending">
        <Box justifyContent={"center"} padding={1}>
          <AccessTimeIcon />
        </Box>
      </Tooltip>
    ),
    invites: (
      <Tooltip title="Confirm Friend">
        <IconButton color="success">
          <PersonAddIcon />
        </IconButton>
      </Tooltip>
    ),
  };

  // TODO: Add 'confirm friend' action
  return (
    <Grid
      item
      container
      component={Card}
      raised
      {...props}
      justifyContent={"center"}
      sx={{ minWidth: "fit-content", position: "relative" }}
    >
      <Box sx={{ position: "absolute", right: "1rem" }}>
        {statusMap[status]}
      </Box>
      <Grid item xs={12}>
        <Typography variant={"h6"} textAlign={"center"}>
          {fullName}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant={"subtitle2"} textAlign={"center"}>
          {email}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant={"subtitle2"} textAlign={"center"}>
          {phoneNumber}
        </Typography>
      </Grid>
    </Grid>
  );
};

const mapStateToProps = (state, { id, ...props }) => ({
  user: selectUserByID(state, id),
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(UserCard);
