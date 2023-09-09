import { useEffect, useState } from "react";
import WeatherManager from "../utils/WeatherManager";
import {
  Column1,
  DateArticle,
  DateHeader,
  DateSection,
  WeatherHeader,
  WeatherSection,
} from "../styles/DateWeatherStyle";
import { DayArr, MonthArr, WeatherStatus } from "../dummyData";

let date = new Date();
const DateWeatherCompo = () => {
  const [weather, setWeather] = useState({
    icon: null,
    main: null,
  });

  const weatherManager = new WeatherManager();

  useEffect(() => {
    weatherManager.getLocation();
    const fetchWeatherData = async () => {
      const weatherData = await weatherManager.fetchWeather();
      if (weatherData) {
        setWeather(weatherData);
      }
    };
    fetchWeatherData();
  }, []);

  return (
    <Column1>
      <DateSection>
        <DateHeader>
          {date.getDate() >= 10 ? date.getDate() : "0" + date.getDate()}
        </DateHeader>
        <DateArticle>
          <div>{DayArr[date.getDay()]}</div>
          <div>{MonthArr[date.getMonth()]}</div>
        </DateArticle>
      </DateSection>
      <WeatherSection>
        <img
          src={`https://openweathermap.org/img/wn/${weather.icon}.png`}
          alt="img"
        />
        <WeatherHeader>
          {weather && weather.main
            ? WeatherStatus[weather.main]
            : "날씨를 분석 중"}
        </WeatherHeader>
      </WeatherSection>
    </Column1>
  );
};

export default DateWeatherCompo;
