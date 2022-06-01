import ACTIONS from "../Actions/actionTypes";
const initialState = {};

const Users = (state = initialState, { type, payload }) => {
  switch (type) {
    case ACTIONS.ADD_USER:
      state = { ...state, ...payload };
    default:
      return state;
  }
};

export default Users;
