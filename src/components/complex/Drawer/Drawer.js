import React from "react";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { View } from "react-native";

import DrawerHeader from "../../basic/DrawerHeader/DrawerHeader";
import DrawerStyles from "./Drawer.style";

const Drawer = (props) => {
  return (
    <View style={DrawerStyles.container}>
      <DrawerContentScrollView {...props}>
        <DrawerHeader {...props} />
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </View>
  );
};

export default Drawer;
