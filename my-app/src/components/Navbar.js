// src/components/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';
import Search from './Search';

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
      <Search onSearch={handleSearch} />
    </nav>
  );
};

export default Navbar;
