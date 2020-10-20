import { nanoid } from "nanoid/non-secure";

export default class WeatherDailyData {
  constructor({
    sunrise,
    sunset,
    tempMaxC,
    tempMinC,
    tempDayC,
    tempNightC,
    tempFeelDayC,
    tempFeelNightC,
    tempMaxF,
    tempMinF,
    tempDayF,
    tempNightF,
    tempFeelDayF,
    tempFeelNightF,
    pressure,
    humidity,
    windSpeed,
    windDeg,
    weather,
    condition,
    weatherId,
    icon,
    uvIndex,
    dateStr,
  }) {
    this.id = nanoid();
    this.sunrise = sunrise;
    this.sunset = sunset;
    this.tempMaxC = tempMaxC;
    this.tempMinC = tempMinC;
    this.tempDayC = tempDayC;
    this.tempNightC = tempNightC;
    this.tempFeelDayC = tempFeelDayC;
    this.tempFeelNightC = tempFeelNightC;
    this.tempMaxF = tempMaxF;
    this.tempMinF = tempMinF;
    this.tempDayF = tempDayF;
    this.tempNightF = tempNightF;
    this.tempFeelDayF = tempFeelDayF;
    this.tempFeelNightF = tempFeelNightF;
    this.pressure = pressure;
    this.humidity = humidity;
    this.windSpeed = windSpeed;
    this.windDeg = windDeg;
    this.weather = weather;
    this.condition = condition;
    this.weatherId = weatherId;
    this.icon = icon;
    this.uvIndex = uvIndex;
    this.dateStr = dateStr;
  }
}
