import { put, takeLatest } from "redux-saga/effects";

import { weather } from "../actions/actionTypes";
import { saveWeatherData } from "../actions/index";
import formatWeatherData from "../factory/weatherDataFactory";
import data from "../../constants/api";

function* getWeatherData() {
  const weatherData = yield formatWeatherData(data);
  yield put(saveWeatherData(weatherData));
  return weatherData;
}

export default function* weatherData() {
  yield takeLatest(weather.GETWEATHERDATA, getWeatherData);
}
