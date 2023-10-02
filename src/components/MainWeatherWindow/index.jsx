import React from "react";
import "./index.css";
import CityInput from "../CityInput";

function MainWeatherWindow({cityName, data, makeCallData, isError}) {
  const renderRightContent = () => {
    if (!cityName) {
      return <h1 className="title">Weather Forecast</h1>
    }

    return (
      <>
        <span className="today">Today</span>
        <h1 className="city-name">{cityName}</h1>
        <p>Temperature: {data ? Math.round(data.temp - 273.15) : 0}°C</p>
        <p>{data ? data.weather_desc.toLowerCase() : ''}</p>
      </>
    )
  };

  return (
    <section className="weather-top-container">
      <div className="weather-details">
        <img src={cityName
          ? require(`../../images/${data.icon}.svg`)
          : require("../../images/02d.svg") 
          }
          alt="Sun" />
        <div>
          {renderRightContent()}
        </div>
      </div>
      <CityInput isError={isError} isDataAvailable={cityName} makeCallData={makeCallData} />
    </section> 
  )
}

export default MainWeatherWindow;
