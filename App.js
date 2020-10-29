import React, { useState, useEffect } from "react";
import { StyleSheet, SafeAreaView, StatusBar } from "react-native";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { enableScreens } from "react-native-screens";
import { Provider } from "react-redux";

import Navigation from "./src/navigations";
import configureStore from "./src/store";

enableScreens();
const store = configureStore();

const fetchFonts = async () => {
  return Font.loadAsync({
    "roboto-condensed-light": require("./src/assets/fonts/RobotoCondensed-Light.ttf"),
    "roboto-condensed-bold": require("./src/assets/fonts/RobotoCondensed-Bold.ttf"),
    "roboto-condensed-regular": require("./src/assets/fonts/RobotoCondensed-Regular.ttf"),
    "roboto-thin": require("./src/assets/fonts/Roboto-Thin.ttf"),
    "roboto-regular": require("./src/assets/fonts/Roboto-Regular.ttf"),
    "roboto-medium": require("./src/assets/fonts/Roboto-Medium.ttf"),
    "roboto-light": require("./src/assets/fonts/Roboto-Light.ttf"),
    "roboto-bold": require("./src/assets/fonts/Roboto-Bold.ttf"),
    "roboto-black": require("./src/assets/fonts/Roboto-Black.ttf"),
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        await SplashScreen.preventAutoHideAsync();
        await fetchFonts();
      } catch (e) {
        console.warn(e);
      } finally {
        setFontLoaded(true);
      }
    })();
  }, []);

  useEffect(() => {
    if (fontLoaded) {
      setTimeout(() => SplashScreen.hideAsync(), 2000);
    }
  }, [fontLoaded]);

  return fontLoaded ? (
    <SafeAreaView style={styles.container}>
      <StatusBar animated barStyle="light-content" />
      <Provider store={store}>
        <Navigation />
      </Provider>
    </SafeAreaView>
  ) : null;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
