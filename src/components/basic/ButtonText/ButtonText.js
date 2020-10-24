/**
 * Button Component.
 */

import React from "react";
import { Text } from "react-native";
import { TouchableNativeFeedback } from "react-native-gesture-handler";

import ButtonTextStyles from "./ButtonText.style";

const ButtonText = ({ title, onPressHandler, textStyles }) => {
  return (
    <TouchableNativeFeedback
      activeOpacity={0.8}
      style={ButtonTextStyles.buttonView}
      onPress={onPressHandler}
    >
      <Text style={[ButtonTextStyles.button, textStyles]}>{title}</Text>
    </TouchableNativeFeedback>
  );
};

export default ButtonText;
