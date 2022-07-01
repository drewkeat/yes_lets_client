import _ from "lodash";
export const selectFriendshipByUsers = (state, id) => {
  return _.filter(
    state.friendships,
    (f) =>
      _.get(f, "relationships.user.data.id") === id ||
      _.get(f, "relationships.friend.data.id") === id
  )[0];
};
