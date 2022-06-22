import React from "react";
import { TextField } from "@mui/material";
import { connect } from "react-redux";
import { selectUsers } from "../../Reducers/Users/UsersSelectors";

export const UserSearch = ({ query, handleChange, ...props }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextField
          type="search"
          name="searchField"
          placeholder={"Search"}
          onChange={handleChange}
        />
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  users: selectUsers(state),
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(UserSearch);
