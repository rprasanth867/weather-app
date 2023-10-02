import React from "react";
import WeatherSvg from "../../images/02d.svg";
import { NavLink } from "react-router-dom";

import "./index.css";

function Header() {
  return (
    <header>
      <div className="header-logo-wrapper">
        <img src={WeatherSvg} alt="Sun" />
        <div>
          <h1>Weather App</h1>
          <p>by Prasanth</p>
        </div>
      </div>
      <nav className="header-nav-links-wrapper">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/weather">Weather</NavLink>
      </nav>
    </header>
  )
}

export default Header;
