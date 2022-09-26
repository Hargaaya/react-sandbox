import "./App.css";
import StatsBox from "./components/StatsBox";
import Search from "./components/Search";
import React from "react";
import Axios from "axios";
import { useSearchParams } from "react-router-dom";
import { AiFillCaretLeft, AiFillCaretRight, AiOutlineShoppingCart, AiFillInfoCircle } from "react-icons/ai";

function App() {
  let [query, setQuery] = useSearchParams({ page: 1, search: "" });

  const [statsData, setStatsData] = React.useState(null);
  const [statsStore, addtoStatsStore] = React.useState([]);

  function SearchTerm(value) {
    setQuery({ page: 1, search: value });
  }

  function AddToStore(ticker) {
    if (!statsStore.includes(ticker)) addtoStatsStore((current) => [...current, ticker]);
  }

  React.useEffect(() => {
    console.log("refresh");

    const fetchAndSetData = () => {
      let econDbUrl = new URL("https://www.econdb.com/api/series/");
      econDbUrl.searchParams.set("page", query.get("page"));
      econDbUrl.searchParams.set("search", query.get("search"));
      econDbUrl.searchParams.set("format", "json");
      Axios.get(econDbUrl)
        .then((resp) => {
          let results = resp.data.results;
          setStatsData(results);
        })
        .catch((err) => {
          console.error("something went wrong", err);
        });
    };

    fetchAndSetData();
  }, [query]);

  return (
    <div className="App">
      <span>
        <div className="stats-info">
          <AiFillInfoCircle className="stats-info" size={20} />
        </div>
        <h1>Stats App</h1>
        <div className="stats-store">
          <AiOutlineShoppingCart size={20} />
          <p>{statsStore.length}</p>
        </div>
      </span>
      <Search
        SearchTerm={SearchTerm}
        removeSearchTerm={() => {
          setQuery({ page: 1, search: "" });
        }}
      />
      <div className="statsbox-container">
        {statsData && statsData.map((elem, i) => <StatsBox statsData={elem} AddToStore={AddToStore} key={i} />)}
      </div>
      {statsData && (
        <div className="statsbox-navigation">
          <AiFillCaretLeft
            className="navigation-button"
            onClick={() => {
              query.set("page", parseInt(query.get("page")) - 1);
              setQuery(query);
            }}
          />
          <input
            type="text"
            inputMode="numeric"
            maxLength={3}
            placeholder={query.get("page")}
            onKeyUp={(e) => {
              if (e.key === "Enter") {
                query.set("page", e.target.value);
                setQuery(query);
                e.target.value = "";
              }
            }}
          />
          <AiFillCaretRight
            className="navigation-button"
            onClick={() => {
              query.set("page", parseInt(query.get("page")) + 1);
              setQuery(query);
            }}
          />
        </div>
      )}
    </div>
  );
}

export default App;
