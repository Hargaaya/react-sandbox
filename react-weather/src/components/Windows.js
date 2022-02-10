import Window from "./Window";
import { useState } from "react";

const Windows = ({ weekWeather }) => {
  return (
    <div className="container mx-auto mt-10 flex flex-row flex-wrap justify-center">
      {weekWeather.map((day) => (
        <Window weather={day}></Window>
      ))}
    </div>
  );
};

export default Windows;
