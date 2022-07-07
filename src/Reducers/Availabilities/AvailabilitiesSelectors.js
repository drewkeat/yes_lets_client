import _ from "lodash";
export const getAvailabilitiesForUser = (state, user) =>
  _.filter(
    state.availabilities,
    (avail) => _.get(avail, "relationships.user.data.id") === user.id
  );
