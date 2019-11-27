import React, { useState } from 'react';
import './SearchResultStats.css';

function SearchResultStats() {
  const [totalResult, searchWord] = useState(0);
  if (totalResult <= 0) {
    return null;
  }

  return (
    <div className="row">
      <b>{totalResult}</b>
      <span className="result-static-text">
        results found for the search term
      </span>
      <b>{searchWord}</b>
    </div>
  );
}

export default SearchResultStats;
