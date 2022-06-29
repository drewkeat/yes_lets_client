import React, { Component } from "react";
import { connect } from "react-redux";
import { Container } from "@mui/material";

import { Navbar, UserSearch, UserCardContainer } from "../Components";
import {
  selectCurrentUser,
  selectOtherUsers,
  selectUserRelationships,
} from "../Reducers/Users/UsersSelectors";

class FriendsNav extends Component {
  render() {
    const { friends, pendingFriends, friendInvites } = {
      ...this.props.currentUser,
    };

    const friendships = {
      current: friends,
      pending: pendingFriends,
      invites: friendInvites,
    };
    return (
      <>
        <Navbar />
        <Container>
          <UserSearch />
          <UserCardContainer friendships={friendships} cardTitle={"Friends"} />
        </Container>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: selectCurrentUser(state),
  users: selectOtherUsers(state),
  userRelationships: selectUserRelationships(state),
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(FriendsNav);
