import { call, put, takeLatest } from "redux-saga/effects";

import { geolocation } from "../actions/actionTypes";
import { saveLocation } from "../actions/index";
// import callApi from "../../utils/network";
// import { locationapi, apiPix } from "../../constants/api";
import formatLocationInfo from "../factory/locationInfoFactory";

import { locationData, imageBg } from "../../constants/api";

function* getLocationInfo({ payload }) {
  const {
    coords: { latitude, longitude },
  } = payload;

  const locParam = {
    lat: latitude,
    lon: longitude,
    zoom: 10,
    namedetails: 1,
    extratags: 1,
    normalizeaddress: 1,
    postaladdress: 1,
    statecode: 1,
    showdistance: 1,
    format: "json",
  };

  // const locationInfo = yield call(callApi, locationapi, locParam, "GET");
  // const location = yield formatLocationInfo(locationInfo);
  yield locationData;

  const {
    address: { city },
  } = locationData;
  const imgParam = {
    page: 1,
    per_page: 3,
    order: "latest",
    safesearch: true,
    category: "nature",
    q: encodeURI(city),
    image_type: "photo",
    orientation: "vertical",
  };
  const imageData = { hits: [{ largeImageURL: imageBg }] };
  // let imageData = yield call(callApi, apiPix, imgParam, "GET");
  // if (imageData.hits && !imageData.hits.length) {
  //   const imageParam = {
  //     ...imgParam,
  //     q: encodeURI("weather"),
  //   };
  //   imageData = yield call(callApi, apiPix, imageParam, "GET");
  // }
  const location = yield formatLocationInfo(locationData, imageData);
  yield put(saveLocation(location));
}

export default function* locationInfo() {
  yield takeLatest(geolocation.GETLOCATION, getLocationInfo);
}
