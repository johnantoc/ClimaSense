import { StyleSheet } from "react-native";

const TemperatureStringStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  temperature: {
    color: "#000119",
    fontSize: 22,
    fontFamily: "roboto-condensed-light",
  },
  unitContainer: { flexDirection: "row", alignItems: "flex-start" },
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

export default TemperatureStringStyles;
