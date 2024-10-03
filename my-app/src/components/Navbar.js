// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';


const Navbar = () => {
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
          <Link to="stanley">Stanley Stella</Link>
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
          <Link to="/login">Logga in</Link>
        </li>
        <li>
          <Link to="/register">Registera dig</Link>
        
        </li>
        <li>
          <Link to="/cart">Kassa</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
