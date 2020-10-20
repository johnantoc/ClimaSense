/**
 * Button Component.
 */

import React from "react";
import { Text, View, TouchableOpacity } from "react-native";

import ButtonTextStyles from "./ButtonText.style";

const ButtonText = ({ title, onPressHandler, textStyles }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={ButtonTextStyles.buttonView}
      onPress={onPressHandler}
    >
      <Text style={[ButtonTextStyles.button, textStyles]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ButtonText;
