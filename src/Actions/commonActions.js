// import ACTIONS from "./actionTypes";
import { callAPI } from "../Utils/callAPI";
import pluralize from "pluralize";

const fetchEntity = (entityID, type) => {
  const endpoint = `/${pluralize(type)}/${entityID}`;
  const typeUpper = type.toUpperCase();
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

const createEntity = (
  entityData,
  type,
  navigate = null,
  finalEndpoint = null
) => {
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
      dispatch({ type: `ADD_${typeUpper}`, payload: resp });
      type === "user" && dispatch({ type: `SET_CURRENT_USER`, payload: resp });
      dispatch({ type: `${typeUpper}_LOADING` });
      navigate && navigate(finalEndpoint);
    });
  };
};

const updateEntity = (entityData, type, navigate, finalEndpoint) => {
  const endpoint = `/${pluralize(type)}/${entityData.id}`;
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

const destroyEntity = (entityID, type, navigate, finalEndpoint) => {
  const endpoint = `/${pluralize(type)}/${entityID}`;
  const typeUpper = type.toUpperCase();
  const options = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  };
  return (dispatch) => {
    dispatch({ type: `${typeUpper}_LOADING` });
    callAPI({
      endpoint: endpoint,
      options: options,
    }).then((resp) => {
      dispatch({ type: `DESTROY_${typeUpper}`, payload: resp });
      dispatch({ type: `${typeUpper}_LOADING` });
      navigate && navigate(finalEndpoint);
    });
  };
};

export { fetchEntity, createEntity, updateEntity, destroyEntity };
