import React from "react";

const Window = ({ data, type }) => {
  let temp = 0;
  let date = 0;

  type === "daily"
    ? (temp = Math.floor(data.temp.day - 273))
    : (temp = Math.floor(data.temp - 273));

  type === "daily"
    ? (date = new Date(data.dt * 1000).toLocaleDateString())
    : (date = new Date(data.dt * 1000).toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }));

  return (
    <div id="window">
      <h1>{date}</h1>
      <h2>{temp + " Grader"}</h2>
      <img
        src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
        alt={data.weather[0].description}
      />
      <p>{data.weather[0].description}</p>
    </div>
  );
};

export default Window;

// {
//   "dt": 1645009200,
//   "sunrise": 1644993648,
//   "sunset": 1645027880,
//   "moonrise": 1645025640,
//   "moonset": 1644996120,
//   "moon_phase": 0.5,
//   "temp": {
//       "day": 277.01,
//       "min": 274.36,
//       "max": 277.22,
//       "night": 274.36,
//       "eve": 275.23,
//       "morn": 276.61
//   },
//   "feels_like": {
//       "day": 273.6,
//       "night": 270.56,
//       "eve": 271.75,
//       "morn": 272.37
//   },
//   "pressure": 987,
//   "humidity": 88,
//   "dew_point": 275.21,
//   "wind_speed": 8.07,
//   "wind_deg": 184,
//   "wind_gust": 15.24,
//   "weather": [
//       {
//           "id": 616,
//           "main": "Snow",
//           "description": "rain and snow",
//           "icon": "13d"
//       }
//   ],
//   "clouds": 50,
//   "pop": 1,
//   "rain": 10.95,
//   "snow": 1.7,
//   "uvi": 0.65
// }
