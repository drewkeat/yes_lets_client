import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Card } from "@mui/material";

import { searchUsers } from "../Actions";

const SearchResultsPopout = ({
  query,
  users,
  currentUserID,
  searchUsers,
  ...props
}) => {
  useEffect(() => {
    searchUsers(query);
    //eslint-disable-next-line
  }, [query]);

  const renderUsers = () => {
    let matchUsers = users.filter(
      (user) =>
        parseInt(user.id) !== parseInt(currentUserID) &&
        user.attributes.fullName.toLowerCase().includes(query.toLowerCase())
    );
    return matchUsers.map((user) => (
      <p key={user.id}>{user.attributes.fullName}</p>
    ));
  };
  return (
    <Card sx={{ position: "relative", zIndex: 1 }}>
      {query && renderUsers()}
    </Card>
  );
};

const mapStateToProps = (state) => ({
  currentUserID: state.users.current,
});

export default connect(mapStateToProps, { searchUsers })(SearchResultsPopout);
