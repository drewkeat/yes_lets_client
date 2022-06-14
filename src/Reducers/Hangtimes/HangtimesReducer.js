import ACTIONS from "../../Actions/actionTypes";
const initialState = {
  loading: false,
};

const Hangtimes = (state = initialState, { type, payload }) => {
  switch (type) {
    case ACTIONS.HANGTIME_LOADING: {
      return { ...state, loading: !state.loading };
    }
    case ACTIONS.ADD_HANGTIME: {
      const hangtime = payload.hangtime;
      return { ...state, ...hangtime };
    }
    default:
      return state;
  }
};

export default Hangtimes;
