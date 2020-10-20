import { weather } from "../actions/actionTypes";

const initialState = {
  coordinates: null,
  currentData: null,
  hourlyData: null,
  dailyData: null,
};

const weatherData = function (state = initialState, { type, payload }) {
  switch (type) {
    case weather.SAVEWEATHERDATA:
      return { ...state, ...payload };
    case weather.CLEARWEATHERDATA:
      return {
        ...state,
        coordinates: null,
        currentData: null,
        hourlyData: null,
        dailyData: null,
      };
    default:
      return state;
  }
};

export default weatherData;
