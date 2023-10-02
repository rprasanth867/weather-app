import React from "react";

import "./index.css";
import MainWeatherWindow from "../../components/MainWeatherWindow";
import WeatherBoxes from "../../components/WeatherBoxex";

function Weather() {
  return (
    <div className="main-weather-wrapper">
      <MainWeatherWindow />
      <WeatherBoxes />
    </div>
  )
}

export default Weather;
