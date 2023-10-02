import React from "react";
import { NavLink } from "react-router-dom";
import "./index.css"

function Home() {
  return (
    <div className="home-wrapper">
      <h1>Welcome to Weather App</h1>
      <p>We can find weather reports by <i>city</i> name</p>
      <p>
        Let's go to <NavLink to="/weather">Weather reports</NavLink>
      </p>
    </div>
  )
}

export default Home;
