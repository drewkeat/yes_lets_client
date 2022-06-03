import ACTIONS from "./actionTypes";
import { API_URL } from "../Utils/constants";
import { CALL_API } from "../Utils/middleware";

// const createUser = (userData, navigate) => {
//   return (dispatch) => {
//     fetch(API_URL + "/users", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ user: userData }),
//     })
//       .then((resp) => resp.json())
//       .then((json) => {
//         dispatch({ type: ACTIONS.ADD_USER, payload: json });
//         dispatch({ type: ACTIONS.SET_CURRENT_USER, payload: json });
//         navigate("/dashboard");
//       });
//   };
// };

const createUser = (userData, navigate) => {
  return {
    CALL_API: {
      endpoint: "/users",
      options: {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user: userData }),
      },
    },
  };
};

const fetchUser = (userID) => {
  return {
    CALL_API: {
      endpoint: "/users/" + userID,
    },
  };
};

// const fetchUser = (userID, navigate) => {
//   return (dispatch) => {
//     fetch(API_URL + "/users/" + userID)
//       .then((resp) => resp.json())
//       .then((json) => {
//         dispatch({ type: ACTIONS.ADD_USER, payload: json });
//       });
//   };
// };

export { createUser, fetchUser };
