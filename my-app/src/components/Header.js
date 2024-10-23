import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import products from "../data/product.js";
import {
  LuChevronRight,
  LuX,
  LuShoppingCart,
  LuSearch,
  LuUser2,
} from "react-icons/lu";
import NavList from "./NavList";
import "../styles/header.css";

const navLinks = [
  { to: "/sortiment", textContent: "Sortiment" },

  // Behövs tjänster här eller ska de ligga under sortiment{ to: "/tjanster", textContent: "Tjänster" },

  { to: "/stanley-stella", textContent: "Stanley Stella" },
  { to: "/hallbara-material", textContent: "Hållbara Material" },
  { to: "/om-grona-tryck", textContent: "Om Oss" },
  { to: "/for-aterforsaljare", textContent: "Återförsäljare" },
  { to: "/kontakt", textContent: "Kontakt" },
];

export default function Header() {
  const [mobileMenuActive, setMobileMenuActive] = useState(false);
  const [searchActive, setSearchActive] = useState(false);
  const navigate = useNavigate();

  function toggleMenu() {
    setMobileMenuActive((a) => !a);
  }
  function cancelSearch() {
    setSearchActive((p) => !p);
  }

  function toggleCart() {
    navigate("/cart");
  }
  function toggleSite() {
    navigate("/mina-sidor");
  }
  return (
    <header className="page-header">
      <SearchContainer handleClick={cancelSearch} isActive={searchActive} />

      <div className="header-container top-bar">
        <Link to="/" className="logo">
          <img
            src="/img/decorative/gronatryck_logo_webb.png"
            alt="brand logotype"
          />
        </Link>
        <nav>
          <NavList key="desktop-menu" links={navLinks} className="desktop" />
        </nav>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: "2.4rem",
            gap: "1.6rem",
          }}
        >
          <IconButton icon={<LuShoppingCart />} handleClick={toggleCart} />
          <IconButton icon={<LuUser2 />} handleClick={toggleSite} />
          <IconButton icon={<LuSearch />} handleClick={cancelSearch} />

          <HamburgerMenu active={mobileMenuActive} onClick={toggleMenu} />
        </div>
        <div className={`mobile-menu-2 ${mobileMenuActive ? "active" : ""}`}>
          <NavList
            key="mobile-menu"
            links={navLinks}
            handleClick={toggleMenu}
          />
        </div>
      </div>
    </header>
  );
}

function IconButton({ icon, handleClick }) {
  return (
    <button onClick={handleClick} className="icon-button">
      {icon}
    </button>
  );
}

function SearchContainer({ handleClick, isActive }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredKeywords, setFilteredKeywords] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  // Dynamiskt hämta unika kategorier
  const getUniqueCategories = () => {
    const categories = new Set();

    products.forEach((product) => {
      categories.add(product.category);
    });

    return Array.from(categories);
  };

  const recommendedCategories = getUniqueCategories();

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value.length > 0) {
      const filtered = recommendedCategories.filter((category) =>
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
    setSearchTerm("");
    setFilteredKeywords([]);
    setIsDropdownOpen(false);
  };
  return (
    <div className={`search-container ${isActive ? "active" : ""}`}>
      <form className="container search-content" onSubmit={handleSearchSubmit}>
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
}

function HamburgerMenu({ onClick, active }) {
  return (
    <button
      className="hamburger"
      aria-label="Menu"
      aria-expanded={active ? "true" : "false"}
      aria-controls="navigation"
      onClick={onClick}
    >
      <span className="hamburger--line"></span>
      <span className="hamburger--line"></span>
      <span className="hamburger--line"></span>
    </button>
  );
}
