import Header from "./components/Header";
import Windows from "./components/Windows";
import Outside from "./components/Outside";
import React, { useState } from "react";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [ready, setReady] = useState(false);
  const key = "80a21c47a4285bedd4a78e3deec371e2";
  const [mode, setMode] = useState({ daily: true, hourly: false });

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
    url.searchParams.set("lang", "se");

    return fetch(url).then((res) => res.json());
  }

  React.useEffect(() => {
    const getWeather = () => {
      getLocation().then((pos) => {
        console.log("fetching");
        fetchWeather(pos).then((data) => {
          setWeatherData(data);
          setReady(true);
        });
      });
    };

    getWeather();
  }, []);

  return (
    <div id="container">
      <Header></Header>
      {ready && <Windows weatherData={weatherData} display={mode}></Windows>}
      {/* {ready && <Outside weatherData={weatherData}></Outside>} */}
    </div>
  );
}

export default App;
