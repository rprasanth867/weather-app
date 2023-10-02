import React from "react";
import "./index.css";

function WeatherBoxes() {
  return (
    <ul className="weather-boxes-wrapper">
      <li>
        <p>TuesDay</p>
        <img
          src={require("../../images/01d.svg")}
          alt="Sun"
        />
        <p>24 C</p>
      </li>
      <li>
        <p>TuesDay</p>
        <img
          src={require("../../images/01d.svg")}
          alt="Sun"
        />
        <p>24 C</p>
      </li>
      <li>
        <p>TuesDay</p>
        <img
          src={require("../../images/01d.svg")}
          alt="Sun"
        />
        <p>24 C</p>
      </li>
      <li>
        <p>TuesDay</p>
        <img
          src={require("../../images/01d.svg")}
          alt="Sun"
        />
        <p>24 C</p>
      </li>
    </ul>
  )
}

export default WeatherBoxes;
