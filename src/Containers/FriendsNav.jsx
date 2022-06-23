import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Grid, List, ListItem, Typography } from "@mui/material";

import { Navbar, UserSearch, UserCard } from "../Components";
import {
  selectCurrentFriendIDs,
  selectCurrentUser,
  selectUsers,
} from "../Reducers/Users/UsersSelectors";

class FriendsNav extends Component {
  state = {
    query: null,
  };

  handleChange = (e) => {
    this.setState({ ...this.state, query: e.target.value });
  };

  renderUsers = () => {
    if (this.state.query) {
      return this.props.users.map((user) => {
        let userName = user.attributes.fullName.toLowerCase();
        if (userName.includes(this.state.query.toLowerCase())) {
          return <ListItem>{user.attributes.fullName}</ListItem>;
        }
        return null;
      });
    }
  };

  renderFriends = () => {
    return this.props.friendIDs.map((id) => {
      return <UserCard key={id} id={id} xs={3} />;
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.query);
  };

  render() {
    return (
      <>
        <Navbar />
        <Container>
          <Grid container>
            <Grid item xs={12}></Grid>
            <Grid item container xs={12} justifyContent={"start"}>
              <UserSearch
                query={this.state.query}
                handleChange={this.handleChange}
              />
            </Grid>
            {/* UserCardContainer */}
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
            <Grid item container mt={10}>
              <Grid item xs={12}>
                <Typography variant={"h5"}>User List</Typography>
              </Grid>
              <Grid item component={List}>
                {this.renderUsers()}
              </Grid>
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
