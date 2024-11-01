import React, { useState } from "react"; // Importera React och useState för att hantera tillstånd
import { Link, useNavigate } from "react-router-dom"; // Importera Link och useNavigate för navigation
import { useCart } from "../context/CartContext"; // Importera useCart för att hämta varukorgens kvantitet
import NavList from "./NavList"; // Importera NavList-komponenten
import "../styles/header.css"; // Importera CSS för header
import IconButton from "./IconButton.js"; // Importera IconButton-komponenten
import SearchBar from "./Search.js"; // Importera SearchBar-komponenten

// Definiera navigationslänkar
const navLinks = [
  { to: "/sortiment", textContent: "Sortiment" },
  { to: "/stanley-stella", textContent: "Stanley Stella" },
  { to: "/hallbara-material", textContent: "Hållbara Material" },
  { to: "/om-grona-tryck", textContent: "Om Oss" },
  { to: "/for-aterforsaljare", textContent: "Återförsäljare" },
  { to: "/kontakt", textContent: "Kontakt" },
];

// Header-komponenten
export default function Header() {
  const [mobileMenuActive, setMobileMenuActive] = useState(false); // Hantera tillstånd för mobilmeny
  const [searchActive, setSearchActive] = useState(false); // Hantera tillstånd för sökfunktion
  const { cartQuantity } = useCart(); // Hämta varukorgens kvantitet från kontext
  const navigate = useNavigate(); // Hook för navigation

  // Funktion för att växla mobilmenyn
  function toggleMenu() {
    setMobileMenuActive((a) => !a);
  }

  // Funktion för att stänga sökfältet
  function cancelSearch() {
    setSearchActive((p) => !p);
  }

  // Funktion för att navigera till varukorgen
  function toggleCart() {
    navigate("/cart");
  }

  // Funktion för att navigera till "Mina sidor"
  function toggleSite() {
    navigate("/mina-sidor");
  }

  return (
    <header className="page-header">
      {" "}
      {/* Header-element */}
      <SearchBar handleClick={cancelSearch} isActive={searchActive} />{" "}
      {/* Sökfält */}
      <div className="header-container top-bar">
        {" "}
        {/* Header-kontainer */}
        <Link
          to="/"
          className="logo"
          onClick={() => window.scrollTo({ top: 0 })}
        >
          {" "}
          {/* Logotyplänk */}
          <img
            src="/img/decorative/gronatryck_logo_webb.png"
            alt="brand logotype" // Alt-text för logotyp
          />
        </Link>
        <nav>
          <NavList key="desktop-menu" links={navLinks} className="desktop" />{" "}
          {/* Desktopmeny */}
        </nav>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: "2.4rem",
            gap: "1.6rem",
          }}
        >
          <button
            className="nav-btn"
            style={{ position: "relative" }}
            onClick={toggleCart}
          >
            <img
              src="/img/decorative/icons/shopbag_icon.svg"
              alt="Varukorg"
              className="header-icon cart-icon"
            />
            {cartQuantity > 0 && (
              <span className="cart-quantity-badge">{cartQuantity}</span>
            )}
          </button>
          <button className="nav-btn" onClick={toggleSite}>
            <img
              src="/img/decorative/icons/profile_icon.svg"
              alt="Användar-ikon"
              className="header-icon user-icon"
            />
          </button>
          <button className="nav-btn" onClick={cancelSearch}>
            <img
              src="/img/decorative/icons/search_icon.svg"
              alt="Sök-ikon"
              className="header-icon search-icon"
            />
          </button>

          <HamburgerMenu active={mobileMenuActive} onClick={toggleMenu} />
        </div>
        <div className={`mobile-menu-2 ${mobileMenuActive ? "active" : ""}`}>
          {" "}
          {/* Mobilmeny */}
          <NavList
            key="mobile-menu"
            links={navLinks}
            handleClick={toggleMenu} // Stäng menyn när en länk klickas
          />
        </div>
      </div>
    </header>
  );
}

// Hamburger-menykomponent
function HamburgerMenu({ onClick, active }) {
  return (
    <button
      className="hamburger " // Klass för stil
      aria-label="Menu" // Aria-label för tillgänglighet
      aria-expanded={active ? "true" : "false"} // Ange menyns tillstånd
      aria-controls="navigation" // Koppla knappen till navigationen
      onClick={onClick} // Klickhantering
    >
      <span className="hamburger--line"></span> {/* Hamburgermeny-linje */}
      <span className="hamburger--line"></span> {/* Hamburgermeny-linje */}
      <span className="hamburger--line"></span> {/* Hamburgermeny-linje */}
    </button>
  );
}
