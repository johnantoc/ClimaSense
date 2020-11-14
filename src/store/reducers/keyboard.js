import { keyboardEv } from "../actions/actionTypes";

const initialState = {
  keyboardShown: false,
};

const keyboard = function (state = initialState, { type, payload }) {
  switch (type) {
    case keyboardEv.SHOWN:
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
};

export default keyboard;
