import normalize from "json-api-normalizer";

export const callAPI = ({ endpoint, options }) => {
  // const API_ROOT = "http://localhost:3001";
  const API_ROOT = "https://yes-lets-api.herokuapp.com";

  const callAPI = (endpoint, options = {}) => {
    const fullUrl =
      endpoint.indexOf(API_ROOT) === -1 ? API_ROOT + endpoint : endpoint;
    return fetch(fullUrl, options)
      .then((resp) => {
        // TODO: Handle Errors in API Calls
        // debugger;
        return resp.json();
      })
      .then((json) => {
        // debugger;
        return normalize(json);
      });
  };
  return callAPI(endpoint, options);
};
