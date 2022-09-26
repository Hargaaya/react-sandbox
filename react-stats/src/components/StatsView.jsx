import React from "react";
import Axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";
import { VictoryArea, VictoryChart, VictoryAxis, VictoryVoronoiContainer } from "victory";
import "../App.css";

const StatsView = () => {
  const [statsData, setStatsData] = React.useState(null);
  let urlParams = useParams();
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

  React.useEffect(() => {
    const fetchAndSetData = () => {
      let econDbUrl = new URL("https://www.econdb.com/api/series/");
      econDbUrl.pathname += urlParams.ticker + "/";
      econDbUrl.searchParams.set("format", "json");
      Axios.get(econDbUrl).then((resp) => {
        console.log(resp.data);
        setStatsData(resp.data);
      });
    };

    fetchAndSetData();
  }, [urlParams]);

  return (
    <div className="statsview">
      {statsData && (
        <div className="statsview-container">
          <h2>{statsData.description}</h2>
          <VictoryChart
            scale={{ x: "time", y: "linear" }}
            containerComponent={
              <VictoryVoronoiContainer
                labels={({ datum }) => `Date: ${datum.date.getFullYear()}-${datum.date.getMonth()}, Value: ${datum.value}`}
                mouseFollowTooltips
              />
            }
          >
            <VictoryAxis
              dependentAxis={true}
              tickFormat={(t) => {
                if (t > 1000) return Number.parseFloat(t).toExponential(0);
                return t;
              }}
              style={{ tickLabels: { fontSize: 10 } }}
            />
            <VictoryAxis style={{ tickLabels: { fontSize: 10 } }} />
            <VictoryArea
              style={{ data: { fill: "#000000" } }}
              data={dataPointGenerator(statsData.data.dates, statsData.data.values)}
              y="value"
              x="date"
            />
          </VictoryChart>
          <div className="statsview-info">
            <ul>
              <li>
                <h3>Ticker</h3>
                <p>{statsData.ticker}</p>
              </li>
              <li>
                <h3>Geography</h3>
                <p>{statsData.geography}</p>
              </li>
              <li>
                <h3>Frequency</h3>
                <p>{statsData.frequency}</p>
              </li>
              <li>
                <h3>Dataset</h3>
                <p>{statsData.dataset}</p>
              </li>
              <li>
                <h3>Units</h3>
                <p>{statsData.units}</p>
              </li>
            </ul>
          </div>
        </div>
      )}
      <div
        className="statsview-back"
        onClick={() => {
          navigate(-1);
        }}
      >
        <IoIosArrowRoundBack />
      </div>
    </div>
  );
};

export default StatsView;
