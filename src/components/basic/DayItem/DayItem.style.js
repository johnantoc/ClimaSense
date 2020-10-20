import { StyleSheet } from "react-native";

const DayItemStyles = StyleSheet.create({
  item: {
    flex: 1,
    flexDirection: "row",
    paddingHorizontal: 15,
    paddingVertical: 2,
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomColor: "rgba(0, 1, 25, 0.1)",
    borderBottomWidth: 1,
  },
  temperatureContainer: {
    flex: 0.2,
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
  iconContainer: {
    flex: 0.2,
  },
  descContainer: {
    flex: 0.4,
  },
  desc: {
    color: "#000119",
    fontSize: 14,
    fontFamily: "roboto-condensed-light",
  },
  dateContainer: {
    flex: 0.2,
    alignItems: "flex-end",
  },
  date: {
    color: "#000119",
    fontSize: 14,
    fontFamily: "roboto-condensed-regular",
  },
});

export default DayItemStyles;
