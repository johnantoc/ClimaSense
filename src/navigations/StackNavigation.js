import React, { Fragment } from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screens/Home/Home";
import Details from "../screens/Details/Details";
import Settings from "../screens/Settings/Settings";
import Favorites from "../screens/Favorites/Favorites";
import SearchIcon from "../components/basic/SearchIcon/SearchIcon";
import HamburgerIcon from "../components/basic/HamburgerIcon/HamburgerIcon";

const favStack = createStackNavigator();
const homeStack = createStackNavigator();
const settingsStack = createStackNavigator();
const screenOptionsCommon = {
  headerStyle: {
    backgroundColor: "#000119",
  },
  headerTintColor: "#FFFFFF",
  headerTitleStyle: {
    fontWeight: "bold",
    fontFamily: "roboto-thin",
  },
};

const homeStackScreens = {
  Home: {
    component: Home,
    options: {
      title: "ClimaSense",
    },
    hamburgerMenu: true,
    search: true,
  },
  Details: {
    component: Details,
    options: {
      title: "Details",
    },
    hamburgerMenu: false,
    search: false,
  },
};

const settingsStackScreens = {
  Settings: {
    component: Settings,
    options: {
      title: "Settings",
    },
  },
};

const favStackScreens = {
  Favorites: {
    component: Favorites,
    options: {
      title: "Favorites",
    },
  },
};

/**
 * @description - Home stack screens.
 */
export const HomeStackNavigation = () => (
  <homeStack.Navigator screenOptions={{ ...screenOptionsCommon }}>
    {Object.entries({
      ...homeStackScreens,
    }).map(([name, screen]) => (
      <Fragment key={name}>
        <homeStack.Screen
          name={name}
          component={screen.component}
          options={({ navigation }) => {
            const search = screen.search
              ? {
                  headerRight: () => <SearchIcon />,
                }
              : {};
            const menu = screen.hamburgerMenu
              ? {
                  headerLeft: () => (
                    <HamburgerIcon
                      onPressHandler={() => navigation.openDrawer()}
                    />
                  ),
                }
              : {};
            return {
              ...screen.options,
              ...menu,
              ...search,
            };
          }}
        />
      </Fragment>
    ))}
  </homeStack.Navigator>
);

/**
 * @description - Settings stack screens.
 */
export const SettingsStackNavigation = () => (
  <settingsStack.Navigator screenOptions={{ ...screenOptionsCommon }}>
    {Object.entries({
      ...settingsStackScreens,
    }).map(([name, screen]) => (
      <Fragment key={name}>
        <settingsStack.Screen
          name={name}
          component={screen.component}
          options={({ navigation }) => ({
            ...screen.options,
            headerLeft: () => (
              <HamburgerIcon onPressHandler={() => navigation.openDrawer()} />
            ),
          })}
        />
      </Fragment>
    ))}
  </settingsStack.Navigator>
);

/**
 * @description - Favorites stack screens.
 */
export const FavStackNavigation = () => (
  <favStack.Navigator screenOptions={{ ...screenOptionsCommon }}>
    {Object.entries({
      ...favStackScreens,
    }).map(([name, screen]) => (
      <Fragment key={name}>
        <favStack.Screen
          name={name}
          component={screen.component}
          options={({ navigation }) => ({
            ...screen.options,
            headerLeft: () => (
              <HamburgerIcon onPressHandler={() => navigation.openDrawer()} />
            ),
          })}
        />
      </Fragment>
    ))}
  </favStack.Navigator>
);
