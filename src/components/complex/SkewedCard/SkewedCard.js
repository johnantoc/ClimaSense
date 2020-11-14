/**
 * Skewed Card Component.
 */
import React, { useState, useEffect } from "react";
import { View, Image, ActivityIndicator } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";
import * as Location from "expo-location";

import RichText from "../../basic/RichText/RichText";
import SkewedCardStyles from "./SkewedCard.style";
import { getLocation, getWeatherData } from "../../../store/actions";

const SkewedCard = () => {
  const dispatch = useDispatch();
  const [locDenied, setLocDenied] = useState(false);
  const {
    weather,
    settings: { tempUnitF },
    location,
  } = useSelector((state) => {
    return {
      weather: state.weatherData,
      settings: state.settings,
      location: state.location,
    };
  });

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestPermissionsAsync();
      if (status === "granted") {
        const locationData = await Location.getCurrentPositionAsync({
          accuracy: 4,
        });
        dispatch(getLocation(locationData));
      } else {
        setLocDenied(true);
      }
    })();
  }, []);

  useEffect(() => {
    if (location && location.selectedLoc !== null) {
      dispatch(getWeatherData(location));
    }
  }, [location]);

  const temp = weather.currentData
    ? tempUnitF
      ? weather.currentData.tempF
      : weather.currentData.tempC
    : "-";

  return !locDenied || weather.currentData ? (
    <View style={[SkewedCardStyles.outerContainer]}>
      <ActivityIndicator
        size="large"
        color="#FFFFFF"
        style={SkewedCardStyles.loader}
        animating={!weather.currentData}
      />
      <View style={[SkewedCardStyles.container]}>
        <View style={[SkewedCardStyles.mainArea]}>
          <View style={[SkewedCardStyles.dayPlaceStrip]}>
            <View style={[SkewedCardStyles.dayContainer]}>
              <View style={[SkewedCardStyles.textContainer]}>
                <RichText text="Today" styles={SkewedCardStyles.today} />
              </View>
              <View style={[SkewedCardStyles.textContainer]}>
                <RichText
                  text={
                    weather.currentData ? weather.currentData.dateStr : "--"
                  }
                  styles={SkewedCardStyles.date}
                />
              </View>
            </View>
            <View style={[SkewedCardStyles.placeContainer]}>
              <Entypo name="location-pin" size={24} color="#FFFFFF" />
              <RichText
                text={
                  location
                    ? location.selectedLoc
                      ? location.selectedLoc
                      : location.city
                      ? location.city
                      : location.name
                    : "--"
                }
                styles={SkewedCardStyles.place}
              />
            </View>
          </View>
          <View style={[SkewedCardStyles.temperatureContainer]}>
            <RichText text={temp} styles={SkewedCardStyles.temperature} />
            <RichText text="o" styles={SkewedCardStyles.degree} />
            <RichText
              text={tempUnitF ? "F" : "C"}
              styles={SkewedCardStyles.temperatureUnit}
            />
          </View>
        </View>
      </View>
    </View>
  ) : (
    <View style={[SkewedCardStyles.errorContainer]}>
      <ActivityIndicator
        size="large"
        color="#FFFFFF"
        style={SkewedCardStyles.loader}
        animating={location && location.selectedLoc !== null}
      />
      <Image
        style={SkewedCardStyles.logo}
        source={require("../../../assets/logowhite.png")}
      />
      <RichText
        text={"Please enable permission to access the location"}
        styles={SkewedCardStyles.errorTxt}
      />
    </View>
  );
};

export default SkewedCard;
