import ACTIONS from "./actionTypes";
import { callAPI } from "../Utils/callAPI";

// const createUser = (userData, navigate) => {
//   const options = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ user: userData }),
//   };
//   return (dispatch) => {
//     dispatch({ type: ACTIONS.USER_LOADING });
//     callAPI({
//       endpoint: "/users",
//       options: options,
//     })
//       .then((resp) => {
//         dispatch({ type: ACTIONS.ADD_USER, payload: resp });
//         dispatch({ type: ACTIONS.SET_CURRENT_USER, payload: resp });
//         dispatch({ type: ACTIONS.USER_LOADING });
//       })
//       .then(navigate("/dashboard"));
//   };
// };

// const fetchUser = (userId) => {
//   return (dispatch) => {
//     dispatch({ type: ACTIONS.USER_LOADING });
//     callAPI({
//       endpoint: "/users/" + userId,
//     }).then((resp) => {
//       dispatch({ type: ACTIONS.ADD_USER, payload: resp });
//       dispatch({ type: ACTIONS.USER_LOADING });
//     });
//   };
// };

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

export { loginUser };
