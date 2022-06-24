import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Grid, Typography } from "@mui/material";

import { Navbar, UserSearch, UserCard } from "../Components";
import {
  selectCurrentFriendIDs,
  selectCurrentUser,
  selectUsers,
} from "../Reducers/Users/UsersSelectors";

class FriendsNav extends Component {
  renderFriends = () => {
    return this.props.friendIDs.map((id) => {
      return <UserCard key={id} id={id} xs={3} />;
    });
  };

  render() {
    return (
      <>
        <Navbar />
        <Container>
          <UserSearch />
          <Grid container>
            {/* FriendCardContainer */}
            <Grid
              container
              justifyContent={"space-around"}
              columns={4}
              sx={{ gap: 1 }}
            >
              <Grid
                item
                component={Typography}
                variant={"h3"}
                gutterBottom
                textAlign="center"
                xs={4}
              >
                Friends
              </Grid>
              {this.renderFriends()}
            </Grid>
          </Grid>
        </Container>
      </>
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
