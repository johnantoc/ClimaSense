import React from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { AreaChart, YAxis, XAxis, Grid } from "react-native-svg-charts";
import { Defs, LinearGradient, Stop, Path, G, Line } from "react-native-svg";
import * as shape from "d3-shape";
import * as scale from "d3-scale";
import moment from "moment";

import HourlyGraphStyles from "./HourlyGraph.style";

const Gradient = ({ index }) => (
  <Defs key={index}>
    <LinearGradient id={"gradient"} x1={"0%"} y1={"0%"} x2={"0%"} y2={"100%"}>
      <Stop offset={"0%"} stopColor={"#FFCB2D"} stopOpacity={0.6} />
      <Stop offset={"100%"} stopColor={"#FFCB2D"} stopOpacity={0.1} />
    </LinearGradient>
  </Defs>
);

const LinePath = ({ line }) => (
  <Path key={"line"} d={line} stroke={"#94292b"} fill={"none"} />
);

const CustomGrid = (props) => {
  const { x, y, data, ticks } = props;
  return (
    <G>
      {
        // Horizontal grid
        ticks
          .filter((tick) => tick % 2 <= 0)
          .map((tick) => {
            return (
              <Line
                key={tick}
                x1={"0%"}
                x2={"100%"}
                y1={y(tick)}
                y2={y(tick)}
                stroke={"rgba(255, 255, 255, 0.1)"}
              />
            );
          })
      }
      {
        // Vertical grid
        data.map((value, index) => (
          <Line
            key={index}
            y1={"0%"}
            y2={"100%"}
            x1={x(value.x)}
            x2={x(value.x)}
            stroke={"rgba(255, 255, 255, 0.1)"}
          />
        ))
      }
    </G>
  );
};

const HourlyGraph = ({ data }) => (
  <View style={HourlyGraphStyles.container}>
    {!data ? (
      <ActivityIndicator
        size="large"
        color="#FFFFFF"
        style={SkewedCardStyles.loader}
        animating={!data}
      />
    ) : (
      <View style={HourlyGraphStyles.outerContainer}>
        <View style={HourlyGraphStyles.legendContainer}>
          <Text style={HourlyGraphStyles.legend}>Next 24 Hour </Text>
        </View>
        <View style={HourlyGraphStyles.areaGraphContainer}>
          <YAxis
            data={data}
            numberOfTicks={4}
            yAccessor={({ item }) => item.y}
            style={{ marginBottom: 40 }}
            contentInset={{ top: 16, bottom: 16 }}
            svg={{ fontSize: 10, fill: "rgba(255, 255, 255, 0.8)" }}
          />
          <View style={{ flex: 1, marginLeft: 10 }}>
            <AreaChart
              style={HourlyGraphStyles.areaGraph}
              data={data}
              animate
              animationDuration={300}
              xAccessor={({ item }) => item.x}
              yAccessor={({ item }) => item.y}
              curve={shape.curveNatural}
              xScale={scale.scaleTime}
              contentInset={{ top: 16, bottom: 16 }}
              svg={{ fill: "url(#gradient)" }}
            >
              <LinePath />
              <Gradient />
              <CustomGrid />
            </AreaChart>
            <XAxis
              style={{ marginHorizontal: -6, height: 40 }}
              data={data}
              numberOfTicks={24}
              xAccessor={({ item }) => item.x}
              contentInset={{ left: 0, right: 14 }}
              formatLabel={(value) => moment.unix(value).format("hh A")}
              svg={{
                fontSize: 8,
                fill: "rgba(255, 255, 255, 0.8)",
                rotation: 45,
                originY: 18,
                y: 10,
              }}
            />
          </View>
        </View>
      </View>
    )}
  </View>
);

export default HourlyGraph;
