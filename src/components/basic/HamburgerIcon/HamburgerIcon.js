/**
 * HamburgerIcon Component.
 */
import React from "react";
import { View, TouchableOpacity } from "react-native";

import HamburgerIconStyles from "./HamburgerIcon.style";

const HamburgerIcon = ({ onPressHandler }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.4}
      onPress={onPressHandler}
      style={HamburgerIconStyles.button}
    >
      <View style={HamburgerIconStyles.line}></View>
      <View style={HamburgerIconStyles.line}></View>
      <View style={HamburgerIconStyles.line}></View>
    </TouchableOpacity>
  );
};

export default HamburgerIcon;
