import React, {useState} from "react";

import "./index.css";
import MainWeatherWindow from "../../components/MainWeatherWindow";
import WeatherBoxes from "../../components/WeatherBoxex";

function Weather() {
  const [cityName, setCityName] = useState("");
  const [daysData, setDaysData] = useState([]);
  const [isError, setIsError] = useState(false);

  // creates the day objects and updates the state
  const updateState = data => {
    const city = data.city.name;
    const days = [];
    const dayIndices = getDayIndices(data);

    for (let i = 0; i < 5; i++) {
      days.push({
        date: data.list[dayIndices[i]].dt_txt,
        weather_desc: data.list[dayIndices[i]].weather[0].description,
        icon: data.list[dayIndices[i]].weather[0].icon,
        temp: data.list[dayIndices[i]].main.temp
      });
    }

    setCityName(city);
    setDaysData(days);
  };

  // returns array with Indices of the next five days in the list
  // from the API data (every day at 12:00 pm)
  const getDayIndices = data => {
    let dayIndices = [];
    dayIndices.push(0);

    let index = 0;
    let tmp = data.list[index].dt_txt.slice(8, 10);

    for (let i = 0; i < 4; i++) {
      while (
        tmp === data.list[index].dt_txt.slice(8, 10) ||
        data.list[index].dt_txt.slice(11, 13) !== '15'
      ) {
        index++;
      }
      dayIndices.push(index);
      tmp = data.list[index].dt_txt.slice(8, 10);
    }
    return dayIndices;
  };

  const makeCallData = async (city) => {
    try {
      const res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=6557810176c36fac5f0db536711a6c52`);
      const data = await res.json();
      if (data.cod === "200") {
        setIsError(false);
        updateState(data);
      } else {
        setIsError(true);
      }
    } catch (err) {
      console.error('Error fetching weathers data', err);
    }
  };

  return (
    <div className="main-weather-wrapper">
      <MainWeatherWindow
        cityName={cityName}
        data={daysData[0]}
        makeCallData={makeCallData}
        isError={isError} />
      <WeatherBoxes
        days={daysData.slice(1)}
      />
    </div>
  );
}

export default Weather;
