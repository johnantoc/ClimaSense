/**
 * Details page.
 */

import React from "react";
import { View } from "react-native";
import { useSelector } from "react-redux";

import HourlyGraph from "../../components/basic/HourlyGraph/HourlyGraph";
import DetailsStyles from "./Details.style";

const Details = () => {
  const {
    weather,
    settings: { tempUnitF },
  } = useSelector((state) => {
    return {
      weather: state.weatherData,
      settings: state.settings,
    };
  });
  const { hourlyData, dailyData } = weather;
  const areaGraphData = hourlyData.map((hourData) => ({
    x: hourData.date,
    y: tempUnitF ? hourData.tempF : hourData.tempC,
  }));

  return (
    <View style={[DetailsStyles.container]}>
      <HourlyGraph data={areaGraphData} />
    </View>
  );
};

export default Details;
