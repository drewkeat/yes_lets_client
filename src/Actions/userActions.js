import ACTIONS from "./actionTypes";
import { callAPI } from "../Utils/callAPI";

const searchUsers = (query) => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ user: { query: query } }),
  };
  return (dispatch) => {
    dispatch({ type: ACTIONS.USER_LOADING });
    callAPI({
      endpoint: "/users/search",
      options: options,
    }).then((resp) => {
      dispatch({ type: ACTIONS.ADD_USER, payload: resp });
      // NOTE: This may break if multiple users are returned... fix included below vvv
      // for (let user in resp.user) {
      //   dispatch({ type: ACTIONS.ADD_USER, payload: resp });
      // }
      dispatch({ type: ACTIONS.USER_LOADING });
    });
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
    dispatch({ type: ACTIONS.USER_LOADING });
    callAPI({
      endpoint: "/login",
      options: options,
    })
      .then((resp) => {
        dispatch({ type: ACTIONS.ADD_USER, payload: resp });
        dispatch({ type: ACTIONS.SET_CURRENT_USER, payload: resp });
        dispatch({ type: ACTIONS.USER_LOADING });
      })
      .then(() => navigate("/dashboard"));
  };
};

export { loginUser, searchUsers };
