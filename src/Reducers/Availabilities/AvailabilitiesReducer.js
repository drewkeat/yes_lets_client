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
    default:
      return state;
  }
};

export default Availabilities;
