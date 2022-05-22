import ACTIONS from "../Actions/actionTypes";
const initialState = {};

const Users = (state = initialState, { type, payload }) => {
  switch (type) {
    case ACTIONS.CREATE_USER:
      debugger;
      state = { ...state, payload };
    default:
      return state;
  }
};

export default Users;
