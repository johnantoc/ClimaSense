import { combineReducers } from "redux";
import weatherData from "./weatherData";
import settings from "./settings";
import location from "./location";

/**
 * @description - Root reducer.
 * @param {Array} state - State val.
 * @returns {Array} - State values.
 */
const rootReducer = combineReducers({
  weatherData,
  settings,
  location,
});

export default rootReducer;
