import { StyleSheet } from "react-native";

const SettingsStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: "#FFFFFF",
  },
  unitSelectContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  textContainer: {
    flex: 0.8,
  },
  label: {
    color: "#000119",
    fontSize: 18,
    fontFamily: "roboto-condensed-regular",
  },
  inputContainer: {
    flex: 0.2,
    alignItems: "flex-end",
  },
});

export default SettingsStyles;
