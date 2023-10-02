import React from "react";
import "./index.css";

function CityInput() {

  const styles = {
    top: '-20px'
  };

  return (
    <input
      className="city-input"
      styles={styles}
      type="text"
      placeholder="Enter city name...."
      onChange={() => {}}
    />
  )
}

export default CityInput;
