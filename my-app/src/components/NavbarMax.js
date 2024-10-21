import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LuChevronRight, LuX, LuShoppingCart, LuSearch, LuUser2 } from "react-icons/lu";
import "../styles/header.css";

const navLinks = [
  { to: "/sortiment", textContent: "Sortiment", icon: <LuChevronRight /> },
  { to: "/tjanster", textContent: "Tjänster" },
  { to: "/stanley-stella", textContent: "Stanley Stella" },
  { to: "/hallbara-material", textContent: "Hållbara Material" },
  { to: "/om-grona-tryck", textContent: "Om Gröna Tryck" },
  { to: "/for-aterforsaljare", textContent: "För Återförsäljare" },
  { to: "/mina-sidor", textContent: "Mina Sidor" },
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
  function toggleSite(){
    navigate("/mina-sidor");
  }
  return (
    <header className="page-header">
      <SearchContainer handleClick={cancelSearch} isActive={searchActive} />

      <div className="container top-bar">
        <Link to="/" className="logo">
          <img src="/img/gronatryck_logo_webb.png" alt="brand logotype" />
        </Link>
        <nav>
          <NavList links={navLinks} className="desktop" />
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
          
          <HamburgerMenu onClick={toggleMenu} />
        </div>
        <div className={`mobile-menu-2 ${mobileMenuActive ? "active" : ""}`}>
          <NavList links={navLinks} handleClick={toggleMenu} />
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

function NavList({ links, className, handleClick }) {
  return (
    <ul className={`nav ${className ? className : ""}`}>
      {links.map((link) => {
        return (
          <li>
            <Link
              className="nav-link"
              key={link.textContent}
              to={link.to}
              onClick={handleClick}
            >
              {link.textContent}
              {link.icon && link.icon}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

function SearchContainer({ handleClick, isActive }) {
  return (
    <div className={`search-container ${isActive ? "active" : ""}`}>
      <div className="container search--content">
        <IconButton
          icon={<LuSearch />}
          handleClick={() => console.log("pressed search btn")}
        />
        <input type="search" placeholder="Sök i vårt sortiment..." />
        <IconButton icon={<LuX />} handleClick={handleClick} />
      </div>
    </div>
  );
}

function HamburgerMenu({ onClick }) {
  const [active, setActive] = useState(false);

  function handleClick() {
    setActive((a) => !a);
    onClick();
  }
  return (
    <button
      className="hamburger"
      aria-label="Menu"
      aria-expanded={active ? "true" : "false"}
      aria-controls="navigation"
      onClick={handleClick}
    >
      <span className="hamburger--line"></span>
      <span className="hamburger--line"></span>
      <span className="hamburger--line"></span>
    </button>
  );
}
