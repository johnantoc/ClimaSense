import React, { useRef } from "react";
import { View, Text, Animated } from "react-native";
import { RectButton, Swipeable } from "react-native-gesture-handler";

import SwipeableRowStyles from "./SwipeableRow.style";

const SwipeableRow = ({ children, onActionPress, item }) => {
  const swipeRow = useRef();
  const close = () => {
    onActionPress({ item });
    swipeRow.current.close();
  };
  const renderRightActions = () => (
    <View style={{ width: 100, flexDirection: "row" }}>
      <Animated.View style={{ flex: 1, transform: [{ translateX: 0 }] }}>
        <RectButton
          style={[
            SwipeableRowStyles.rightAction,
            { backgroundColor: "#dd2c00" },
          ]}
          onPress={close}
        >
          <Text style={SwipeableRowStyles.actionText}>{"More"}</Text>
        </RectButton>
      </Animated.View>
    </View>
  );

  return (
    <Swipeable
      ref={swipeRow}
      friction={2}
      leftThreshold={30}
      rightThreshold={40}
      renderRightActions={renderRightActions}
    >
      {children}
    </Swipeable>
  );
};

export default SwipeableRow;
