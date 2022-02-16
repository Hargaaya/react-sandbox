import React from "react";

const Outside = ({ weatherData }) => {
  const statements = (conditions) => {
    switch (conditions) {
      case "Snow":
        return "Oy it's a bit chilly outside 🥶";
        break;

      case "Cloudy":
        return "☁ It do be cloudy today 😤";
        break;

      case "Clear":
        return "Sun shine";
        break;

      case "Thunderstorm":
        return "THUNDERRSTOOORM";
        break;

      case "Rain":
        return "It's raining cats and dogs? WHEN IT RAINS IT POURS DIOR DIOR";
        break;

      default:
        return "HUH?";
        break;
    }
  };
  return (
    <div id="outside">
      <img
        src="https://media2.giphy.com/media/KFUx0Rtz7p0HTzbJ7x/giphy.gif?cid=ecf05e47pubgbyfq3q1m1qe0wg42t2qh1n0mfrb7oxy328xw&rid=giphy.gif&ct=g"
        alt="Brrrrrr"
      />
      <h1>It's a bit chilly outside today 🥶</h1>
    </div>
  );
};

export default Outside;
