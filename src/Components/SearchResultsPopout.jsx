import React from "react";
import { connect } from "react-redux";
import { Card } from "@mui/material";

const SearchResultsPopout = ({ query, users, currentUserID, ...props }) => {
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

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchResultsPopout);
