import Window from "./Window";
import { useState } from "react";

const Windows = () => {
  const [weekWeather, setWeekWeather] = useState([
    {
      id: 1,
      day: "Monday",
      degrees: "23c",
      rain: true,
      cloudy: false,
      snow: false,
      sunny: true,
    },
    {
      id: 2,
      day: "Tuesday",
      degrees: "12c",
      rain: true,
      cloudy: true,
      snow: false,
      sunny: false,
    },
    {
      id: 3,
      day: "Wednesday",
      degrees: "1c",
      rain: false,
      cloudy: false,
      snow: true,
      sunny: false,
    },
    {
      id: 4,
      day: "Thursday",
      degrees: "24c",
      rain: true,
      cloudy: false,
      snow: false,
      sunny: true,
    },
    {
      id: 5,
      day: "Thursday",
      degrees: "24c",
      rain: true,
      cloudy: false,
      snow: false,
      sunny: true,
    },
  ]);

  return (
    <div className="container mx-auto mt-10 flex flex-row flex-wrap justify-center">
      {weekWeather.map((day) => (
        <Window key={day.id} weather={day}></Window>
      ))}
    </div>
  );
};

export default Windows;
