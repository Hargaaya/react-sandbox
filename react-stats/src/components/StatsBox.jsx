import React from "react";
import { VictoryArea } from "victory";

const StatsBox = ({ statsData }) => {
  return (
    <div className="StatsBox">
      <h1>${statsData.ticker}</h1>
    </div>
  );
};

export default StatsBox;
