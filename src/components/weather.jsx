/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import "./weather.css";
import search_icon from "@/assets/search.png";
import clear from "@/assets/clear.png";
import cloud from "@/assets/cloud.png";
import drizzle from "@/assets/drizzle.png";
import rain from "@/assets/rain.png";
import snow from "@/assets/snow.png";
import wind from "@/assets/wind.png";
import humidity from "@/assets/humidity.png";

const Weather = () => {
  const [weatherData, setWeatheData] = useState({});
  const [city, setCity] = useState("");

  const search = async (city) => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${
        import.meta.env.VITE_APP_ID
      }`;

      const res = await fetch(url);
      const data = await res.json();
      setWeatheData({
        humidity: data.main.humidity,
        temperature: data.main.temp,
        wind: data.wind.speed,
        city: data.name,
      });
    } catch (error) {
      alert("city not found");
    }
  };

  let img = "";

  if (weatherData.temperature > 25) {
    img = clear;
  }
  if (weatherData.temperature < 25) {
    img = cloud;
  } else if (weatherData.temperature < 20) {
    img = rain;
  } else if (weatherData.temperature < 15) {
    img = snow;
  }

  function cari() {
    search(city);
  }

  //   useEffect(() => {
  //     search("Jakarta");
  //   }, []);

  return (
    <div className="weather">
      <div className="search-bar">
        <input
          value={city}
          type="text"
          placeholder="Search"
          onChange={(e) => setCity(e.target.value)}
        />
        <img src={search_icon} alt="" onClick={cari} />
      </div>
      <img src={img} alt="" className="weather-icon" />
      <p className="temperature">{weatherData.temperature}</p>
      <p className="city">{weatherData.city}</p>
      <div className="weather-data">
        <div className="col">
          <img src={humidity} alt="" />
          <div>
            <p>{weatherData.humidity}</p>
            <span>Humidity</span>
          </div>
        </div>
        <div className="col">
          <img src={wind} alt="" />
          <div>
            <p>{weatherData.wind}</p>
            <span>wind Speed</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
