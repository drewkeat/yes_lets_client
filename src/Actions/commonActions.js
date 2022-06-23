// import ACTIONS from "./actionTypes";
import { callAPI } from "../Utils/callAPI";
import pluralize from "pluralize";
// import _ from "lodash";

const fetchEntity = (id, type) => {
  const endpoint = `/${pluralize(type)}/${id}`;
  const typeUpper = type.toUpperCase();
  // const SET_LOADING = eval(`${ACTIONS}.${entityType}_LOADING`);
  // const ADD_ENTITY = eval(`${ACTIONS}.ADD_${entityType}`);
  return (dispatch) => {
    dispatch({ type: `${typeUpper}_LOADING` });
    callAPI({
      endpoint: `${endpoint}/`,
    }).then((resp) => {
      dispatch({ type: `ADD_${typeUpper}`, payload: resp });
      dispatch({ type: `${typeUpper}_LOADING` });
    });
  };
};

// QUESTION: Why doesn't this method work for user -> dashboard?
const createEntity = (entityData, type, navigate, finalEndpoint) => {
  const endpoint = `/${pluralize(type)}`;
  const typeUpper = type.toUpperCase();
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ [type]: entityData }),
  };
  return (dispatch) => {
    dispatch({ type: `${typeUpper}_LOADING` });
    callAPI({
      endpoint: endpoint,
      options: options,
    }).then((resp) => {
      debugger;
      dispatch({ type: `ADD_${typeUpper}`, payload: resp });
      type === "user" && dispatch({ type: `SET_CURRENT_USER`, payload: resp });
      dispatch({ type: `${typeUpper}_LOADING` });
      navigate && navigate(finalEndpoint);
    });
  };
};

const updateEntity = (entityData, type, navigate, finalEndpoint) => {
  const endpoint = `/${pluralize(type)}/${entityData.user_id}`;
  const typeUpper = type.toUpperCase();
  const options = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ [type]: entityData }),
  };
  return (dispatch) => {
    dispatch({ type: `${typeUpper}_LOADING` });
    callAPI({
      endpoint: endpoint,
      options: options,
    }).then((resp) => {
      dispatch({ type: `UPDATE_${typeUpper}`, payload: resp });
      dispatch({ type: `${typeUpper}_LOADING` });
      navigate && navigate(finalEndpoint);
    });
  };
};

export { fetchEntity, createEntity, updateEntity };
