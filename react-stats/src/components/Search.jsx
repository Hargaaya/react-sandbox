import React from "react";
import { BsSearch } from "react-icons/bs";
import { HiOutlineBackspace } from "react-icons/hi";
import { useSearchParams } from "react-router-dom";

const Search = ({ SearchTerm, removeSearchTerm }) => {
  let [searchParams, setSearchParams] = useSearchParams();

  return (
    <div className="search">
      <input
        type="text"
        placeholder={searchParams.get("search") ? searchParams.get("search") : "Search"}
        id="search"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            SearchTerm(e.target.value);
            e.target.value = "";
          }
        }}
      />
      {!searchParams.get("search") ? (
        <BsSearch className="search-icon" />
      ) : (
        <HiOutlineBackspace
          className="search-icon"
          onClick={() => {
            removeSearchTerm();
            setSearchParams.apply();
          }}
        />
      )}
    </div>
  );
};

export default Search;
