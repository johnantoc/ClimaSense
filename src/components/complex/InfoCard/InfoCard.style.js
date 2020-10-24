import { StyleSheet } from "react-native";

const InfoCardStyles = StyleSheet.create({
  container: {
    flex: 0.6,
    backgroundColor: "transparent",
  },
  mainArea: {
    flex: 1,
    paddingVertical: 4,
    paddingHorizontal: 10,
    justifyContent: "flex-start",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
  },
  headingContainer: {
    flexDirection: "row",
    paddingBottom: 4,
    justifyContent: "space-between",
    borderBottomColor: "rgba(255, 255, 255, 0.1)",
    borderBottomWidth: 1,
  },
  headingView: {
    marginTop: 8,
  },
  heading: {
    color: "#000119",
    fontSize: 18,
    fontFamily: "roboto-condensed-bold",
  },
  buttonContainer: {
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
  separator: {
    height: 1,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
  },
  dayItemContainer: {
    flex: 1,
    height: 40,
    backgroundColor: "rgb(255, 255, 255)",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: "65%",
    overflow: "hidden",
  },
  modalView: {
    flex: 1,
    backgroundColor: "rgb(0, 0, 0)",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    overflow: "hidden",
  },
  openButton: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#dd2c00",
    padding: 10,
    overflow: "hidden",
  },
  textStyle: {
    color: "#ffffff",
    fontSize: 18,
    fontFamily: "roboto-condensed-regular",
  },
});

export default InfoCardStyles;
