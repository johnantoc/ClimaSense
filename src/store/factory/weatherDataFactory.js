import moment from "moment";

import WeatherData from "../../models/weatherData";
import WeatherDailyData from "../../models/weatherDailyData";
import WeatherHourlyData from "../../models/weatherHourlyData";

/**
 * @description - Converts the temperature from Celsius to Farenheit.
 * @param {Number} tempC - Temperature in Celsius.
 * @returns {Number} - Farenheit Value.
 */
const getFarenheit = (tempC) => {
  const celsius = tempC ?? null;
  return celsius ? parseInt((celsius * (9 / 5) + 32).toFixed(1)) : null;
};

/**
 * @description - Parse Data for current weather.
 * @param {Object} current - Current weather object.
 * @returns {WeatherData} - WeatherData Object.
 */
const parseCurrentData = ({
  dt,
  sunrise,
  sunset,
  temp,
  feels_like,
  pressure,
  humidity,
  uvi,
  wind_speed,
  wind_deg,
  weather,
}) => {
  return new WeatherData({
    date: moment.unix(dt),
    dateStr: moment(new Date()).format("ddd, DD MMM YYYY"),
    sunrise: moment.unix(sunrise).format("hh A"),
    sunset: moment.unix(sunset).format("hh A"),
    pressure,
    humidity,
    uvIndex: uvi,
    windSpeed: wind_speed,
    windDeg: wind_deg,
    tempC: parseInt(temp.toFixed(1)),
    tempF: getFarenheit(temp),
    tempFeelC: parseInt(feels_like.toFixed(1)),
    tempFeelF: getFarenheit(feels_like),
    weather: weather[0].main,
    weatherId: weather[0].id,
    icon: weather[0].icon,
    condition: weather[0].description,
  });
};

/**
 * @description - Parse Data for daily weather.
 * @param {Object} dailyData - Daily weather object.
 * @returns {WeatherDailyData} - WeatherDailyData Object.
 */
const parseDailyData = (dailyData) => {
  return [...dailyData]
    .filter((dayData, index) => index <= 6)
    .map((dayData) => {
      const dataObj = {};
      const {
        dt,
        sunrise,
        sunset,
        temp: { day, min, max, night },
        feels_like,
        pressure,
        humidity,
        wind_speed,
        wind_deg,
        weather,
        uvi,
      } = dayData;
      dataObj.date = moment.unix(dt);
      dataObj.dateStr = dataObj.date.format("ddd DD");
      dataObj.sunrise = moment.unix(sunrise).format("hh A");
      dataObj.sunset = moment.unix(sunset).format("hh A");
      dataObj.tempMaxC = parseInt(max.toFixed(1));
      dataObj.tempMinC = parseInt(min.toFixed(1));
      dataObj.tempDayC = parseInt(day.toFixed(1));
      dataObj.tempNightC = parseInt(night.toFixed(1));
      dataObj.tempFeelDayC = parseInt(feels_like.day.toFixed(1));
      dataObj.tempFeelNightC = parseInt(feels_like.night.toFixed(1));
      dataObj.tempMaxF = getFarenheit(max);
      dataObj.tempMinF = getFarenheit(min);
      dataObj.tempDayF = getFarenheit(day);
      dataObj.tempNightF = getFarenheit(night);
      dataObj.tempFeelDayF = getFarenheit(feels_like.day);
      dataObj.tempFeelNightF = getFarenheit(feels_like.night);
      dataObj.pressure = pressure;
      dataObj.humidity = humidity;
      dataObj.windSpeed = wind_speed;
      dataObj.windDeg = wind_deg;
      dataObj.weather = weather[0].main;
      dataObj.weatherId = weather[0].id;
      dataObj.icon = weather[0].icon;
      dataObj.condition = weather[0].description;
      dataObj.uvIndex = uvi;

      return new WeatherDailyData(dataObj);
    });
};

/**
 * @description - Parse Data for hourly weather.
 * @param {Object} hourlyData - Hourly weather object.
 * @returns {WeatherHourlyData} - WeatherHourlyData Object.
 */
const parseHourlyData = (hourlyData) => {
  return [...hourlyData]
    .filter((hourData, index) => index <= 23)
    .map((hourData) => {
      const dataObj = {};
      const {
        dt,
        temp,
        feels_like,
        pressure,
        humidity,
        wind_speed,
        wind_deg,
        weather,
      } = hourData;
      dataObj.date = moment.unix(dt);
      dataObj.dateStr = dataObj.date.format("ddd, DD MMM YYYY");
      dataObj.hour = dataObj.date.format("hh A");
      dataObj.tempC = parseInt(temp.toFixed(1));
      dataObj.tempFeelC = parseInt(feels_like.toFixed(1));
      dataObj.tempF = getFarenheit(temp);
      dataObj.tempFeelF = getFarenheit(feels_like);
      dataObj.pressure = pressure;
      dataObj.humidity = humidity;
      dataObj.windSpeed = wind_speed;
      dataObj.windDeg = wind_deg;
      dataObj.weather = weather[0].main;
      dataObj.weatherId = weather[0].id;
      dataObj.icon = weather[0].icon;
      dataObj.condition = weather[0].description;

      return new WeatherHourlyData(dataObj);
    });
};

/**
 * @description - Formats Data from api.
 * @param {Object} data - Data from api.
 * @returns {Object} - Weather Data Object.
 */
const formatWeatherData = ({ current, hourly, daily, lat, lon }) => {
  const coordinates = { lat, lon };
  const currentData = parseCurrentData(current);
  const hourlyData = parseHourlyData(hourly);
  const dailyData = parseDailyData(daily);

  return { coordinates, currentData, hourlyData, dailyData };
};

export default formatWeatherData;
