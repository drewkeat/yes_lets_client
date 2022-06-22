import _ from "lodash";
import { createSelector } from "reselect";

export const selectUsers = (state) => {
  let slice = state.users;
  let usersArr = _.filter(slice, (k) => k.id && k.id !== state.users.current);
  return usersArr;
};
export const selectUserByID = (state, id) => state.users[id];

export const selectCurrentUser = (state) => {
  const userID = state.users.current;
  return userID ? buildUser(state.users[userID]) : null;
};

export const buildUser = (user) => {
  const newUser = {
    id: user.id,
    ...user.attributes,
  };
  for (let key in user.relationships) {
    Object.assign(newUser, { [key]: [] });
    user.relationships[key].data.forEach((entity) => {
      Object.assign(newUser, { [key]: [...newUser[key], entity.id] });
    });
  }
  return newUser;
};

export const selectCurrentFriendIDs = createSelector(
  selectCurrentUser,
  (currentUser) => {
    return currentUser.friends;
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
