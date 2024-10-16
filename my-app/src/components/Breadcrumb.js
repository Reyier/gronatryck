// Breadcrumb.js
import React from "react";
import { Link } from "react-router-dom";
import "../styles/Breadcrumb.css";

const Breadcrumb = ({ category }) => {
  return (
    <div className="breadcrumb-wrapper">
      <nav className="breadcrumb">
        <Link to="/">Hem</Link>
        {category && (
          <>
            <span className="breadcrumb-separator">/</span>
            <span>{category.charAt(0).toUpperCase() + category.slice(1)} Produkter</span>
          </>
        )}
      </nav>
      {category && (
        <h2 className="category-heading">{category.charAt(0).toUpperCase() + category.slice(1)} Kategori</h2>
      )}
    </div>
  );
};

export default Breadcrumb;
