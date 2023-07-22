import React, { useState } from "react";
import "./SearchBar.css";

const SearchBar = () => {
  const [title, setTitle] = useState(null);
  const [searchResults, setSearchResults] = useState(null);

  const getTitle = () => {
    console.log("getTitle has been called.");
  };

  return (
    <div className="searchbar">
      <form
        className="searchbar_form"
        onSubmit={(e) => {
          getTitle();
          e.preventDefault();
          e.stopPropagation();
        }}
      >
        <input
          type="text"
          className="searchbar_input"
          placeholder="Enter a song"
          onChange={(e) => {
            setTitle(e.target.value);
            setSearchResults(null);
            setTitleDetails(null);
          }}
        />
        <div className="searchbar_submit">
          <button
            className="searchbar_submitButton"
            type="submit"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
