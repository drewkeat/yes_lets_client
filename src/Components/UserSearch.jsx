import React, { useState } from "react";
import { TextField } from "@mui/material";
import { connect } from "react-redux";

import { SearchResultsPopout } from "./";
import {
  selectCurrentUser,
  selectOtherUsers,
} from "../Reducers/Users/UsersSelectors";

const UserSearch = ({ user, users, ...props }) => {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit} style={{ position: "relative" }}>
        <TextField
          id="searchField"
          size="small"
          type="search"
          name="searchField"
          autoComplete="off"
          placeholder={"Search"}
          onChange={handleChange}
          value={query}
        />
        {query && <SearchResultsPopout query={query} users={users} />}
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentUser: selectCurrentUser(state),
  users: selectOtherUsers(state),
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(UserSearch);
