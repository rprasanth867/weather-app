import React, { useState } from "react";
import "./index.css";

function CityInput({isDataAvailable, makeCallData, isError}) {
  const [cityInput, setCityInput] = useState("");

  const handleChange = (e) => {
    setCityInput(e.target.value)
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      makeCallData(cityInput);
      setCityInput("");
    }
  };

  const styles = {
    top: isDataAvailable ? '-270px' : '-20px'
  };

  return (
    <input
      className="city-input"
      style={styles}
      type="text"
      value={cityInput}
      placeholder={isError ? "Not found with given city name..." : "Enter city name...."}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
    />
  )
}

export default CityInput;
