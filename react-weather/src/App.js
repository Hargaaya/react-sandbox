import Header from "./components/Header";
import Windows from "./components/Windows";
import React, { useState } from "react";

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
    url.searchParams.set("exclude", "minutely");

    return fetch(url).then((res) => res.json());
  }

  React.useEffect(() => {
    const getWeather = () => {
      getLocation().then((pos) => {
        console.log("fetching");
        fetchWeather(pos).then((data) => {
          setWeatherData(data);
        });
      });
    };

    getWeather();
  }, []);

  return (
    <div id="container">
      <Header></Header>
      <Windows weatherData={weatherData}></Windows>
    </div>
  );
}

export default App;
