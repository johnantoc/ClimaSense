/**
 * SearchIcon Component.
 */
import React, { useState, useEffect, useRef } from "react";
import { View, TextInput, Keyboard, TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { useDispatch } from "react-redux";

import { getSelectedLocation, clearWeatherData } from "../../../store/actions";
import SearchIconStyles from "./SearchIcon.style";

const SearchIcon = () => {
  const textInputBox = useRef();
  const dispatch = useDispatch();
  const [showTextField, setShowTextField] = useState(false);
  const [value, onChangeText] = useState("");

  useEffect(() => {
    Keyboard.addListener("keyboardDidHide", keyboardDidHide);

    return () => {
      Keyboard.removeListener("keyboardDidHide", keyboardDidHide);
    };
  }, []);

  useEffect(() => {
    if (showTextField) {
      textInputBox.current.focus();
    }
  }, [showTextField]);

  const keyboardDidHide = () => {
    setShowTextField(false);
  };

  const onSearchIconPress = () => {
    onChangeText("");
    setShowTextField(true);
  };

  const onSubmit = ({ nativeEvent: { text } }) => {
    dispatch(clearWeatherData());
    dispatch(getSelectedLocation({ selectedLoc: text }));
    Keyboard.dismiss();
  };

  return !showTextField ? (
    <TouchableOpacity
      activeOpacity={0.4}
      onPress={onSearchIconPress}
      style={SearchIconStyles.button}
    >
      <FontAwesome5 name="search-location" size={20} color="#FFFFFF" />
    </TouchableOpacity>
  ) : (
    <View style={SearchIconStyles.inputTextContainer}>
      <TextInput
        style={SearchIconStyles.inputText}
        onChangeText={(text) => onChangeText(text)}
        placeholder="Place Name"
        placeholderTextColor="#FFFFFF"
        value={value}
        returnKeyType="search"
        onSubmitEditing={onSubmit}
        ref={textInputBox}
      />
    </View>
  );
};

export default SearchIcon;
