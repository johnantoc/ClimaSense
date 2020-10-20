import { spawn } from "redux-saga/effects";
import weatherData from "./getWeatherData";
import locationInfo from "./getLocationInfo";

/**
 * @description - Core saga function.
 */
function* rootSaga() {
  yield spawn(weatherData);
  yield spawn(locationInfo);
}

export default rootSaga;
