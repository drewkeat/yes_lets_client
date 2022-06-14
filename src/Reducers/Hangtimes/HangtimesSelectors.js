export const getHangtimesFromUser = (state, user) => {
  const hangtimesMap = user.hangtimes.map((id) => state.hangtimes[id] || null);
  return hangtimesMap.filter((i) => i !== null);
};
