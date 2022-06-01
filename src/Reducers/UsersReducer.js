import ACTIONS from "../Actions/actionTypes";
const initialState = { loading: false, current: null };

const Users = (state = initialState, { type, payload }) => {
  switch (type) {
    case ACTIONS.ADD_USER:
      state = { ...state, ...payload };
    case ACTIONS.SET_CURRENT_USER:
      let id = Object.keys(payload)[0];
      state = { ...state, current: id };
    default:
      return state;
  }
};

export default Users;
