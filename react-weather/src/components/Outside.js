import React from "react";

const Outside = ({ weatherData }) => {
  const main = weatherData.current.weather[0].main;

  const statements = (conditions) => {
    switch (conditions) {
      case "Snow":
        return {
          statement: "Oy it's a bit chilly outside 🥶",
          image:
            "https://media2.giphy.com/media/KFUx0Rtz7p0HTzbJ7x/giphy.gif?cid=ecf05e47pubgbyfq3q1m1qe0wg42t2qh1n0mfrb7oxy328xw&rid=giphy.gif&ct=g",
        };
        break;

      case "Clouds":
        return {
          statement: "☁ It do be cloudy today ☁",
          image:
            "https://media2.giphy.com/media/KFUx0Rtz7p0HTzbJ7x/giphy.gif?cid=ecf05e47pubgbyfq3q1m1qe0wg42t2qh1n0mfrb7oxy328xw&rid=giphy.gif&ct=g",
        };
        break;

      case "Clear":
        return {
          statement: "Sun shine",
          image:
            "https://media2.giphy.com/media/KFUx0Rtz7p0HTzbJ7x/giphy.gif?cid=ecf05e47pubgbyfq3q1m1qe0wg42t2qh1n0mfrb7oxy328xw&rid=giphy.gif&ct=g",
        };
        break;

      case "Thunderstorm":
        return {
          statement: "THUNDERRSTOOORM",
          image:
            "https://media2.giphy.com/media/KFUx0Rtz7p0HTzbJ7x/giphy.gif?cid=ecf05e47pubgbyfq3q1m1qe0wg42t2qh1n0mfrb7oxy328xw&rid=giphy.gif&ct=g",
        };
        break;

      case "Rain":
        return {
          statement:
            "It's raining cats and dogs? WHEN IT RAINS IT POURS DIOR DIOR",
          image:
            "https://media2.giphy.com/media/KFUx0Rtz7p0HTzbJ7x/giphy.gif?cid=ecf05e47pubgbyfq3q1m1qe0wg42t2qh1n0mfrb7oxy328xw&rid=giphy.gif&ct=g",
        };
        break;

      default:
        return {
          statement: "HUH?",
          image:
            "https://media2.giphy.com/media/KFUx0Rtz7p0HTzbJ7x/giphy.gif?cid=ecf05e47pubgbyfq3q1m1qe0wg42t2qh1n0mfrb7oxy328xw&rid=giphy.gif&ct=g",
        };
        break;
    }
  };

  return (
    <div id="outside">
      <img src={statements(main).image} alt="Brrrrrr" />
      <h1>{statements(main).statement}</h1>
    </div>
  );
};

export default Outside;
