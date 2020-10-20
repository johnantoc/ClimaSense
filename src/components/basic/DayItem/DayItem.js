import React from "react";
import { Text, View } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

import DayItemStyles from "./DayItem.style";

const DayItem = ({ item, tempUnitF }) => (
  <View style={DayItemStyles.item}>
    <View style={DayItemStyles.iconContainer}>
      <FontAwesome5 name="cloud-sun" size={24} color="#94292b" />
    </View>
    <View style={DayItemStyles.temperatureContainer}>
      <Text style={DayItemStyles.temperature}>
        {tempUnitF ? item.tempMaxF : item.tempMaxC}
      </Text>
      <Text style={DayItemStyles.degree}>{"o"}</Text>
      <Text style={DayItemStyles.unit}>{tempUnitF ? "F" : "C"}</Text>
    </View>
    <View style={DayItemStyles.descContainer}>
      <Text style={DayItemStyles.desc}>{item.condition}</Text>
    </View>
    <View style={DayItemStyles.dateContainer}>
      <Text style={DayItemStyles.date}>{item.dateStr}</Text>
    </View>
  </View>
);

export default DayItem;
