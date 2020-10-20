/**
 * Info Card Component.
 */
import React, { useMemo } from "react";
import { View, FlatList } from "react-native";
import { useSelector } from "react-redux";

import HourlyDataCard from "../../basic/HourlyDataCard/HourlyDataCard";
import HourlyDataStyles from "./HourlyData.style";

const HourlyData = () => {
  const {
    weather: { hourlyData },
    settings: { tempUnitF },
  } = useSelector((state) => {
    return {
      weather: state.weatherData,
      settings: state.settings,
    };
  });

  const renderItem = ({ item }) => (
    <HourlyDataCard item={item} tempUnitF={tempUnitF} />
  );
  const renderFunction = useMemo(() => renderItem, [hourlyData, tempUnitF]);

  return (
    <View style={[HourlyDataStyles.container]}>
      <View style={[HourlyDataStyles.mainArea]}>
        <View style={[HourlyDataStyles.listContainer]}>
          <FlatList
            horizontal
            data={hourlyData}
            renderItem={renderFunction}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
    </View>
  );
};

export default HourlyData;
