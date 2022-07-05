import _ from "lodash";
import ACTIONS from "../../Actions/actionTypes";
const initialState = {
  loading: false,
};

const Availabilities = (state = initialState, { type, payload }) => {
  switch (type) {
    case ACTIONS.AVAILABILITY_LOADING: {
      return { ...state, loading: !state.loading };
    }
    case ACTIONS.ADD_AVAILABILITY: {
      const availability = payload.availability;
      return { ...state, ...availability };
    }
    case ACTIONS.UPDATE_AVAILABILITY: {
      const availability = payload.availability;
      return { ...state, ...availability };
    }
    case ACTIONS.DESTROY_AVAILABILITY: {
      const newState = { ...state };
      delete newState[_.keys(payload.availability)[0]];
      return { ...newState };
    }
    default:
      return state;
  }
};

export default Availabilities;
