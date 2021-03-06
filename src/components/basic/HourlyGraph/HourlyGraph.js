import React, { useEffect, useState } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { AreaChart, YAxis, XAxis } from "react-native-svg-charts";
import * as shape from "d3-shape";
import * as scale from "d3-scale";
import moment from "moment";

import {
  Gradient,
  LinePath,
  CustomGrid,
} from "../GraphComponents/GraphComponents";
import HourlyGraphStyles from "./HourlyGraph.style";

const HourlyGraph = ({ data }) => {
  const graphId = "hourlyGraph";
  const dataInit = [...data].map((item) => ({ x: item.x, y: 0 }));
  const [dataSet, setDataSet] = useState(dataInit);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setDataSet(data);
    }, 500);

    return () => {
      clearTimeout(timeOut);
    };
  }, []);

  return (
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
              data={dataSet}
              numberOfTicks={4}
              yAccessor={({ item }) => item.y}
              style={{ marginBottom: 40 }}
              contentInset={{ top: 16, bottom: 16 }}
              svg={{ fontSize: 10, fill: "rgba(255, 255, 255, 0.8)" }}
            />
            <View style={{ flex: 1, marginLeft: 10 }}>
              <AreaChart
                style={HourlyGraphStyles.areaGraph}
                data={dataSet}
                xAccessor={({ item }) => item.x}
                yAccessor={({ item }) => item.y}
                curve={shape.curveNatural}
                xScale={scale.scaleTime}
                contentInset={{ top: 16, bottom: 16 }}
                svg={{ fill: `url(#${graphId})` }}
              >
                <LinePath color={"#94292b"} />
                <Gradient id={graphId} color={"#FFCB2D"} stopOpacity={1} />
                <CustomGrid filterBy={2} />
              </AreaChart>
              <XAxis
                style={{ height: 40 }}
                data={dataSet}
                xAccessor={({ item }) => item.x}
                contentInset={{ left: 6, right: 14 }}
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
};

export default HourlyGraph;
