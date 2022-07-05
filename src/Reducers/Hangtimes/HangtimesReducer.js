import _ from "lodash";
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
    case ACTIONS.DESTROY_HANGTIME: {
      const newState = { ...state };
      delete newState[_.keys(payload.hangtime)[0]];
      return { ...newState };
    }
    default:
      return state;
  }
};

export default Hangtimes;
