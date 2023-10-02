import React from "react";
import "./index.css";

function WeatherBoxes({days}) {
  const isSmall = window.innerWidth < 600;
  const styles = {
    top: isSmall ? '0px' : '-55px'
  };

  const getDay = date => {
    let weekday = new Array(7);
    weekday[0] = 'Sunday';
    weekday[1] = 'Monday';
    weekday[2] = 'Tuesday';
    weekday[3] = 'Wednesday';
    weekday[4] = 'Thursday';
    weekday[5] = 'Friday';
    weekday[6] = 'Saturday';

    return weekday[new Date(date).getDay()];
  };

  return (
    <ul className="weather-boxes-wrapper" style={styles}>
      {days.map(obj => (
        <li>
          <p>{obj?.date ? getDay(obj.date) : ''}</p>
          <img
           src={obj.icon
            ? require(`../../images/${obj.icon}.svg`)
            : require('../../images/01d.svg')}
           alt="Sun"
          />
         <p>{Math.round(obj.temp - 273.15)}°C</p>
        </li>
      ))}
    </ul>
  )
}

export default WeatherBoxes;
