import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  Card,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";

import { searchUsers, createEntity, fetchEntity } from "../Actions";
import {
  selectCurrentFriendIDs,
  selectFriendships,
} from "../Reducers/Users/UsersSelectors";

const SearchResultsPopout = ({
  query,
  users,
  currentUserID,
  friendIDs,
  searchUsers,
  createEntity,
  fetchEntity,
  friendships,
  ...props
}) => {
  const handleClick = (e) => {
    const friendID = e.currentTarget.getAttribute("friend-id");
    const entityDetails = { user_id: currentUserID, friend_id: friendID };
    createEntity(entityDetails, "friendship");
    fetchEntity(currentUserID, "user");
  };

  useEffect(() => {
    searchUsers(query);
    //eslint-disable-next-line
  }, [query]);
  // TODO: ADD "Friend Functionality"
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
          !friendIDs.includes(user.id) && (
            <ListItemIcon sx={{ justifyContent: "end" }}>
              <IconButton friend-id={user.id} onClick={handleClick}>
                <AddCircleIcon color={"success"} />
              </IconButton>
            </ListItemIcon>
          )
        }
      >
        <ListItemButton sx={{}}>
          <ListItemText>{user.attributes.fullName}</ListItemText>
        </ListItemButton>
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
  friendIDs: selectCurrentFriendIDs(state),
  friendships: selectFriendships(state),
});

export default connect(mapStateToProps, {
  searchUsers,
  createEntity,
  fetchEntity,
})(SearchResultsPopout);
