import React, { useState, useEffect } from "react";
import WEATHERSTACK_KEY from "../ACCESSKEYS";
import axios from "axios";

const Weather = ({ name }) => {
  const [data, setData] = useState(null);
  const URL = "http://api.weatherstack.com/current";

  useEffect(() => {
    const params = {
      access_key: WEATHERSTACK_KEY,
      query: name
    };
    let isSubscribed = true;
    axios.get(URL, { params }).then(data => {
      if (isSubscribed) {
        setData(data.data);
      }
    });
    return () => (isSubscribed = false);
  }, [name]);

  if (data && data.hasOwnProperty("success")) {
    console.log("Problem processing api request");
    return null;
  }

  if (data) {
    const {
      temperature,
      weather_icons,
      wind_speed,
      wind_dir,
      weather_descriptions
    } = data.current;

    return (
      <div className="Weather">
        <h2>Weather in {name}</h2>
        <div className="Temperature">
          <b>temperature:</b> {temperature} Celsius
        </div>
        <div className="WeatherImage">
          <img src={weather_icons} alt={weather_descriptions} />
        </div>
        <div className="Wind">
          <b>wind:</b> {wind_speed} kph direction {wind_dir}
        </div>
      </div>
    );
  }

  return null;
};

export default Weather;

console.log(WEATHERSTACK_KEY);
