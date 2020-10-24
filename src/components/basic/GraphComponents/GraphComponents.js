import React from "react";
import { Defs, LinearGradient, Stop, Path, G, Line } from "react-native-svg";

export const Gradient = ({ id, color, stopOpacity = 0 }) => (
  <Defs key={id}>
    <LinearGradient id={id} x1={"0%"} y1={"0%"} x2={"0%"} y2={"100%"}>
      <Stop
        offset={"0%"}
        stopColor={color}
        stopOpacity={stopOpacity ? 0 : 0.7}
      />
      <Stop
        offset={"25%"}
        stopColor={color}
        stopOpacity={stopOpacity ? stopOpacity * 0.4 : 1}
      />
      <Stop
        offset={"50%"}
        stopColor={color}
        stopOpacity={stopOpacity ? stopOpacity * 0.4 : 1}
      />
      <Stop
        offset={"75%"}
        stopColor={color}
        stopOpacity={stopOpacity ? stopOpacity * 0.4 : 1}
      />
      <Stop offset={"100%"} stopColor={color} stopOpacity={1} />
    </LinearGradient>
  </Defs>
);

export const LinePath = ({ line, color, lineWidth = 2 }) => (
  <Path
    key={"line"}
    d={line}
    stroke={color}
    fill={"none"}
    strokeWidth={lineWidth}
  />
);

export const CustomGrid = ({ x, y, data, ticks, filterBy = 1 }) => (
  <G>
    {
      // Horizontal grid
      ticks
        .filter((tick) => tick % filterBy <= 0)
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
