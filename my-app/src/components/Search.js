// src/components/Search.js
import React, { useState } from 'react';

const Search = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault(); // Förhindra att sidan laddas om
    if (onSearch) {
      onSearch(query); // Anropa onSearch-funktionen med sökfrågan
    }
    setQuery(''); // Rensa inputfältet efter sökningen
  };

  return (
    <form onSubmit={handleSearch} className="search-form">
      <input
        type="text"
        placeholder="Sök..."
        value={query}
        onChange={handleInputChange}
        required
      />
      <button type="submit">Sök</button>
    </form>
  );
};

export default Search;
