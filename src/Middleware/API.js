import { normalize } from "json-api-normalizer";

//Declare base API URL
const API_ROOT = "http://localhost:3001";

export const API_DATA_REQUEST = "API_DATA_REQUEST";
export const API_DATA_SUCCESS = "API_DATA_SUCCESS";
export const API_DATA_FAILURE = "API_DATA_FAILURE";

//The function below takes the essential "fetch" options, and returns a normalized JSON object for redux (or ejected promise json)
function callApi(endpoint, options = {}) {
  const fullUrl =
    endpoint.indexOf(API_ROOT) === -1 ? API_ROOT + endpoint : endpoint;
  // debugger;
  return fetch(fullUrl, options).then((response) =>
    response.json().then((json) => {
      // debugger;
      if (!response.ok) {
        return Promise.reject(json);
      }

      return Object.assign({}, normalize(json, { endpoint }));
    })
  );
}

export const CALL_API = Symbol("Call API");

//DEFAULT EXPORT: API takes the redux store, and passes the next API and Action onward
export default function (store) {
  return function nxt(next) {
    return function call(action) {
      const callAPI = action[CALL_API];

      if (typeof callAPI === "undefined") {
        return next(action);
      }

      let { endpoint } = callAPI;
      const { options } = callAPI;

      if (typeof endpoint === "function") {
        endpoint = endpoint(store.getState());
      }

      if (typeof endpoint !== "string") {
        throw new Error("Specify a string endpoint URL.");
      }

      const actionWith = (data) => {
        const finalAction = Object.assign({}, action, data);
        delete finalAction[CALL_API];
        return finalAction;
      };

      next(actionWith({ type: API_DATA_REQUEST, endpoint }));

      return callApi(endpoint, options || {}).then(
        (response) =>
          next(actionWith({ response, type: API_DATA_SUCCESS, endpoint })),
        (error) =>
          next(
            actionWith({
              type: API_DATA_FAILURE,
              error: error.message || "Something bad happened",
            })
          )
      );
    };
  };
}
