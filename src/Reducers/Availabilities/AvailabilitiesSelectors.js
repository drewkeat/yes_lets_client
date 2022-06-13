export const getAvailabilitiesFromUser = (state, user) => {
  const availabilitiesMap = user.availabilities.map(
    (id) => state.availabilities[id] || null
  );
  return availabilitiesMap.filter((i) => i !== null);
};
