/**
 * Info Card Component.
 */
import React, { useMemo, useEffect, useRef } from "react";
import { View, FlatList, Animated, Easing } from "react-native";
import { useSelector } from "react-redux";

import HourlyDataCard from "../../basic/HourlyDataCard/HourlyDataCard";
import HourlyDataStyles from "./HourlyData.style";

const HourlyData = () => {
  const flexAnim = useRef(new Animated.Value(0.4)).current;
  const {
    weather: { hourlyData },
    settings: { tempUnitF },
    keyboard: { keyboardShown },
  } = useSelector((state) => {
    return {
      weather: state.weatherData,
      settings: state.settings,
      keyboard: state.keyboard,
    };
  });

  useEffect(() => {
    if (keyboardShown) {
      Animated.timing(flexAnim, {
        toValue: 0,
        duration: 300,
        easing: Easing.out(Easing.exp),
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(flexAnim, {
        toValue: 0.4,
        duration: 300,
        easing: Easing.out(Easing.exp),
        useNativeDriver: false,
      }).start();
    }
  }, [keyboardShown]);

  const renderItem = ({ item }) => (
    <HourlyDataCard item={item} tempUnitF={tempUnitF} />
  );
  const renderFunction = useMemo(() => renderItem, [hourlyData, tempUnitF]);

  return (
    <Animated.View style={[HourlyDataStyles.container, { flex: flexAnim }]}>
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
    </Animated.View>
  );
};

export default HourlyData;
