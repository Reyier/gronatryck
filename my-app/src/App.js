import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { CartProvider } from "./context/CartContext"; // Importera CartProvider
//import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import CartPage from "./pages/CartPage";
import Stanley from "./pages/Stanley";
import Services from "./pages/Services";
import Resells from "./pages/Resells.js";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ResetPassword from "./pages/ResetPassword";
import CustomerPage from "./pages/CustomerPage";
import AdminPage from "./pages/AdminPage";
import Checkout from "./pages/Checkout";
import "./styles/general.css";
import Chat from "./components/Chat";
import ScrollToTopButton from "./components/ScrollToTop";
import ConfirmationPage from "./pages/ConfirmationPage";
import Footer from "./components/Footer"; // Importera Footer
import Aboutus from "./pages/Aboutus.js";
import Header from "./components/Header.js";
import Assortment from "./pages/Assortment";

function App() {
  const [loggedInUser, setLoggedInUser] = useState(null); // Track logged in user

  useEffect(() => {
    // Kontrollera om användaren redan är inloggad
    const storedUser = localStorage.getItem("loggedInUser");
    if (storedUser) {
      setLoggedInUser(JSON.parse(storedUser));
    }

    // Predefined admin
    const admin = {
      email: "admin@example.com",
      password: "admin123",
      role: "Admin",
      firstname: "Admin",
      lastname: "User",
    };
    localStorage.setItem("admin@example.com", JSON.stringify(admin));
  }, []); // Körs endast vid första renderingen

  // Hantera registrering
  const handleRegister = (user) => {
    if (user) {
      user.role = "Customer";
      localStorage.setItem(user.email, JSON.stringify(user));
      alert("Registration successful!");
    }
  };

  // Handle login
  const handleLogin = (user) => {
    if (!user || !user.email || !user.password) {
      alert("Please enter both email and password.");
      return null;
    }

    const storedUser = localStorage.getItem(user.email);

    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);

      if (parsedUser.password === user.password) {
        setLoggedInUser(parsedUser);
        localStorage.setItem("loggedInUser", JSON.stringify(parsedUser)); // Save logged in user
        return parsedUser; // Return the logged-in user object
      } else {
        alert("Incorrect password.");
        return null;
      }
    } else {
      alert("User does not exist.");
      return null;
    }
  };

  // Hantera lösenordsåterställning
  const handleResetPassword = (email, newPassword) => {
    if (email && newPassword) {
      const storedUser = localStorage.getItem(email);
      if (storedUser) {
        const parsedUser = JSON.parse(storedUser);
        parsedUser.password = newPassword;
        localStorage.setItem(email, JSON.stringify(parsedUser));
        alert("Password reset!");
      } else {
        alert("Email address does not exist.");
      }
    }
  };

  // Hantera utloggning
  const handleLogout = () => {
    localStorage.removeItem("loggedInUser"); // Ta bort inloggningsdata
    setLoggedInUser(null); // Återställ state
  };

  return (
    <CartProvider>
      <Router>
        {/* <Navbar loggedInUser={loggedInUser} onLogout={handleLogout} /> */}
        <div className="page-wrapper">
          <Header />
          <Chat />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/stanley-stella" element={<Stanley />} />
            <Route path="/services" element={<Services />} />
            <Route path="/produkter" element={<Products />} />
            <Route path="/resells" element={<Resells />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/kontakt" element={<Contact />} />
            <Route path="/mina-sidor" element={<CustomerPage />} />
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            <Route
              path="/register"
              element={<Register onRegister={handleRegister} />}
            />
            <Route path="/sortiment" element={<Assortment />} />
            <Route
              path="/reset-password"
              element={<ResetPassword onReset={handleResetPassword} />}
            />
            <Route
              path="/produkter/:id/:productSlug"
              element={<ProductDetail />}
            />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/produkter/:id" element={<ProductDetail />} />
            <Route path="/confirmation" element={<ConfirmationPage />} />
            <Route path="/about-us" element={<Aboutus />} />

            {/* Protected Routes */}
            <Route
              path="/customer"
              element={
                loggedInUser && loggedInUser.role === "Customer" ? (
                  <CustomerPage user={loggedInUser} onLogout={handleLogout} />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            <Route
              path="/admin"
              element={
                loggedInUser && loggedInUser.role === "Admin" ? (
                  <AdminPage onLogout={handleLogout} />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
          </Routes>
          <ScrollToTopButton />
          <Footer /> {/* Lägg till Footer här */}
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
