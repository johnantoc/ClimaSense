import axios from "axios";

/**
 * @description - Get request.
 * @param {string} endPoint - Endpont string.
 * @param {Object} data - data Object.
 * @param {Object} options - Option Object.
 * @returns {Object} - Data Object.
 */
function getRequest(endPoint, data = {}) {
  return axios
    .get(endPoint, { params: { ...data } })
    .then((response) => response.data)
    .catch((err) => {
      throw err;
    });
}

/**
 * @description - Post request.
 * @param {string} endPoint - Endpont string.
 * @param {Object} data - data Object.
 * @param {Object} options - Option Object.
 * @returns {bject} - Data Object.
 */
function postRequest(endPoint, data = {}, options = {}) {
  return axios
    .post(endPoint, { ...data }, { ...options })
    .then((response) => response.data)
    .catch((err) => {
      throw err;
    });
}

/**
 * @description - Api requests.
 * @param {string} endPoint - Endpont string.
 * @param {Object} data - Params Object.
 * @param {Object} method - Method Object.
 * @param {Object} options - Option Object.
 * @returns {Object} - Data Object.
 */
export const callApi = (endPoint, data, method, options) => {
  switch (method) {
    case "GET":
      return getRequest(endPoint, data);
    case "POST":
      return postRequest(endPoint, data, options);
    default:
      return getRequest(endPoint);
  }
};

export default callApi;
