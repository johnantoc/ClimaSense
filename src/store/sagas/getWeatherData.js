import { call, put, takeLatest } from "redux-saga/effects";

import callApi from "../../utils/network";
import { owmApi } from "../../constants/api";
import { weather } from "../actions/actionTypes";
import { saveWeatherData } from "../actions/index";
import formatWeatherData from "../factory/weatherDataFactory";
import data from "../../constants/api";

function* getWeatherData({ payload }) {
  const { lat, lon } = payload;
  const params = {
    lat,
    lon,
    exclude: "minutely",
    units: "metric",
  };
  const weatherInfo = yield call(callApi, owmApi, params, "GET");
  const weatherData = yield formatWeatherData(weatherInfo);
  yield put(saveWeatherData(weatherData));
}

export default function* weatherData() {
  yield takeLatest(weather.GETWEATHERDATA, getWeatherData);
}
