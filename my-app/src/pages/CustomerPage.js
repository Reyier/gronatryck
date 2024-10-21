// components/CustomerPage.js
import React, { useState } from "react";
import Login from "./Login";
import { useNavigate } from "react-router-dom";

function CustomerPage() {
  function isAuthenticated() {
    return localStorage.getItem("loggedInUser") ? true : false;
  }
  const [isLoggedIn, setIsLoggedIn] = useState(isAuthenticated());

  return (
    <section style={{ marginBlockStart: "10.8rem" }}>
      <h1 className="heading-1">Mina Sidor</h1>
      {isLoggedIn ? <Dashboard /> : <Login />}
    </section>
  );
}

export default CustomerPage;

function Dashboard() {
  const navigate = useNavigate();
  return (
    <div>
      Hej användare!
      <button
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
