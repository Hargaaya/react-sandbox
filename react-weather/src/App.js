import Header from "./components/Header";
import Windows from "./components/Windows";
import { useState } from "react";

const key = "5aea0ff31a0b778fdf225480e5f7002f";

function location() {
  const position = navigator.geolocation.getCurrentPosition(
    (pos) => {
      return pos;
    },
    (err) => alert("Enable position for site")
  );
  console.log(position);
}

async function getWeather(pos) {
  let lat = Math.round(pos.coords.latitude * 100) / 100;
  let lon = Math.round(pos.coords.longitude * 100) / 100;
  console.log(lat);

  let res = await fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${key}`
  );

  let data = await res.json();

  console.log("data: ");
  console.log(data);
}

location();

function App() {
  return (
    <div>
      <Header></Header>
      <Windows></Windows>
    </div>
  );
}

export default App;
