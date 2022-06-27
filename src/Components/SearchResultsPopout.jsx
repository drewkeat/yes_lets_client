import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  Card,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";

import { searchUsers } from "../Actions";
import { selectCurrentFriendIDs } from "../Reducers/Users/UsersSelectors";

const SearchResultsPopout = ({
  query,
  users,
  currentUserID,
  friendIDs,
  searchUsers,
  ...props
}) => {
  const handleClick = (e) => {
    console.log("clicked");
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
              <ListItemButton onClick={handleClick}>
                <AddCircleIcon color={"success"} />
              </ListItemButton>
            </ListItemIcon>
          )
        }
      >
        <ListItemButton sx={{}}>
          <ListItemText>{user.attributes.fullName}</ListItemText>
          {!friendIDs.includes(user.id)}
        </ListItemButton>
      </ListItem>
    ));
  };
  return (
    <Card
      sx={{
        position: "absolute",
        zIndex: 1,
        // padding: "1rem",
        // paddingRight: "2rem",
      }}
    >
      <List>{renderUsers()}</List>
    </Card>
  );
};

const mapStateToProps = (state) => ({
  currentUserID: state.users.current,
  friendIDs: selectCurrentFriendIDs(state),
});

export default connect(mapStateToProps, { searchUsers })(SearchResultsPopout);
