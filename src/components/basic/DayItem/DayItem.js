import React from "react";
import { Text, View } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

import TemperatureString from "../TemperatureString/TemperatureString";
import DayItemStyles from "./DayItem.style";

const DayItem = ({ item, tempUnitF }) => (
  <View style={DayItemStyles.item}>
    <View style={DayItemStyles.iconContainer}>
      <FontAwesome5 name="cloud-sun" size={24} color="#dd2c00" />
    </View>
    <TemperatureString
      containStyle={{flex: 0.2}}
      temp={tempUnitF ? item.tempMaxF : item.tempMaxC}
      unit={tempUnitF ? "F" : "C"}
    />
    <View style={DayItemStyles.descContainer}>
      <Text style={DayItemStyles.desc}>{item.condition}</Text>
    </View>
    <View style={DayItemStyles.dateContainer}>
      <Text style={DayItemStyles.date}>{item.dateStr}</Text>
    </View>
  </View>
);

export default DayItem;
