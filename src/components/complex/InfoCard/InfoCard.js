/**
 * Info Card Component.
 */
import React, { useMemo } from "react";
import { View, FlatList } from "react-native";
import { useSelector } from "react-redux";

import RichText from "../../basic/RichText/RichText";
import ButtonText from "../../basic/ButtonText/ButtonText";
import DayItem from "../../basic/DayItem/DayItem";
import InfoCardStyles from "./InfoCard.style";

const InfoCard = ({ navigation }) => {
  const {
    weather: { dailyData },
    settings: { tempUnitF },
  } = useSelector((state) => {
    return {
      weather: state.weatherData,
      settings: state.settings,
    };
  });

  const renderItem = ({ item }) => (
    <DayItem item={item} tempUnitF={tempUnitF} />
  );
  const renderFunction = useMemo(() => renderItem, [dailyData, tempUnitF]);

  return (
    <View style={[InfoCardStyles.container]}>
      <View style={[InfoCardStyles.mainArea]}>
        <View style={[InfoCardStyles.headingContainer]}>
          <RichText text="Next 7 Days" styles={InfoCardStyles.heading} />
          <View style={InfoCardStyles.buttonContainer}>
            <ButtonText
              textStyles={InfoCardStyles.details}
              title="Detailed View"
              onPressHandler={() => navigation.navigate("Details")}
            />
          </View>
        </View>
        <View style={[InfoCardStyles.listContainer]}>
          <FlatList
            data={dailyData}
            renderItem={renderFunction}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
    </View>
  );
};

export default InfoCard;
