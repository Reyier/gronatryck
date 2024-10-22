// components/CustomerPage.js
import React, { useState } from "react";
import Login from "./Login";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import "../styles/CustomerPage.css";

function CustomerPage({onLogin}) {
  function isAuthenticated() {
    return localStorage.getItem("loggedInUser") ? true : false;
  }
  const [isLoggedIn, setIsLoggedIn] = useState(isAuthenticated());

  return (
    <section style={{ marginBlockStart: "0rem" }}>
      
      {isLoggedIn ? <Dashboard /> : <Login onLogin={onLogin} />}
    </section>
  );
}

export default CustomerPage;

function Dashboard() {
  const navigate = useNavigate();
  return (

    
    <div className="Dashboard">

<div className="cart-heading">
      <h1 className='heading-3 header-label'>Mina sidor</h1>
      </div>
      
      <ul className="options-list ">
        <li className="nav-link">Mina Beställningar</li>
        <li className="nav-link">Gör en Retur</li>
        <li className="nav-link">Ändra Dina Uppgifter</li>
      </ul>
      <button className="learn-more-btn main-btn btn-container"
        onClick={() => {
          localStorage.removeItem("loggedInUser");
          navigate("/");
        }}
      >
        Logga ut
      </button>
    </div>
  );
}
