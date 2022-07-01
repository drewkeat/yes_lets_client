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
import { selectFriendshipByUsers } from "../Reducers/Friendships/friendshipsSelectors";
import { updateEntity } from "../Actions";

export const UserCard = ({
  userID,
  user,
  status,
  friendship,
  updateEntity,
  ...props
}) => {
  const { fullName, email, phoneNumber } = user.attributes;

  const confirmFriend = () => {
    const updatedFriendship = {
      id: friendship.id,
      status: "confirmed",
    };
    updateEntity(updatedFriendship, "friendship");
  };

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
        <IconButton color="success" onClick={confirmFriend}>
          <PersonAddIcon />
        </IconButton>
      </Tooltip>
    ),
  };

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

const mapStateToProps = (state, { userID, ...props }) => ({
  user: selectUserByID(state, userID),
  friendship: selectFriendshipByUsers(state, userID),
});

export default connect(mapStateToProps, { updateEntity })(UserCard);
