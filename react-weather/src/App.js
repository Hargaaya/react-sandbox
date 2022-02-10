import Header from "./components/Header";
import Windows from "./components/Windows";
import { useState, useEffect } from "react";

function App() {
  const [daily, setDaily] = useState();
  const key = "80a21c47a4285bedd4a78e3deec371e2";

  function location() {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  }

  function fetchWeather() {
    return location().then((pos) => {
      let lat = Math.round(pos.coords.latitude * 100) / 100;
      let lon = Math.round(pos.coords.longitude * 100) / 100;

      return fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=5aea0ff31a0b778fdf225480e5f7002f`
      )
        .then((res) => res.json())
        .then((data) => {
          return data;
        });
    });
  }

  return (
    <div>
      <Header></Header>
      {/* <Windows weekWeather={daily}></Windows> */}
    </div>
  );
}

export default App;
