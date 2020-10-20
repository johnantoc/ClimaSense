/**
 * Rich Text Component.
 */

import React from "react";
import { Text } from "react-native";

import RichTextStyles from "./RichText.style";

const RichText = ({ text, styles }) => {
  return <Text style={[RichTextStyles.text, styles]}>{text}</Text>;
};

export default RichText;
