import ACTIONS from "./actionTypes";
import { API_URL } from "../Utils/constants";
import { callAPI } from "../Utils/callAPI";

const createUser = (userData, navigate) => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ user: userData }),
  };
  return (dispatch) => {
    callAPI({
      endpoint: "/users",
      options: options,
    })
      .then((resp) => {
        dispatch({ type: ACTIONS.ADD_USER, payload: resp });
        dispatch({ type: ACTIONS.SET_CURRENT_USER, payload: resp });
      })
      .then(navigate("/dashboard"));
  };
};

const fetchUser = (userId) => {
  return (dispatch) => {
    callAPI({
      endpoint: "/users/" + userId,
    }).then((resp) => dispatch({ type: ACTIONS.ADD_USER, payload: resp }));
  };
};

const loginUser = (userInfo, navigate) => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ user: userInfo }),
  };
  return (dispatch) => {
    callAPI({
      endpoint: "/login",
      options: options,
    })
      .then((resp) => {
        dispatch({ type: ACTIONS.ADD_USER, payload: resp });
        dispatch({ type: ACTIONS.SET_CURRENT_USER, payload: resp });
      })
      .then(() => navigate("/dashboard"));
  };
};

export { createUser, fetchUser, loginUser };
