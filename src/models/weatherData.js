import { nanoid } from "nanoid/non-secure";

export default class WeatherData {
  constructor({
    dateStr,
    sunrise,
    sunset,
    pressure,
    humidity,
    uvIndex,
    windSpeed,
    windDeg,
    tempC,
    tempF,
    tempFeelC,
    tempFeelF,
    weather,
    weatherId,
    icon,
    condition,
  }) {
    this.id = nanoid();
    this.dateStr = dateStr;
    this.tempC = tempC;
    this.tempF = tempF;
    this.sunrise = sunrise;
    this.sunset = sunset;
    this.pressure = pressure;
    this.humidity = humidity;
    this.uvIndex = uvIndex;
    this.windSpeed = windSpeed;
    this.windDeg = windDeg;
    this.tempFeelC = tempFeelC;
    this.tempFeelF = tempFeelF;
    this.weather = weather;
    this.weatherId = weatherId;
    this.icon = icon;
    this.condition = condition;
  }
}
