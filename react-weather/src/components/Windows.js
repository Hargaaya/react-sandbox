import Window from "./Window";

const Windows = ({ weatherData, display }) => {
  return (
    <div id="windows">
      {display === "daily" &&
        weatherData.daily.map(
          (item, i) =>
            i < 5 && <Window key={i} data={item} type={"daily"}></Window>
        )}
      {display === "hourly" &&
        weatherData.hourly.map(
          (item, i) =>
            i < 5 && <Window key={i} data={item} type={"hourly"}></Window>
        )}
    </div>
  );
};

export default Windows;
