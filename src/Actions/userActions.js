const createUser = (userData) => {
  fetch(BASE_URL + "/users", { method: "POST", body: { user: userData } });
};
