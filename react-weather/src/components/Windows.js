import Window from "./Window";

const Windows = ({ weatherData }) => {
  return (
    <div className="container mx-auto mt-10 flex flex-row flex-wrap justify-center">
      {weatherData.daily.map(
        (item, i) => i < 5 && <Window key={i} data={item}></Window>
      )}
    </div>
  );
};

export default Windows;
