import { createSelector } from "reselect";

export const selectUsers = (state) => state.users;
export const selectUserByID = (state, id) => state.users[id];

export const selectCurrentUser = (state) => {
  return state.users.current ? state.users[state.users.current] : null;
};

export const selectCurrentFriendIDs = createSelector(
  selectCurrentUser,
  (currentUser) => {
    if (currentUser) {
      let friendsArr = currentUser.relationships.friends.data.map(
        (friend) => friend.id
      );
      return friendsArr;
    }
    return null;
  }
);

export const selectFriends = createSelector(
  selectCurrentFriendIDs,
  selectUsers,
  (ids, users) => {
    if (ids) {
      let friendArr = Object.keys(users).filter((key) => ids.includes(key));
      friendArr = friendArr.map((id) => users[id]);
      return friendArr;
    }
    return null;
  }
);
