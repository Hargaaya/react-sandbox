import Header from "./components/Header";
import Windows from "./components/Windows";
import React, { useState, useEffect } from "react";

function App() {
  const [weatherData, setWeatherData] = useState();
  const key = "80a21c47a4285bedd4a78e3deec371e2";

  function getLocation() {
    return new Promise((resolve) => {
      navigator.geolocation.getCurrentPosition(resolve);
    });
  }

  function fetchWeather(pos) {
    const url = new URL("https://api.openweathermap.org/data/2.5/onecall");
    url.searchParams.set("lat", pos.coords.latitude);
    url.searchParams.set("lon", pos.coords.longitude);
    url.searchParams.set("appid", key);

    return fetch(url).then((res) => res.json());
  }

  function getWeather() {
    getLocation().then((pos) => {
      console.log("fetching");
      fetchWeather(pos).then((data) => {
        setWeatherData(data);
      });
    });
  }

  React.useEffect(() => {
    getWeather();
  }, []);

  return (
    <div className="mx-auto max-w-4xl shadow-md rounded-xl h-[800px] bg-gray-500 p-3 mt-10">
      <Header></Header>
      {/* <Windows weekWeather={daily}></Windows> */}
    </div>
  );
}

export default App;
