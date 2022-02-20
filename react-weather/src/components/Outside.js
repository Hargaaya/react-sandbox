import React from "react";

const Outside = ({ weatherData }) => {
  const main = weatherData.current.weather[0].main;
  const weatherCases = [
    {
      type: "Snow",
      image:
        "https://media1.giphy.com/media/xUPGcChZRE8p2djeiQ/giphy.gif?cid=ecf05e47bn5oh509ajvhaftpc29xogss7e841pz172y79dqk&rid=giphy.gif&ct=g",
      statement: "Its snowing outside, my good sir.",
    },
    {
      type: "Clouds",
      image:
        "https://media0.giphy.com/media/d5PPYjcb3caPTHM3hv/giphy.gif?cid=ecf05e47uziwdqcmrr455pjddg7emvtflajnovrvnuw57h7o&rid=giphy.gif&ct=g",
      statement: "It do be cloudy outside :)",
    },
    {
      type: "Clear",
      image:
        "https://media2.giphy.com/media/2jMtykai8bZhSAt46z/200w.webp?cid=ecf05e47j7g9e9sy8pcsz1fxz5f8lmiml4ufhvypqpm45lfi&rid=200w.webp&ct=g",
      statement: "The sun is shining",
    },
    {
      type: "Thunderstorm",
      image:
        "https://media3.giphy.com/media/3osxYzIQRqN4DOEddC/giphy.gif?cid=ecf05e47g13q65oazvhbf4tn3vbrgdef11f0vcy8oysvdom7&rid=giphy.gif&ct=g",
      statement: "THUUUNDERSTOOORM",
    },
    {
      type: "Rain",
      image:
        "https://media1.giphy.com/media/xUPGcdhiQf2vbfDCyk/giphy.gif?cid=ecf05e47b688x2d58zq0m8uee8gchw8rdutdqwv2e50ewgd9&rid=giphy.gif&ct=g",
      statement: "WHEN IT RAINS IT POUUURS DIOR DIOR GRRR 🥶",
    },
  ];

  const currentCase = weatherCases.filter((item) => item.type === main)[0];

  return (
    <div id="outside">
      <div
        id="image"
        style={{ backgroundImage: `url(${currentCase.image})` }}
      ></div>
      <h1>{currentCase?.statement}</h1>
    </div>
  );
};

export default Outside;
