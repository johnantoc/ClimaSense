import { StyleSheet } from "react-native";

const ModalViewStyles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  ribbon: {
    flex: 0.2,
    width: "100%",
    paddingTop: 4,
    paddingHorizontal: 15,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.8)",
  },
  ribbonTextContainer: { flex: 0.3 },
  ribbonText: {
    color: "#000019",
    fontSize: 22,
    alignSelf: "center",
    textTransform: "capitalize",
    fontFamily: "roboto-condensed-regular",
  },
  ribbonTempContainer: {
    flex: 0.2,
    flexDirection: "row",
    justifyContent: "center",
  },
  ribbonTextTemp: {
    color: "#000019",
    fontSize: 26,
    fontFamily: "roboto-condensed-regular",
  },
  ribbonTextDescContainer: { flex: 0.5 },
  ribbonTextDesc: {
    color: "#000019",
    fontSize: 18,
    paddingRight: 15,
    alignSelf: "flex-end",
    textTransform: "capitalize",
    fontFamily: "roboto-condensed-regular",
  },
  ribbonDegree: {
    color: "#000019",
    fontSize: 10,
    fontFamily: "roboto-condensed-light",
  },
  ribbonUnit: {
    color: "#000019",
    fontSize: 18,
    fontFamily: "roboto-condensed-light",
  },
  dataContainer: {
    flex: 0.4,
    width: "100%",
    flexDirection: "row",
    padding: 15,
  },
  cardContainer: { flex: 1 },
  valueContainer: {
    flex: 1,
    justifyContent: "center",
    alignContent: "flex-end",
    flexDirection: "row",
  },
  containStyle: {
    alignItems: "flex-end",
    justifyContent: "center",
    alignContent: "flex-end",
  },
  textStyle: {
    color: "#FFFFFF",
    fontSize: 18,
    fontFamily: "roboto-condensed-regular",
  },
  degree: {
    color: "#FFFFFF",
    fontSize: 10,
    fontFamily: "roboto-condensed-light",
  },
  unit: {
    color: "#FFFFFF",
    fontSize: 18,
    fontFamily: "roboto-condensed-light",
  },
  headStyle: {
    color: "#FFFFFF",
    fontSize: 18,
    alignSelf: "center",
    fontFamily: "roboto-condensed-regular",
  },
  valueStyle: {
    color: "#FFFFFF",
    alignSelf: "flex-end",
    fontSize: 24,
    fontFamily: "roboto-condensed-regular",
  },
  unitStyle: {
    alignSelf: "flex-end",
    color: "#FFFFFF",
    fontSize: 16,
    fontFamily: "roboto-condensed-regular",
  },
});

export default ModalViewStyles;
