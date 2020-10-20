import { StyleSheet } from "react-native";

const HomeStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "#000119",
  },
  infoContainer: {
    flex: 1,
  },
  image: {
    position: "absolute",
    overflow: "visible",
    width: "100%",
    height: "100%",
    top: 0,
    opacity: 0.4,
    resizeMode: "contain",
  },
});

export default HomeStyles;
