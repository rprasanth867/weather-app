import React from "react";
import "./index.css";
import CityInput from "../CityInput";

function MainWeatherWindow() {
  const renderRightContent = () => {
    if (true) {
      return <h1 className="title">Weather Forecast</h1>
    }

    return (
      <>
        <span className="today">Today</span>
        <h1 className="city-name">Hyderabad</h1>
        <p>Temparature: 27 C</p>
        <p>Scattered clouds</p>
      </>
    )
  };

  return (
    <section className="weather-top-container">
      <div className="weather-details">
        <img src={require("../../images/02d.svg")} alt="Sun" />
        <div>
          {renderRightContent()}
        </div>
      </div>
      <CityInput />
    </section> 
  )
}

export default MainWeatherWindow;
