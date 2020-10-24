/**
 * Details page.
 */

import React from "react";
import { View } from "react-native";
import { useSelector } from "react-redux";

import DailyGraph from "../../components/basic/DailyGraph/DailyGraph";
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
  const hourlyGraphData = hourlyData.map((hourData) => ({
    x: hourData.date,
    y: tempUnitF ? hourData.tempF : hourData.tempC,
  }));
  const dailyGraphData = dailyData.map((dayData) => ({
    x: dayData.date,
    y: tempUnitF ? dayData.tempDayF : dayData.tempDayC,
  }));
  return (
    <View style={[DetailsStyles.container]}>
      <HourlyGraph data={hourlyGraphData} />
      <DailyGraph data={dailyGraphData} />
    </View>
  );
};

export default Details;
