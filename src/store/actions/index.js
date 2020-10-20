import { weather, options, geolocation } from "./actionTypes";

export function getWeatherData() {
  return { type: weather.GETWEATHERDATA };
}

export function saveWeatherData(data) {
  return {
    type: weather.SAVEWEATHERDATA,
    payload: data,
  };
}

export function saveSetttings(data) {
  return {
    type: options.SAVESETTINGS,
    payload: data,
  };
}

export function getLocation(data) {
  return {
    type: geolocation.GETLOCATION,
    payload: data,
  };
}

export function saveLocation(data) {
  return {
    type: geolocation.SAVELOCATION,
    payload: data,
  };
}
