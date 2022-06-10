import ACTIONS from "./actionTypes";
import { API_URL } from "../Utils/constants";

const fetchAvailability = (availabilityID) => {
  return (dispatch) => {
    fetch(API_URL + "/availabilities/" + availabilityID)
      .then((resp) => resp.json())
      .then((json) => {
        dispatch({ type: ACTIONS.ADD_AVAILABILITY, payload: json });
      });
  };
};

export { fetchAvailability };
