import ACTIONS from "../../Actions/actionTypes";
const initialState = {
  loading: false,
};

const Friendships = (state = initialState, { type, payload }) => {
  switch (type) {
    case ACTIONS.FRIENDSHIP_LOADING: {
      return { ...state, loading: !state.loading };
    }
    case ACTIONS.ADD_FRIENDSHIP: {
      const friendship = payload.friendship;
      return { ...state, ...friendship };
    }
    default:
      return state;
  }
};

export default Friendships;
