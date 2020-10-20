import { StyleSheet } from "react-native";

const DrawerHeaderStyles = StyleSheet.create({
  container: {
    flex: 1,
    height: 150,
    marginBottom: 15,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#000119",
    fontSize: 30,
    alignContent: "center",
    fontFamily: "roboto-bold",
  },
});

export default DrawerHeaderStyles;
