export const getHangtimesFromUser = (state, user) => {
  const hangtimesMap = user.hangtimes.map((id) => state.hangtimes[id] || null);
  return hangtimesMap.filter((i) => i !== null);
};

export const getHangtimeUsers = (state, hangtimeID) => {
  const hangtime = state.hangtimes[hangtimeID];
  debugger;
  return hangtime.relationships.users.data.map((user) => state.users[user.id]);
};
