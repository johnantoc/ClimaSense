import { options } from "../actions/actionTypes";

const initialState = {
  tempUnitF: false,
};

const settings = function (state = initialState, { type, payload }) {
  switch (type) {
    case options.SAVESETTINGS:
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
};

export default settings;
