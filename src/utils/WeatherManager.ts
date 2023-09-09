import axios from "axios";

export default class WeatherManager {
  private lat: number;
  private lon: number;
  private key: string;
  private URL: string;

  constructor() {
    this.lat = 35.871845;
    this.lon = 128.634696;
    this.key = "4e8f3698feb25cab1f952a79e25452af";
    this.URL = `https://api.openweathermap.org/data/3.0/onecall?lat=${
      this.lat
    }&lon=${this.lon}&appid=${
      process.env.REACT_APP_WEATHER_API_KEY
        ? process.env.REACT_APP_WEATHER_API_KEY
        : this.key
    }`;
  }

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        this.showPosition,
        this.showError
      );
    } else {
      alert("여기가 어디고?");
    }
  }

  showPosition = (position: any) => {
    this.lat = position.coords.latitude;
    this.lon = position.coords.longitude;
  };

  showError = (error: any) => {
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

  async fetchWeather() {
    try {
      const res = await axios({
        method: "GET",
        url: this.URL,
      });
      return {
        icon: res.data.current.weather[0].icon,
        main: res.data.current.weather[0].main,
      };
    } catch (error) {
      console.error(error);
      return null;
    }
  }
}
