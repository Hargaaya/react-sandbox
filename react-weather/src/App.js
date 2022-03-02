import Header from "./components/Header";
import Windows from "./components/Windows";
import Outside from "./components/Outside";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [ready, setReady] = useState(false);
  const key = "";

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
    url.searchParams.set("units", "metric");

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
    <BrowserRouter>
      <div id="container">
        <Header />
        <Routes>
          <Route
            index
            element={ready && <Outside weatherData={weatherData} />}
          />
          <Route
            path="/today"
            element={
              ready && <Windows weatherData={weatherData} display={"hourly"} />
            }
          />
          <Route
            path="/week"
            element={
              ready && <Windows weatherData={weatherData} display={"daily"} />
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
