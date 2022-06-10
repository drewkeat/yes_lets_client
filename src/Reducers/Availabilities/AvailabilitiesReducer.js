import ACTIONS from "../../Actions/actionTypes";
const initialState = {
  loading: false,
};

const Availabilities = (state = initialState, { type, payload }) => {
  switch (type) {
    case ACTIONS.ADD_AVAILABILITY: {
      const availability = payload.availability;
      return { ...state, ...availability };
    }
    default:
      return state;
  }
};

export default Availabilities;
