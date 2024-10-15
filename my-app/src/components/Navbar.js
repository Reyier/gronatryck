/*
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaUserAlt, FaSearch, FaBars } from 'react-icons/fa';
import '../styles/navbar.css';
import SearchBar from './Search';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);

  // Dummy user state for demonstration
  const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

  const handleDropdownToggle = () => {
    setIsDropdownOpen(prevState => !prevState);
  };

  const handleUserDropdownToggle = () => {
    setIsUserDropdownOpen(prevState => !prevState);
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
        <Link to="/">
          <img src="/path/to/your/logo.png" alt="Gröna Tryck" />
        </Link>
      </div>

 
      <div className="navbar-icons">
        <Link to="/cart" className="icon cart-icon">
          <FaShoppingCart />
        </Link>
        <div
          className="icon user-icon"
          onClick={handleUserDropdownToggle} // Change to onClick
        >
          <FaUserAlt />
          {isUserDropdownOpen && (
            <ul className="user-dropdown">
              {loggedInUser ? (
                <>
                  <li>
                    <Link to="/customer">Profil</Link>
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
        </div>
        <Link to="/search" className="icon">
          <FaSearch />
        </Link>
        <button onClick={handleDropdownToggle} className="menu-toggle">
          <FaBars />
        </button>
      </div>

      
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
        <li className="cart-icon">
          <Link to="/cart"> 
            <FaShoppingCart /> 
          </Link>
        </li>
        <li className="dropdown" onClick={handleUserDropdownToggle}>
          <span className="dropdown-toggle user-icon">
            <FaUserAlt /> 
          </span>
          {isUserDropdownOpen && (
            <ul className="dropdown-menu">
              {loggedInUser ? (
                <>
                  <li>
                    <Link to="/customer">Profil</Link>
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
      </ul>
      <SearchBar onSearch={handleSearch} />
    </nav>
  );
};

export default Navbar;
*/

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaUserAlt, FaSearch, FaBars, FaTimes } from 'react-icons/fa';
import '../styles/navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);

  const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const handleUserDropdownToggle = () => {
    setIsUserDropdownOpen((prevState) => !prevState);
  };

  const handleLogout = () => {
    localStorage.removeItem('loggedInUser');
    // Redirect or update state if necessary
  };

  return (
    <nav className="navbar">
      {/* Top bar for desktop and mobile */}
      <div className="navbar-top">
        <div className="navbar-brand">
          <Link to="/">
            <img src="/img/decorative/logotyp_horizontell.png" alt="Gröna Tryck" className="navbar-logo" />
          </Link>
        </div>

        {/* Icons for mobile and desktop */}
        <div className="navbar-icons">
          <Link to="/cart" className="icon cart-icon">
            <FaShoppingCart />
          </Link>
          <div
            className="icon user-icon"
            onMouseEnter={handleUserDropdownToggle}
            onMouseLeave={handleUserDropdownToggle}
          >
            <FaUserAlt />
            {isUserDropdownOpen && (
              <ul className="user-dropdown">
                {loggedInUser ? (
                  <>
                    <li>
                      <Link to="/customer">Profil</Link>
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
          </div>
          <Link to="/search" className="icon">
            <FaSearch />
          </Link>
          <button onClick={toggleMenu} className="menu-toggle">
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Desktop menu centered */}
      <ul className="navbar-links">
        <li>
          <Link to="/">Hem</Link>
        </li>
        <li>
          <Link to="/products">Sortiment</Link>
        </li>
        <li>
          <Link to="/services">Tjänster</Link>
        </li>
        <li>
          <Link to="/stanley">Stanley Stella</Link>
        </li>
        <li>
          <Link to="/materials">Hållbara Material</Link>
        </li>
        <li>
          <Link to="/about">Om Gröna Tryck</Link>
        </li>
        <li>
          <Link to="/resellers">För Återförsäljare</Link>
        </li>
      </ul>

      {/* Mobile menu */}
      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        <ul className="navbar-links-mobile">
          <li>
            <Link to="/products">Sortiment</Link>
          </li>
          <li>
            <Link to="/services">Tjänster</Link>
          </li>
          <li>
            <Link to="/stanley">Stanley Stella</Link>
          </li>
          <li>
            <Link to="/materials">Hållbara Material</Link>
          </li>
          <li>
            <Link to="/about">Om Gröna Tryck</Link>
          </li>
          <li>
            <Link to="/resellers">För Återförsäljare</Link>
          </li>

          {/* Contact Details */}
          <li className="contact-info">
            <p>Ring oss på: <a href="tel:+4690131340">+46 (0)90 13 13 40</a></p>
            <p>Maila oss på: <a href="mailto:kontakt@gronatryck.se">kontakt@gronatryck.se</a></p>
          </li>
        </ul>
      </div>

      {/* Overlay when menu is open */}
      {isMenuOpen && (
        <div className="menu-overlay" onClick={toggleMenu}></div>
      )}
    </nav>
  );
};

export default Navbar;
