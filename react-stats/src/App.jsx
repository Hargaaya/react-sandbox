import "./App.css";
import StatsBox from "./components/StatsBox";
import React from "react";
import Axios from "axios";

function App() {
  const [statsData, setStatsData] = React.useState(null);

  React.useEffect(function fetchData() {
    Axios.get("https://www.econdb.com/api/series/?page=1&format=json").then((resp) => {
      console.log(resp.data);
      let results = resp.data.results;
      setStatsData(results);
    });
  }, []);

  return (
    <div className="App">
      <h1>Stats</h1>
      <div className="StatsBoxContainer">{statsData && statsData.map((elem, i) => <StatsBox statsData={elem} key={i} />)}</div>
    </div>
  );
}

export default App;
