import { StyleSheet } from "react-native";

const HourlyDataCardStyles = StyleSheet.create({
  item: {
    flex: 1,
    width: 104,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFCB2D",
    marginHorizontal: 8,
    paddingVertical: 8,
  },
  hour: {
    color: "#000119",
    fontSize: 12,
    fontFamily: "roboto-condensed-light",
  },
  temperatureContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  temperature: {
    color: "#000119",
    fontSize: 22,
    fontFamily: "roboto-condensed-light",
  },
  degree: {
    color: "#000119",
    fontSize: 10,
    fontFamily: "roboto-condensed-light",
  },
  unit: {
    color: "#000119",
    fontSize: 18,
    fontFamily: "roboto-condensed-light",
  },
});

export default HourlyDataCardStyles;
