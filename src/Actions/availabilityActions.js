import ACTIONS from "./actionTypes";
import { callAPI } from "../Utils/callAPI";

const fetchAvailability = (availabilityID) => {
  return (dispatch) => {
    callAPI({
      endpoint: "/availabilities/" + availabilityID,
    }).then((resp) =>
      dispatch({ type: ACTIONS.ADD_AVAILABILITY, payload: resp })
    );
  };
};

export { fetchAvailability };
