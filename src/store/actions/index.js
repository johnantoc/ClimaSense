import { weather, options, geolocation, selectLoc } from "./actionTypes";

export function getWeatherData(data) {
  return {
    type: weather.GETWEATHERDATA,
    payload: data,
  };
}

export function saveWeatherData(data) {
  return {
    type: weather.SAVEWEATHERDATA,
    payload: data,
  };
}

export function clearWeatherData() {
  return { type: weather.CLEARWEATHERDATA };
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

export function getSelectedLocation(data) {
  return {
    type: selectLoc.GETSELECTEDLOC,
    payload: data,
  };
}

export function clearSelectedLocation() {
  return {
    type: selectLoc.CLEARSELECTEDLOC,
  };
}
