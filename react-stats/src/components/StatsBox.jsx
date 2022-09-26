import React from "react";
import { VictoryArea, VictoryChart, VictoryAxis } from "victory";
import { AiOutlinePlus } from "react-icons/ai";
import { GrView } from "react-icons/gr";
import { useNavigate } from "react-router-dom";

const StatsBox = ({ statsData, AddToStore }) => {
  let navigate = useNavigate();

  function dateParser(date) {
    let epoch = Date.parse(date);
    let myDate = new Date(epoch);

    return myDate;
  }

  function dataPointGenerator(arr1, arr2) {
    let result = [];
    for (let i = 0; i < arr1.length; i++) {
      result.push({ date: dateParser(arr1[i]), value: arr2[i] });
    }
    return result;
  }

  return (
    <div className="statsbox">
      <div className="statsbox-top">
        <VictoryChart width={1200} scale={{ x: "time", y: "linear" }}>
          <VictoryAxis style={{ tickLabels: { fontSize: 40, fill: "#f8ca56" } }} />
          <VictoryArea
            style={{ data: { fill: "#FFFFFF" } }}
            data={dataPointGenerator(statsData.data.dates, statsData.data.values)}
            y="value"
            x="date"
          />
        </VictoryChart>
      </div>
      <div className="statsbox-bottom">
        <p>{statsData.description}</p>
        <p>${statsData.ticker}</p>
        <p>{statsData.frequency}</p>
        <div className="statsbox-add" onClick={() => AddToStore(statsData.ticker)}>
          <AiOutlinePlus fontSize={12} />
        </div>
        <div
          className="statsbox-visit"
          onClick={() => {
            navigate(`/stat/${statsData.ticker}`);
          }}
        >
          <GrView />
        </div>
      </div>
    </div>
  );
};

export default StatsBox;
