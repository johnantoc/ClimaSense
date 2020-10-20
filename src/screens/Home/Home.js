/**
 * Home page.
 */
import React, { useState, useEffect } from "react";
import { View, Dimensions, ImageBackground } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import SkewedCard from "../../components/complex/SkewedCard/SkewedCard";
import InfoCard from "../../components/complex/InfoCard/InfoCard";
import HourlyData from "../../components/complex/HourlyData/HourlyData";
import HomeStyles from "./Home.style";

import { getWeatherData } from "../../store/actions/index";

const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

const Home = (props) => {
  const { navigation } = props;
  const dispatch = useDispatch();
  const [dimensions, setDimensions] = useState({ window, screen });

  const onDimensionChange = ({ window, screen }) => {
    setDimensions({ window, screen });
  };

  const {
    location: { image },
  } = useSelector((state) => {
    return { location: state.location };
  });

  useEffect(() => {
    Dimensions.addEventListener("change", onDimensionChange);
    return () => {
      Dimensions.removeEventListener("change", onDimensionChange);
    };
  });

  useEffect(() => {
    dispatch(getWeatherData());
  }, []);

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
      <View style={HomeStyles.infoContainer}>
        <SkewedCard />
        <HourlyData />
        <InfoCard navigation={navigation} />
      </View>
    </View>
  );
};

export default Home;
