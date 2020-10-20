/**
 * Drawer Header Component.
 */

import React from "react";
import { Text, View } from "react-native";

import DrawerHeaderStyles from "./DrawerHeader.style";

const DrawerHeader = () => {
  return (
    <View style={DrawerHeaderStyles.container}>
      <View style={DrawerHeaderStyles.textContainer}>
        <Text style={DrawerHeaderStyles.text}>ClimaSense</Text>
      </View>
    </View>
  );
};

export default DrawerHeader;
