import { nanoid } from "nanoid/non-secure";

export default class WeatherHourlyData {
  constructor({
    date,
    dateStr,
    hour,
    tempC,
    tempFeelC,
    tempF,
    tempFeelF,
    pressure,
    humidity,
    windSpeed,
    windDeg,
    weather,
    weatherId,
    icon,
    condition,
  }) {
    this.id = nanoid();
    this.date = date;
    this.dateStr = dateStr;
    this.hour = hour;
    this.tempC = tempC;
    this.tempF = tempF;
    this.tempFeelC = tempFeelC;
    this.tempFeelF = tempFeelF;
    this.pressure = pressure;
    this.humidity = humidity;
    this.windSpeed = windSpeed;
    this.windDeg = windDeg;
    this.weather = weather;
    this.weatherId = weatherId;
    this.icon = icon;
    this.condition = condition;
  }
}
