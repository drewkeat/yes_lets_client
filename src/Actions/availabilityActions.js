import ACTIONS from "./actionTypes";
import { callAPI } from "../Utils/callAPI";

const fetchAvailability = (availabilityID) => {
  return (dispatch) => {
    dispatch({ type: ACTIONS.AVAILABILITY_LOADING });
    callAPI({
      endpoint: "/availabilities/" + availabilityID,
    }).then((resp) => {
      dispatch({ type: ACTIONS.ADD_AVAILABILITY, payload: resp });
      dispatch({ type: ACTIONS.AVAILABILITY_LOADING });
    });
  };
};

export { fetchAvailability };
