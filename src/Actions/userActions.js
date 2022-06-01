import normalize from "json-api-normalizer";
import ACTIONS from "./actionTypes";
import { API_URL } from "../Utils/constants";

const createUser = (userData) => {
  return (dispatch) => {
    fetch(API_URL + "/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user: userData }),
    })
      .then((resp) => resp.json())
      .then((json) => {
        dispatch({ type: ACTIONS.ADD_USER, payload: json });
        dispatch({ type: ACTIONS.SET_CURRENT_USER, payload: json });
      });
  };
};

const fetchUser = (userID) => {
  return (dispatch) => {
    fetch(API_URL + "/users/" + userID)
      .then((resp) => resp.json())
      .then((json) => {
        dispatch({ type: ACTIONS.ADD_USER, payload: json });
      });
  };
};

export { createUser, fetchUser };
