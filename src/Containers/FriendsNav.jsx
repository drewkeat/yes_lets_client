import React, { Component } from "react";
import { connect } from "react-redux";
import { Navbar, UserSearch, UserCard } from "../Components";
import {
  selectCurrentFriendIDs,
  selectCurrentUser,
  selectFriends,
  selectUsers,
} from "../Reducers/Users/UsersSelectors";

class FriendsNav extends Component {
  state = {
    input: "",
  };

  handleChange = (e) => {
    this.setState({ ...this.state, input: e.target.value });
  };

  renderUsers = () => {
    if (this.state.input) {
      return this.props.users.map((user) => {
        let userName = user.attributes.fullName.toLowerCase();
        if (userName.includes(this.state.input.toLowerCase())) {
          return <li>{user.attributes.fullName}</li>;
        }
        return null;
      });
    }
  };

  renderFriends = () => {
    return this.props.friendIDs.map((id) => {
      let friend = this.props.users.find((user) => user.id == id);
      return (
        <div>
          <h3>{friend.attributes.fullName}</h3>
          <p>{friend.attributes.email}</p>
        </div>
      );
    });
  };

  render() {
    return (
      <div>
        <Navbar />
        <h1 style={{ textAlign: "center" }}>FriendsNav</h1>
        <div>
          <UserSearch />
          <UserCard />
        </div>
        <div>{this.renderFriends()}</div>
        <label htmlFor="searchField">Search:</label>
        <input type="search" name="searchField" onChange={this.handleChange} />

        <h3>User List</h3>
        <ul style={{ listStyle: "none" }}>{this.renderUsers()}</ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: selectCurrentUser(state),
  users: selectUsers(state),
  friendIDs: selectCurrentFriendIDs(state),
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(FriendsNav);
