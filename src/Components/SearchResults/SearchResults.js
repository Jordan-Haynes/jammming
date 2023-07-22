import React, { useState } from "react";
import "./SearchResults.css";
import { Tracklist } from '../index';

const SearchResults = (props) => {

  return (
    <div className="searchResults">
      <h2>Search Results:</h2>
      <Tracklist tracks={props.tracks} add={props.onAdd}/>
    </div>
  );
};

export default SearchResults;
