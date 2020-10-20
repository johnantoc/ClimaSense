import { StyleSheet } from "react-native";

const HourlyDataStyles = StyleSheet.create({
  container: {
    flex: 0.2,
    backgroundColor: "transparent",
  },
  mainArea: {
    flex: 1,
    overflow: "hidden",
    paddingVertical: 16,
    justifyContent: "center",
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  listContainer: {
    flex: 1,
    backgroundColor: "transparent",
  },
});

export default HourlyDataStyles;
