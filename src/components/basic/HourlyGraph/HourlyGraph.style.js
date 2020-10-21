import { StyleSheet } from "react-native";

const HourlyGraphStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
  outerContainer: {
    flex: 0.3,
  },
  legendContainer: {
    flex: 0.1,
    paddingHorizontal: 20,
    paddingVertical: 4,
  },
  legend: {
    color: "#FFFFFF",
    fontSize: 18,
    fontFamily: "roboto-condensed-light",
  },
  areaGraphContainer: {
    flex: 0.9,
    flexDirection: "row",
  },
  areaGraph: {
    flex: 1,
    height: "100%",
  },
});

export default HourlyGraphStyles;
