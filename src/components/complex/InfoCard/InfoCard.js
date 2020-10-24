/**
 * Info Card Component.
 */
import React, { useMemo, useState } from "react";
import { View, Text, Modal, TouchableHighlight } from "react-native";
import { FlatList, RectButton } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";
import { useSelector } from "react-redux";

import RichText from "../../basic/RichText/RichText";
import ButtonText from "../../basic/ButtonText/ButtonText";
import SwipeableRow from "../../basic/SwipeableRow/SwipeableRow";
import DayItem from "../../basic/DayItem/DayItem";
import ModalView from "../../basic/ModalView/ModalView";
import InfoCardStyles from "./InfoCard.style";

const InfoCard = ({ navigation }) => {
  const [moreItem, setMoreItem] = useState();
  const [modalVisible, setModalVisible] = useState(false);

  const {
    weather: { dailyData },
    settings: { tempUnitF },
  } = useSelector((state) => {
    return {
      weather: state.weatherData,
      settings: state.settings,
    };
  });

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const onAction = ({ item }) => {
    const {
      sunrise,
      sunset,
      tempDayC,
      tempDayF,
      tempFeelDayC,
      tempFeelDayF,
      condition,
      pressure,
      humidity,
      windSpeed,
      uvIndex,
      clouds,
      dateStr,
    } = item;
    setMoreItem({
      sunrise,
      sunset,
      tempDayC,
      tempDayF,
      tempFeelDayC,
      tempFeelDayF,
      condition,
      pressure,
      humidity,
      windSpeed,
      uvIndex,
      clouds,
      dateStr,
    });
    toggleModal();
  };

  const renderItem = ({ item }) => (
    <SwipeableRow onActionPress={onAction} item={item}>
      <RectButton style={InfoCardStyles.dayItemContainer}>
        <DayItem item={item} tempUnitF={tempUnitF} />
      </RectButton>
    </SwipeableRow>
  );

  const ItemSeparator = () => <View style={InfoCardStyles.separator} />;
  const renderFunction = useMemo(() => renderItem, [dailyData, tempUnitF]);

  return (
    <View style={[InfoCardStyles.container]}>
      <View style={[InfoCardStyles.mainArea]}>
        <View style={[InfoCardStyles.headingContainer]}>
          <View style={InfoCardStyles.headingView}>
            <RichText text="Forecast" styles={InfoCardStyles.heading} />
          </View>
          <View style={InfoCardStyles.buttonContainer}>
            <ButtonText
              textStyles={InfoCardStyles.details}
              title="Graphical View"
              onPressHandler={() => navigation.navigate("Details")}
            />
          </View>
        </View>
        <FlatList
          data={dailyData}
          renderItem={renderFunction}
          ItemSeparatorComponent={ItemSeparator}
          keyExtractor={(item) => item.id}
        />
      </View>
      <View style={InfoCardStyles.modalContainer}>
        <Modal animationType="slide" transparent={true} visible={modalVisible}>
          <View style={InfoCardStyles.centeredView}>
            <View style={InfoCardStyles.modalView}>
              <LinearGradient
                colors={["#000019", "grey", "#000019"]}
                locations={[0.3, 0.5, 0.7]}
                style={{ flex: 1, width: "100%" }}
              >
                <View style={{ flex: 1, width: "100%" }}>
                  <ModalView moreItem={moreItem} tempUnitF={tempUnitF} />
                </View>
                <TouchableHighlight
                  onPress={toggleModal}
                  underlayColor="#ffffff"
                >
                  <View style={[InfoCardStyles.openButton]}>
                    <Text style={InfoCardStyles.textStyle}>Hide</Text>
                  </View>
                </TouchableHighlight>
              </LinearGradient>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
};

export default InfoCard;
