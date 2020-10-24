import React, { Fragment } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import {
  HomeStackNavigation,
  SettingsStackNavigation,
  FavStackNavigation,
} from "./StackNavigation";
import Drawer from "../components/complex/Drawer/Drawer";

const DrawerNav = createDrawerNavigator();
const drawerScreens = {
  Home: HomeStackNavigation,
  Settings: SettingsStackNavigation,
  // Favorites: FavStackNavigation,
};

/**
 * @description - Drawer view.
 */
const DrawerNavigation = () => (
  <DrawerNav.Navigator
    initialRouteName="Home"
    drawerContent={(props) => <Drawer {...props} />}
    drawerContentOptions={{
      activeTintColor: "#000119",
      activeBackgroundColor: "#FFCB2D",
      inactiveTintColor: "#FFFFFF",
      contentContainerStyle: {
        backgroundColor: "#000119",
      },
    }}
  >
    {Object.entries({
      ...drawerScreens,
    }).map(([name, component]) => (
      <Fragment key={name}>
        <DrawerNav.Screen name={name} component={component} />
      </Fragment>
    ))}
  </DrawerNav.Navigator>
);

export default DrawerNavigation;
