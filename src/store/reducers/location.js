import { geolocation } from "../actions/actionTypes";

const initialState = {};

const location = function (state = initialState, { type, payload }) {
  switch (type) {
    case geolocation.SAVELOCATION:
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
};

export default location;
