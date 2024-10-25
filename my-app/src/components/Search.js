import React, { useState } from "react";
import products from "../data/product.js";
import { LuSearch, LuX } from "react-icons/lu";
import "../styles/searchbar-filter.css"; // Se till att du har en CSS-fil för stilar
import IconButton from "./IconButton.js";

export default function SearchBar({ handleClick, isActive }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredKeywords, setFilteredKeywords] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleSearch = (e) => {
    const value = e.target.value;
    console.log(value);
    setSearchTerm(value);
    if (value === "") {
      setIsDropdownOpen(false);
    } else {
      setIsDropdownOpen(true);
    }
  };

  return (
    <div className={`search-container ${isActive ? "active" : ""}`}>
      <form className="container search-content">
        <IconButton
          icon={<LuSearch />}
          handleClick={() => console.log("pressed search btn")}
        />
        <input
          type="search"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Sök i vårt sortiment..."
        />
        <IconButton icon={<LuX />} handleClick={handleClick} />
      </form>

      {isDropdownOpen && (
        <div className="dropdown-list">
          <h2>Din söknings gav 5 resultat...</h2>
          <div className="container">
            <div>product 1</div> <div>product 1</div>
            <div>product 1</div>
          </div>
        </div>
      )}
    </div>
  );
}
