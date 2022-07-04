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
    case ACTIONS.DESTROY_AVAILABILITY: {
      // const availability = payload.availability;
      // TODO: Handle logic for removing this from state
      debugger;
      return { ...state };
    }
    default:
      return state;
  }
};

export default Availabilities;
