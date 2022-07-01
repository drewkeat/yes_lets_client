import React, { Component } from "react";
import { connect } from "react-redux";
import { Container } from "@mui/material";

import { Navbar, UserSearch, UserCardContainer } from "../Components";
import { selectCurrentUser } from "../Reducers/Users/UsersSelectors";
import { fetchEntity } from "../Actions";

class FriendsNav extends Component {
  componentDidMount() {
    let user = this.props.currentUser;
    this.props.fetchEntity(user.id, "user");
  }
  render() {
    const { friends, pendingFriends, friendInvites } = {
      ...this.props.currentUser,
    };

    const friendTypes = {
      current: friends,
      pending: pendingFriends,
      invites: friendInvites,
    };
    return (
      <>
        <Navbar />
        <Container>
          <UserSearch />
          <UserCardContainer friendTypes={friendTypes} cardTitle={"Friends"} />
        </Container>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: selectCurrentUser(state),
});

// const mapDispatchToProps = {};

export default connect(mapStateToProps, { fetchEntity })(FriendsNav);
