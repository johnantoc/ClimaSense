import { StyleSheet } from "react-native";

const SkewedCardStyles = StyleSheet.create({
  outerContainer: {
    flex: 0.4,
    backgroundColor: "transparent",
  },
  container: {
    flex: 1,
    backgroundColor: "transparent",
  },
  text: {
    color: "#FFFFFF",
  },
  mainArea: {
    flex: 1,
    opacity: 1,
  },
  dayPlaceStrip: {
    flex: 0.4,
    paddingHorizontal: 15,
    flexDirection: "row",
  },
  dayContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  textContainer: {
    marginBottom: 4,
  },
  today: {
    color: "#FFFFFF",
    fontSize: 18,
    fontFamily: "roboto-condensed-light",
  },
  date: {
    color: "#FFFFFF",
    fontSize: 16,
    fontFamily: "roboto-condensed-light",
  },
  placeContainer: {
    flex: 1,
    paddingTop: 10,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  place: {
    color: "#FFFFFF",
    fontSize: 20,
    marginLeft: 8,
    textTransform: "capitalize",
    fontFamily: "roboto-condensed-light",
  },
  temperatureContainer: {
    flex: 0.6,
    flexDirection: "row",
    paddingLeft: 15,
    paddingRight: 15,
  },
  temperature: {
    color: "#FFFFFF",
    fontSize: 70,
    marginRight: 10,
    fontFamily: "roboto-condensed-light",
  },
  degree: {
    color: "#FFFFFF",
    fontSize: 30,
    fontFamily: "roboto-condensed-light",
  },
  temperatureUnit: {
    color: "#FFFFFF",
    fontSize: 50,
    fontFamily: "roboto-condensed-light",
  },
  loader: {
    position: "absolute",
    top: "20%",
    left: "46%",
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorTxt: {
    color: "#FFFFFF",
    fontSize: 16,
    textTransform: "capitalize",
    fontFamily: "roboto-condensed-light",
  },
  logo: {
    width: 120,
    height: 85,
  },
});

export default SkewedCardStyles;
