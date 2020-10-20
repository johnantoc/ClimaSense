/**
 * Settings page.
 */
import React, { useState, useEffect } from "react";
import { View, Switch } from "react-native";
import { useDispatch } from "react-redux";

import RichText from "../../components/basic/RichText/RichText";
import SettingsStyles from "./Settings.style";
import { saveSetttings } from "../../store/actions/index";

const Settings = () => {
  const dispatch = useDispatch();
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  useEffect(() => {
    dispatch(saveSetttings({ tempUnitF: isEnabled }));
  }, [isEnabled]);

  return (
    <View style={[SettingsStyles.container]}>
      <View style={[SettingsStyles.unitSelectContainer]}>
        <View style={[SettingsStyles.textContainer]}>
          <RichText
            text="Temperature in Farenheit"
            styles={SettingsStyles.label}
          />
        </View>
        <View style={[SettingsStyles.inputContainer]}>
          <Switch
            trackColor={{ false: "#767577", true: "#000119" }}
            thumbColor={isEnabled ? "#FFCB2D" : "#f4f3f4"}
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
      </View>
    </View>
  );
};

export default Settings;
