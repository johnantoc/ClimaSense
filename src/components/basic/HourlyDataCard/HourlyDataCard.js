import React from "react";
import { Text, View } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

import HourlyDataCardStyles from "./HourlyDataCard.style";

const HourlyDataCard = ({ item, tempUnitF }) => (
  <View style={HourlyDataCardStyles.item}>
    <FontAwesome5 name="cloud-sun" size={24} color="#dd2c00" />
    <Text style={HourlyDataCardStyles.hour}>{item.hour}</Text>
    <View style={HourlyDataCardStyles.temperatureContainer}>
      <Text style={HourlyDataCardStyles.temperature}>
        {tempUnitF ? item.tempF : item.tempC}
      </Text>
      <Text style={HourlyDataCardStyles.degree}>{"o"}</Text>
      <Text style={HourlyDataCardStyles.unit}>{tempUnitF ? "F" : "C"}</Text>
    </View>
  </View>
);

export default HourlyDataCard;
