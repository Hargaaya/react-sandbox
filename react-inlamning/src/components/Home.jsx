import React from "react";
import garbage from "../garbage.png";

const Home = () => {
  return (
    <div className="Home">
      <h2>Have you ever wanted a daily newsletter with literal garbage in your email?</h2>
      <h3>Welcome to the right place! Sign up today for premium trash 😋🍴🗑</h3>
      <img src={garbage} alt="Literal garbage" />
    </div>
  );
};

export default Home;
