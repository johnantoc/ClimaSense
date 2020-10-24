import React from "react";
import { View } from "react-native";

import ModalViewStyles from "./ModalView.style";
import RichText from "../RichText/RichText";
import { unitsMeasure } from "../../../constants/enum";
import TemperatureString from "../TemperatureString/TemperatureString";

const CardView = ({ head, value, unit = "" }) => (
  <View style={ModalViewStyles.cardContainer}>
    <View style={ModalViewStyles.valueContainer}>
      <RichText text={value} styles={ModalViewStyles.valueStyle} />
      <RichText text={` ${unit}`} styles={ModalViewStyles.unitStyle} />
    </View>
    <View style={{ flex: 1, alignContent: "flex-start" }}>
      <RichText text={head} styles={ModalViewStyles.headStyle} />
    </View>
  </View>
);

const ModelView = ({ moreItem, tempUnitF }) => (
  <View style={ModalViewStyles.container}>
    <View style={ModalViewStyles.ribbon}>
      <View style={ModalViewStyles.ribbonTextContainer}>
        <RichText
          text={moreItem ? moreItem.dateStr : "-"}
          styles={ModalViewStyles.ribbonText}
        />
      </View>
      <TemperatureString
        temp={
          moreItem ? (tempUnitF ? moreItem.tempDayF : moreItem.tempDayC) : "-"
        }
        unit={tempUnitF ? unitsMeasure.tempF : unitsMeasure.tempC}
        containStyle={ModalViewStyles.ribbonTempContainer}
        unitStyle={ModalViewStyles.ribbonUnit}
        tempStyle={ModalViewStyles.ribbonTextTemp}
        degStyle={ModalViewStyles.ribbonDegree}
      />
      <View style={ModalViewStyles.ribbonTextDescContainer}>
        <RichText
          text={moreItem ? moreItem.condition : "-"}
          styles={ModalViewStyles.ribbonTextDesc}
        />
      </View>
    </View>
    <View style={ModalViewStyles.dataContainer}>
      <View style={ModalViewStyles.cardContainer}>
        <View style={{ flex: 1, justifyContent: "flex-end" }}>
          <TemperatureString
            temp={
              moreItem
                ? tempUnitF
                  ? moreItem.tempFeelDayF
                  : moreItem.tempFeelDayC
                : "-"
            }
            unit={tempUnitF ? unitsMeasure.tempF : unitsMeasure.tempC}
            containStyle={ModalViewStyles.containStyle}
            unitStyle={ModalViewStyles.unitStyle}
            tempStyle={ModalViewStyles.valueStyle}
            degStyle={ModalViewStyles.degree}
          />
        </View>
        <View style={{ flex: 1 }}>
          <RichText text="Feels Like" styles={ModalViewStyles.headStyle} />
        </View>
      </View>
      <CardView
        head="Pressure"
        unit={unitsMeasure.pressure}
        value={moreItem ? moreItem.pressure : "-"}
      />
      <CardView
        head="Humidity"
        unit={unitsMeasure.humidity}
        value={moreItem ? moreItem.humidity : "-"}
      />
      <CardView head="UV Index" value={moreItem ? moreItem.uvIndex : "-"} />
    </View>
    <View style={ModalViewStyles.dataContainer}>
      <CardView
        head="Wind"
        unit={unitsMeasure.wind}
        value={moreItem ? moreItem.windSpeed : "-"}
      />
      <CardView head="Sunrise" value={moreItem ? moreItem.sunrise : "-"} />
      <CardView head="Sunset" value={moreItem ? moreItem.sunset : "-"} />
      <CardView
        head="Clouds"
        unit={unitsMeasure.clouds}
        value={moreItem ? moreItem.clouds : "-"}
      />
    </View>
  </View>
);

export default ModelView;
