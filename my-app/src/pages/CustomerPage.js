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
    <section style={{ marginBlockStart: "10.8rem" }}>
      <h1 className="heading-1">Mina Sidor</h1>
      {isLoggedIn ? <Dashboard /> : <Login onLogin={onLogin} />}
    </section>
  );
}

export default CustomerPage;

function Dashboard() {
  const navigate = useNavigate();
  return (
    <div className="Dashboard">
      <h1>Hej! </h1> 
      <ul className="options-list">
        <li>Mina Beställningar/Ordrar</li>
        <li>Gör en Retur</li>
        <li>Ändra Dina Uppgifter</li>
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
