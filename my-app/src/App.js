import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { CartProvider } from './context/CartContext'; // Importera CartProvider
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import CartPage from './pages/CartPage';
import Stanley from './pages/Stanley';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
import ResetPassword from './pages/ResetPassword';
import CustomerPage from './pages/CustomerPage';
import AdminPage from './pages/AdminPage';
import Checkout from './pages/Checkout'; 
import "./styles/general.css";


function App() {
  const [loggedInUser, setLoggedInUser] = useState(null); // Track logged in user

  useEffect(() => {
    // Kontrollera om användaren redan är inloggad
    const storedUser = localStorage.getItem('loggedInUser');
    if (storedUser) {
      setLoggedInUser(JSON.parse(storedUser));
    }

    // Predefined admin
    const admin = {
      email: 'admin@example.com',
      password: 'admin123',
      role: 'Admin',
      firstname: 'Admin',
      lastname: 'User'
    };
    localStorage.setItem('admin@example.com', JSON.stringify(admin));
  }, []); // Körs endast vid första renderingen

  // Hantera registrering
  const handleRegister = (user) => {
    if (user) {
      user.role = 'Customer';
      localStorage.setItem(user.email, JSON.stringify(user));
      alert('Registration successful!');
    }
  };


// Handle login
const handleLogin = (user) => {
  if (!user || !user.email || !user.password) {
    alert('Please enter both email and password.');
    return null;
  }

  const storedUser = localStorage.getItem(user.email);
  
  if (storedUser) {
    const parsedUser = JSON.parse(storedUser);

    if (parsedUser.password === user.password) {
      setLoggedInUser(parsedUser);
      localStorage.setItem('loggedInUser', JSON.stringify(parsedUser)); // Save logged in user
      return parsedUser; // Return the logged-in user object
    } else {
      alert('Incorrect password.');
      return null;
    }
  } else {
    alert('User does not exist.');
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
        alert('Password reset!');
      } else {
        alert('Email address does not exist.');
      }
    }
  };

  // Hantera utloggning
  const handleLogout = () => {
    localStorage.removeItem('loggedInUser'); // Ta bort inloggningsdata
    setLoggedInUser(null); // Återställ state
  };

  return (
    <CartProvider>
      <Router>
        <Navbar loggedInUser={loggedInUser} onLogout={handleLogout} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stanley" element={<Stanley />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/register" element={<Register onRegister={handleRegister} />} />
          <Route path="/reset-password" element={<ResetPassword onReset={handleResetPassword} />} />
          <Route path="/produkter/:id/:productSlug" element={<ProductDetail />} /> 
          <Route path="/checkout" element={<Checkout />} /> 


          {/* Protected Routes */}
          <Route 
            path="/customer" 
            element={loggedInUser && loggedInUser.role === 'Customer' ? 
              <CustomerPage user={loggedInUser} onLogout={handleLogout} /> : 
              <Navigate to="/login" />} 
          />
          <Route 
            path="/admin" 
            element={loggedInUser && loggedInUser.role === 'Admin' ? 
              <AdminPage onLogout={handleLogout} /> : 
              <Navigate to="/login" />} 
          />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;

