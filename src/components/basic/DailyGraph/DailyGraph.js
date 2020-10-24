import React, { useEffect, useState } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { BarChart, YAxis, XAxis } from "react-native-svg-charts";
import * as shape from "d3-shape";
import * as scale from "d3-scale";
import moment from "moment";

import { Gradient, CustomGrid } from "../GraphComponents/GraphComponents";
import DailyGraphStyles from "./DailyGraph.style";

const DailyGraph = ({ data }) => {
  const graphId = "dailyGraph";
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
    <View style={DailyGraphStyles.container}>
      {!data ? (
        <ActivityIndicator
          size="large"
          color="#FFFFFF"
          style={SkewedCardStyles.loader}
          animating={!data}
        />
      ) : (
        <View style={DailyGraphStyles.outerContainer}>
          <View style={DailyGraphStyles.legendContainer}>
            <Text style={DailyGraphStyles.legend}>Next 7 Days </Text>
          </View>
          <View style={DailyGraphStyles.areaGraphContainer}>
            <YAxis
              data={dataSet}
              numberOfTicks={8}
              yAccessor={({ item }) => item.y}
              style={{ marginBottom: 40 }}
              contentInset={{ top: 16, bottom: 16 }}
              svg={{ fontSize: 10, fill: "rgba(255, 255, 255, 0.8)" }}
            />
            <View style={{ flex: 1, marginLeft: 10 }}>
              <BarChart
                style={DailyGraphStyles.areaGraph}
                data={data}
                svg={{ fill: `url(#${graphId})` }}
                xAccessor={({ item }) => item.x}
                yAccessor={({ item }) => item.y}
                curve={shape.curveNatural}
                yScale={scale.scaleBand}
                contentInset={{ top: 16, bottom: 16 }}
              >
                <Gradient id={graphId} color={"#FFCB2D"} />
                <CustomGrid />
              </BarChart>
              <XAxis
                style={{ height: 40 }}
                data={dataSet}
                xAccessor={({ item }) => item.x}
                contentInset={{ left: 24, right: 20 }}
                formatLabel={(value) => moment.unix(value).format("ddd DD")}
                svg={{
                  fontSize: 8,
                  fill: "rgba(255, 255, 255, 0.8)",
                  originY: 0,
                  y: 6,
                }}
              />
            </View>
          </View>
        </View>
      )}
    </View>
  );
};

export default DailyGraph;
