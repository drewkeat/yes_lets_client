import normalize from "json-api-normalizer";
import ACTIONS from "../../Actions/actionTypes";
const initialState = {};

const Availabilities = (state = initialState, { type, payload }) => {
  switch (type) {
    case ACTIONS.ADD_AVAILABILITY: {
      const availability = normalize(payload).availability;
      return { ...state, ...availability };
    }
    default:
      return state;
  }
};

export default Availabilities;
