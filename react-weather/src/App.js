import Header from "./components/Header";
import Windows from "./components/Windows";
import { useState } from "react";

const key = "5aea0ff31a0b778fdf225480e5f7002f";

function location(callback) {
  navigator.geolocation.getCurrentPosition((p) =>
    callback({ lon: p.coords.longitude, lat: p.coords.latitude })
  );
}

async function getWeather(pos) {
  let lat = Math.round(pos.lat * 100) / 100;
  let lon = Math.round(pos.lon * 100) / 100;

  let res = await fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${key}`
  );

  let data = await res.json();

  let now = new Date(Date.now());

  console.log("date: " + now.toDateString());
  console.log(data.current.dt);
}

location(getWeather);

function App() {
  return (
    <div>
      <Header></Header>
      <Windows></Windows>
    </div>
  );
}

export default App;
