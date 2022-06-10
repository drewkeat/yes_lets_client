export const getAvailabilitiesFromUser = (state, user) => {
  return user.availabilities.map((id) => state.availabilities[id]);
};
