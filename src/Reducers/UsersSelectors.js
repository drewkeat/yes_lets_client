import { createSelector } from "reselect";
// import { entityFetcher } from "./EntityFetcher";

export const selectUsers = (state) => state.users;
export const selectUserByID = (state, id) => state.users[id];

export const selectCurrentUser = (state) => {
  return state.users.current
    ? buildUser(state.users[state.users.current])
    : null;
};

export const buildUser = (user) => {
  const newUser = {
    id: user.id,
    ...user.attributes,
  };
  //ATTEMPT: fetchEntities per user
  // for (let key in user.relationships) {
  //   for (let entity in user.relationships[key].data) {
  //     entityFetcher(user.relationships[key].data[entity]);
  //   }
  // }
  for (let key in user.relationships) {
    Object.assign(newUser, { [key]: user.relationships[key].data });
  }
  return newUser;
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
