import normalize from "json-api-normalizer";
import ACTIONS from "./actionTypes";
import { API_URL } from "../Utils/constants";
// import { CALL_API } from "../Middleware/API";

const createUser = (userData) => {
  return (dispatch) => {
    fetch(API_URL + "/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user: userData }),
    })
      .then((resp) => resp.json())
      .then((json) => {
        const data = normalize(json, API_URL + "/users");
        dispatch({ type: ACTIONS.CREATE_USER, payload: data });
      });
  };
};

const fetchUser = (userID) => {
  return (dispatch) => {
    fetch(API_URL + "/users/" + userID)
      .then((resp) => resp.json())
      .then((json) => {
        let user = normalize(json).user;
        dispatch({ type: ACTIONS.CREATE_USER, payload: user });
      });
  };
};

export { createUser, fetchUser };
