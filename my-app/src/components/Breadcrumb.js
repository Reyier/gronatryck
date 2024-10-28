import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import "../styles/Breadcrumb.css";

const Breadcrumb = () => {
  const location = useLocation();
  const params = useParams();
  
  // Split the current path into segments to build the breadcrumb trail
  const pathSegments = location.pathname.split("/").filter((segment) => segment);

  return (
    <div className="breadcrumb-wrapper">
      <nav className="breadcrumb">
        {/* Always include the link back to the homepage */}
        <Link to="/">Hem</Link>

        {/* Dynamically generate breadcrumb links based on path segments */}
        {pathSegments.map((segment, index) => {
          const path = `/${pathSegments.slice(0, index + 1).join("/")}`;
          const isLast = index === pathSegments.length - 1;

          return (
            <span key={index}>
              <span className="breadcrumb-separator">/</span>
              {!isLast ? (
                <Link to={path}>
                  {segment.charAt(0).toUpperCase() + segment.slice(1)}
                </Link>
              ) : (
                <span>{segment.charAt(0).toUpperCase() + segment.slice(1)}</span>
              )}
            </span>
          );
        })}
      </nav>

      {/* Display a heading based on the last segment */}
      {params.category && (
        <h2 className="category-heading">
          {params.category.charAt(0).toUpperCase() + params.category.slice(1)} Kategori
        </h2>
      )}
    </div>
  );
};

export default Breadcrumb;
