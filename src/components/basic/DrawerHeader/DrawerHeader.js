/**
 * Drawer Header Component.
 */

import React from "react";
import { Text, View } from "react-native";

import DrawerHeaderStyles from "./DrawerHeader.style";

const DrawerHeader = () => {
  return (
    <View style={DrawerHeaderStyles.container}>
      <Text style={DrawerHeaderStyles.text}>ClimaSense</Text>
    </View>
  );
};

export default DrawerHeader;
