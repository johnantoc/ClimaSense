import { call, put, takeLatest } from "redux-saga/effects";

import { geolocation, selectLoc } from "../actions/actionTypes";
import { saveLocation } from "../actions";
import callApi from "../../utils/network";
import {
  locationSearchapi,
  locationReverseapi,
  apiPix,
} from "../../constants/api";
import formatLocationInfo from "../factory/locationInfoFactory";

// import { locationData, locationSearchData, imageBg } from "../../constants/api";

function* getImage(locationInfo) {
  const {
    namedetails: { name },
  } = locationInfo;
  const imgParam = {
    page: 1,
    per_page: 3,
    order: "latest",
    safesearch: true,
    category: "buildings",
    q: encodeURI(name),
    image_type: "photo",
    orientation: "vertical",
  };
  // const imageData = { hits: [{ largeImageURL: imageBg }] };
  let imageData = yield call(callApi, apiPix, imgParam, "GET");
  if (imageData.hits && !imageData.hits.length) {
    const imageParam = {
      ...imgParam,
      q: encodeURI("weather"),
      category: "places",
    };
    imageData = yield call(callApi, apiPix, imageParam, "GET");
  }

  return imageData;
}

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

  const locationInfo = yield call(callApi, locationReverseapi, locParam, "GET");
  // yield locationData;
  const imageData = yield getImage(locationInfo);
  const location = yield formatLocationInfo(locationInfo, imageData);
  yield put(saveLocation({ ...location, selectedLoc: location.name }));
}

function* searchLocationInfo({ payload }) {
  const { selectedLoc } = payload;
  const locParam = {
    q: selectedLoc,
    addressdetails: 1,
    namedetails: 1,
    extratags: 1,
    normalizeaddress: 1,
    postaladdress: 1,
    statecode: 1,
    format: "json",
  };

  const locationInfo = yield call(callApi, locationSearchapi, locParam, "GET");
  if (locationInfo && locationInfo.length) {
    // yield locationSearchData[0];

    const imageData = yield getImage(locationInfo[0]);
    const locationSelected = yield formatLocationInfo(
      locationInfo[0],
      imageData
    );
    yield put(saveLocation({ ...locationSelected, ...payload }));
  }
}

export default function* locationInfo() {
  yield takeLatest(geolocation.GETLOCATION, getLocationInfo);
  yield takeLatest(selectLoc.GETSELECTEDLOC, searchLocationInfo);
}
