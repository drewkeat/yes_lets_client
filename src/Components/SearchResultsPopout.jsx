import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import _ from "lodash";
import {
  Card,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Tooltip,
} from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

import {
  searchUsers,
  createEntity,
  fetchEntity,
  updateEntity,
} from "../Actions";
import {
  selectCurrentFriendIDs,
  selectFriendInvites,
  selectFriendships,
  selectPendingFriendIDs,
} from "../Reducers/Users/UsersSelectors";

const SearchResultsPopout = ({
  query,
  users,
  currentUserID,
  currentFriendIDs,
  pendingFriendIDs,
  inviteFriendIDs,
  searchUsers,
  createEntity,
  fetchEntity,
  updateEntity,
  friendships,
  ...props
}) => {
  useEffect(() => {
    searchUsers(query);
    //eslint-disable-next-line
  }, [query]);

  const navigate = useNavigate();

  const handleAdd = (e) => {
    const friendID = e.currentTarget.getAttribute("friend-id");
    const entityDetails = { user_id: currentUserID, friend_id: friendID };
    createEntity(entityDetails, "friendship");
    fetchEntity(currentUserID, "user");
  };

  const handleConfirm = (e) => {
    const friendID = e.currentTarget.getAttribute("friend-id");
    const friendship = _.find(
      friendships,
      (f) =>
        f.relationships &&
        f.relationships.user.data.id === friendID &&
        f.relationships.friend.data.id === currentUserID.toString()
    );
    const entityDetails = { id: friendship.id, status: "confirmed" };
    updateEntity(entityDetails, "friendship");
    fetchEntity(currentUserID, "user");
  };

  const handleNavigate = (e, id) => {
    navigate("/users/" + id);
  };

  const renderButton = (user) => {
    if (pendingFriendIDs.includes(user.id)) {
      return (
        <ListItemIcon sx={{ justifyContent: "end" }}>
          <Tooltip title="Pending Response">
            <IconButton friend-id={user.id}>
              <AccessTimeIcon color="info" />
            </IconButton>
          </Tooltip>
        </ListItemIcon>
      );
    }
    if (inviteFriendIDs.includes(user.id)) {
      return (
        <ListItemIcon sx={{ justifyContent: "end" }}>
          <Tooltip title="Confirm Friend">
            <IconButton friend-id={user.id} onClick={handleConfirm}>
              <PersonAddIcon color="primary" />
            </IconButton>
          </Tooltip>
        </ListItemIcon>
      );
    }
    if (currentFriendIDs.includes(user.id)) {
      return null;
    }
    return (
      <ListItemIcon sx={{ justifyContent: "end" }}>
        <Tooltip title="Add Friend">
          <IconButton friend-id={user.id} onClick={handleAdd}>
            <AddCircleIcon color="success" />
          </IconButton>
        </Tooltip>
      </ListItemIcon>
    );
  };

  const renderUsers = () => {
    let matchUsers = users.filter(
      (user) =>
        parseInt(user.id) !== parseInt(currentUserID) &&
        user.attributes.fullName.toLowerCase().includes(query.toLowerCase())
    );
    return matchUsers.map((user) => (
      <ListItem
        key={user.id}
        secondaryAction={
          !currentFriendIDs.includes(user.id) && renderButton(user)
        }
      >
        {currentFriendIDs.includes(user.id) ? (
          <ListItemButton sx={{}} onClick={(e) => handleNavigate(e, user.id)}>
            <ListItemText>{user.attributes.fullName}</ListItemText>
          </ListItemButton>
        ) : (
          <ListItemText>{user.attributes.fullName}</ListItemText>
        )}
      </ListItem>
    ));
  };

  return (
    <>
      <Card
        sx={{
          position: "absolute",
          zIndex: 1,
        }}
      >
        <List>{renderUsers()}</List>
      </Card>
    </>
  );
};

const mapStateToProps = (state) => ({
  currentUserID: state.users.current,
  currentFriendIDs: selectCurrentFriendIDs(state),
  pendingFriendIDs: selectPendingFriendIDs(state),
  inviteFriendIDs: selectFriendInvites(state),
  friendships: selectFriendships(state),
});

export default connect(mapStateToProps, {
  searchUsers,
  createEntity,
  fetchEntity,
  updateEntity,
})(SearchResultsPopout);
