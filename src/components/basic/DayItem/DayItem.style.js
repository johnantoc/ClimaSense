import { StyleSheet } from "react-native";

const DayItemStyles = StyleSheet.create({
  item: {
    flex: 1,
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingVertical: 10,
    justifyContent: "space-between",
    alignItems: "center",
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
    textTransform: "capitalize",
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
