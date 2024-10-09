import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importera useNavigate
import products from '../data/product.js';
import '../styles/searchbar-filter.css'; // Se till att du har en CSS-fil för stilar

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredKeywords, setFilteredKeywords] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  // Dynamiskt hämta unika kategorier
  const getUniqueCategories = () => {
      const categories = new Set();

      products.forEach(product => {
          categories.add(product.category);
      });

      return Array.from(categories);
  };

  const recommendedCategories = getUniqueCategories();

  const handleSearch = (e) => {
      const value = e.target.value;
      setSearchTerm(value);

      if (value.length > 0) {
          const filtered = recommendedCategories.filter(category =>
              category.toLowerCase().includes(value.toLowerCase())
          );
          setFilteredKeywords(filtered);
          setIsDropdownOpen(filtered.length > 0);
      } else {
          setFilteredKeywords([]);
          setIsDropdownOpen(false);
      }
  };
  

  // Navigera till Products-sidan med det valda sökordet
  const handleKeywordClick = (keyword) => {
      setSearchTerm(keyword);
      setIsDropdownOpen(false);
      setFilteredKeywords([]);
      navigate(`/products?kategori=${encodeURIComponent(keyword)}`);

  };

  // Filtrera produkter baserat på sökordet
  const handleSearchSubmit = (e) => {
      e.preventDefault();
      navigate(`/products?kategori=${encodeURIComponent(searchTerm)}`);
      resetSearch();
  };


  const resetSearch = () => {
    setSearchTerm('');
    setFilteredKeywords([]);
    setIsDropdownOpen(false);
};

  return (
      <div className="search-container">
          <form onSubmit={handleSearchSubmit}>
              <input
                  type="text"
                  value={searchTerm}
                  onChange={handleSearch}
                  placeholder="Sök produkter..."
              />
              <button type="submit">Sök</button>
          </form>

          {isDropdownOpen && (
              <div className="dropdown-list">
                  <h2>Rekommenderade kategorier</h2>
                  {filteredKeywords.length > 0 ? (
                      <ul>
                          {filteredKeywords.map((category, index) => (
                              <li key={index} onClick={() => handleKeywordClick(category)}>
                                  {category}
                              </li>
                          ))}
                      </ul>
                  ) : (
                      <p>Inga sökresultat hittades.</p>
                  )}
              </div>
          )}
      </div>
  );
};

export default SearchBar;
