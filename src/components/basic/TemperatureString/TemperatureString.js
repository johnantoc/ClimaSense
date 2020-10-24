import React from "react";
import { View, Text } from "react-native";

import TemperatureStringStyles from "./TemperatureString.style";

const TemperatureString = ({
  temp,
  unit,
  containStyle = {},
  unitStyle = {},
  tempStyle = {},
  degStyle = {},
}) => (
  <View style={[TemperatureStringStyles.container, containStyle]}>
    <Text style={[TemperatureStringStyles.temperature, tempStyle]}>{temp}</Text>
    <View style={[TemperatureStringStyles.unitContainer]}>
      <Text style={[TemperatureStringStyles.degree, degStyle]}>{"o"}</Text>
      <Text style={[TemperatureStringStyles.unit, unitStyle]}>{unit}</Text>
    </View>
  </View>
);

export default TemperatureString;
