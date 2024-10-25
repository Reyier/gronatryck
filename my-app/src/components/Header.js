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
import IconButton from "./IconButton.js";
import SearchBar from "./Search.js";

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
      <SearchBar handleClick={cancelSearch} isActive={searchActive} />

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
