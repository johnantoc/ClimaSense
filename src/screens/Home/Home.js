/**
 * Home page.
 */
import React, { useState, useEffect, useRef, useCallback } from "react";
import {
  View,
  Dimensions,
  ImageBackground,
  Animated,
  Easing,
  KeyboardAvoidingView,
} from "react-native";
import { useSelector } from "react-redux";

import SkewedCard from "../../components/complex/SkewedCard/SkewedCard";
import InfoCard from "../../components/complex/InfoCard/InfoCard";
import HourlyData from "../../components/complex/HourlyData/HourlyData";
import HomeStyles from "./Home.style";

const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

const Home = (props) => {
  const { navigation } = props;
  const [dimensions, setDimensions] = useState({ window, screen });
  const flexAnim = useRef(new Animated.Value(0)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const onDimensionChange = ({ window, screen }) => {
    setDimensions({ window, screen });
  };

  const {
    weather,
    location: { image },
  } = useSelector((state) => {
    return { location: state.location, weather: state.weatherData };
  });

  const Animate = useCallback((fadeAnimVal, flexAnimVal) => {
    Animated.sequence([
      Animated.timing(fadeAnim, {
        toValue: fadeAnimVal,
        duration: 300,
        easing: Easing.exp,
        useNativeDriver: false,
      }),
      Animated.timing(flexAnim, {
        toValue: flexAnimVal,
        duration: 1000,
        easing: Easing.out(Easing.exp),
        useNativeDriver: false,
      }),
    ]).start();
  });

  useEffect(() => {
    Dimensions.addEventListener("change", onDimensionChange);
    return () => {
      Dimensions.removeEventListener("change", onDimensionChange);
    };
  });

  useEffect(() => {
    if (!!weather.currentData) {
      Animate(1, 0.6);
    } else {
      Animate(0, 0);
    }
  }, [weather]);

  return (
    <View
      style={[
        HomeStyles.container,
        {
          flexDirection:
            dimensions.window.width > dimensions.window.height
              ? "row"
              : "column",
        },
      ]}
    >
      {image ? (
        <ImageBackground source={{ uri: image }} style={[HomeStyles.image]} />
      ) : null}
      <KeyboardAvoidingView style={{ flex: 1 }} behavior={"padding"}>
        <View style={HomeStyles.infoContainer}>
          <SkewedCard />
          <Animated.View style={{ flex: flexAnim, opacity: fadeAnim }}>
            <HourlyData />
            <InfoCard navigation={navigation} />
          </Animated.View>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default Home;
