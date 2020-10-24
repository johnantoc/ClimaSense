import { StyleSheet } from "react-native";

const DailyGraphStyles = StyleSheet.create({
  container: {
    flex: 0.5,
    paddingHorizontal: 10,
  },
  outerContainer: {
    flex: 1,
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

export default DailyGraphStyles;