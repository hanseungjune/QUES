import { useEffect, useState } from "react";
import axios from "axios";
import {
  Column1,
  DateArticle,
  DateHeader,
  DateSection,
  WeatherHeader,
  WeatherSection,
} from "../styles/DateWeatherStyle";

let DayArr = [
  "MONDAY",
  "TUESDAY",
  "WEDNESDAY",
  "THURSDAY",
  "FRIDAY",
  "SATURDAY",
  "SUNDAY",
];
let MonthArr = [
  "JANUARY",
  "FEBRUARY",
  "MARCH",
  "APRIL",
  "MAY",
  "JUNE",
  "JULY",
  "AUGUST",
  "SEPTEMBER",
  "OCTOBER",
  "NOVEMBER",
  "DECEMBER",
];

let WeatherStatus = {
  Thunderstorm: "오늘은 천둥 번개가 몰려올거에요!",
  Drizzle: "오늘은 이슬비가 내려요",
  Rain: "오늘은 비가 와요",
  Snow: "오늘은 눈이 내려요!",
  Atmosphere: "오늘은 안개가 자욱해요",
  Clear: "오늘은 화창해요!",
  Clouds: "오늘은 흐리네요.",
};

let date = new Date();
let lat = 35.871845;
let lon = 128.634696;

const getLocation = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, showError);
  } else {
    alert("여기가 어디고?");
  }
};

const showPosition = (position: any) => {
  lat = position.coords.latitude;
  lon = position.coords.longitude;
};

const showError = (error: any) => {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      alert("요청 거절");
      break;
    case error.POSITION_UNAVAILABLE:
      alert("허용된 위치 정보 아님");
      break;
    case error.TIMEOUT:
      alert("응답 시간 지남");
      break;
    case error.UNKNOWN_ERROR:
      alert("어떤 에러인지 모르겠음");
      break;
  }
};

getLocation();

const URL = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`;

const DateWeatherCompo = () => {
  const [weather, setWeather] = useState({
    icon: null,
    main: null,
  });

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const res = await axios({
          method: "GET",
          url: URL,
        });
        setWeather({
          icon: res.data.current.weather[0].icon,
          main: res.data.current.weather[0].main,
        });
      } catch (error) {
        console.error(error);
      }
    };
    fetchWeather();
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
          style={{ width: "150px", height: "150px" }}
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
