/*
// src/components/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';
import SearchBar from './Search';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  // Dummy user state for demonstration
  const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

  const handleDropdownToggle = () => {
    setIsDropdownOpen(prevState => !prevState);
  };

  const handleLogout = () => {
    localStorage.removeItem('loggedInUser');
    // Optionally redirect or update state here
  };

  const handleSearch = (query) => {
    console.log("Sökfråga:", query);
    
  };


  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">Gröna Tryck</Link>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/">Hem</Link>
        </li>
        <li>
          <Link to="/stanley">Stanley Stella</Link>
        </li>
        <li>
          <Link to="/products">Produkter</Link>
        </li>
        <li>
          <Link to="/blog">Blogg</Link>
        </li>
        <li>
          <Link to="/contact">Kontakta oss</Link>
        </li>
        
        <li className="dropdown" onClick={handleDropdownToggle}>
          <span className="dropdown-toggle">Användare</span>
          {isDropdownOpen && (
            <ul className="dropdown-menu">
              {loggedInUser ? (
                <>
                  <li>
                    <Link to="/customer">Profil</Link>
                  </li>
                  <li>
                    <Link to="/orders">Beställningar</Link>
                  </li>
                  <li onClick={handleLogout}>Logga ut</li>
                </>
              ) : (
                <>
                  <li>
                    <Link to="/login">Logga in</Link>
                  </li>
                  <li>
                    <Link to="/register">Registrera dig</Link>
                  </li>
                </>
              )}
            </ul>
          )}
        </li>
        
        <li>
          <Link to="/cart">Kassa</Link>
        </li>
      </ul>
      <SearchBar onSearch={handleSearch} />
    </nav>
  );
};

export default Navbar;
*/

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaUserAlt, FaSearch, FaBars } from 'react-icons/fa';
import '../styles/navbar.css';
import SearchBar from './Search';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  // Dummy user state for demonstration
  const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

  const handleDropdownToggle = () => {
    setIsDropdownOpen(prevState => !prevState);
  };

  const handleLogout = () => {
    localStorage.removeItem('loggedInUser');
    // Optionally redirect or update state here
  };

  const handleSearch = (query) => {
    console.log("Sökfråga:", query);
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar-brand">
        <Link to="/">
          <img src="/path/to/your/logo.png" alt="Gröna Tryck" />
        </Link>
      </div>

      {/* Icons for mobile */}
      <div className="navbar-icons">
        <Link to="/cart">
          <FaShoppingCart />
        </Link>
        <Link to="/login">
          <FaUserAlt />
        </Link>
        <Link to="/search">
          <FaSearch />
        </Link>
        <button onClick={handleDropdownToggle} className="menu-toggle">
          <FaBars />
        </button>
      </div>

      {/* Dropdown Menu for mobile (toggled by FaBars) */}
      {isDropdownOpen && (
        <ul className="navbar-links-mobile">
          <li>
            <Link to="/">Hem</Link>
          </li>
          <li>
            <Link to="/stanley">Stanley Stella</Link>
          </li>
          <li>
            <Link to="/products">Produkter</Link>
          </li>
          <li>
            <Link to="/blog">Blogg</Link>
          </li>
          <li>
            <Link to="/contact">Kontakta oss</Link>
          </li>
          <li>
            <Link to="/cart">Kassa</Link>
          </li>
          <li>
            {loggedInUser ? (
              <>
                <Link to="/customer">Profil</Link>
                <Link to="/orders">Beställningar</Link>
                <span onClick={handleLogout}>Logga ut</span>
              </>
            ) : (
              <>
                <Link to="/login">Logga in</Link>
                <Link to="/register">Registrera dig</Link>
              </>
            )}
          </li>
        </ul>
      )}

      {/* Full links for desktop */}
      <ul className="navbar-links">
        <li>
          <Link to="/">Hem</Link>
        </li>
        <li>
          <Link to="/stanley">Stanley Stella</Link>
        </li>
        <li>
          <Link to="/products">Produkter</Link>
        </li>
        <li>
          <Link to="/blog">Blogg</Link>
        </li>
        <li>
          <Link to="/contact">Kontakta oss</Link>
        </li>
        <li className="dropdown" onClick={handleDropdownToggle}>
          <span className="dropdown-toggle">Användare</span>
          {isDropdownOpen && (
            <ul className="dropdown-menu">
              {loggedInUser ? (
                <>
                  <li>
                    <Link to="/customer">Profil</Link>
                  </li>
                  <li>
                    <Link to="/orders">Beställningar</Link>
                  </li>
                  <li onClick={handleLogout}>Logga ut</li>
                </>
              ) : (
                <>
                  <li>
                    <Link to="/login">Logga in</Link>
                  </li>
                  <li>
                    <Link to="/register">Registrera dig</Link>
                  </li>
                </>
              )}
            </ul>
          )}
        </li>
        <li>
          <Link to="/cart">Kassa</Link>
        </li>
      </ul>
      <SearchBar onSearch={handleSearch} />
    </nav>
  );
};

export default Navbar;
