export const getAvailabilitiesFromIDs = (state, ids) => {
  return ids.map((id) => state.availabilities[id]);
};
