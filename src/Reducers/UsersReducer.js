import ACTIONS from "../Actions/actionTypes";
import normalize from "json-api-normalizer";

const initialState = {
  loading: false,
  current: null,
};

const Users = (state = initialState, { type, payload }) => {
  switch (type) {
    case ACTIONS.ADD_USER: {
      const user = normalize(payload).user;
      return { ...state, ...user };
    }
    case ACTIONS.SET_CURRENT_USER: {
      const user = normalize(payload).user;
      let id = Object.keys(user)[0];
      return { ...state, current: parseInt(id) };
    }
    default:
      return state;
  }
};

export default Users;
