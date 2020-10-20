import { geolocation, selectLoc } from "../actions/actionTypes";

const initialState = {
  selectedLoc: null,
};

const location = function (state = initialState, { type, payload }) {
  switch (type) {
    case geolocation.SAVELOCATION:
      return {
        ...state,
        ...payload,
      };
    case selectLoc.CLEARSELECTEDLOC:
      return {
        ...state,
        ...{ selectedLoc: null },
      };
    default:
      return state;
  }
};

export default location;
