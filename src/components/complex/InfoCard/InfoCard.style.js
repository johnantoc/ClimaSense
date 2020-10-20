import { StyleSheet } from "react-native";

const InfoCardStyles = StyleSheet.create({
  container: {
    flex: 0.4,
    backgroundColor: "transparent",
  },
  mainArea: {
    flex: 1,
    paddingVertical: 15,
    paddingHorizontal: 15,
    justifyContent: "flex-start",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
  },
  headingContainer: {
    flexDirection: "row",
    paddingBottom: 10,
    justifyContent: "space-between",
    borderBottomColor: "rgba(0, 1, 25, 0.1)",
    borderBottomWidth: 1,
  },
  heading: {
    color: "#000119",
    fontSize: 20,
    fontFamily: "roboto-condensed-bold",
  },
  buttonContainer: {
    paddingTop: 5,
    paddingHorizontal: 15,
    alignItems: "center",
  },
  details: {
    color: "#000119",
    fontSize: 14,
    fontFamily: "roboto-condensed-regular",
  },
  listContainer: {
    flex: 1,
  },
});

export default InfoCardStyles;
