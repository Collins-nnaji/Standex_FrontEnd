// src/components/SearchBar/SearchBar.js
import React from 'react';
import './SearchBar.css';

const SearchBar = ({ searchTerm, onSearchChange }) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search jobs..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;