import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { CartProvider } from './context/CartContext'; // Importera CartProvider
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import CartPage from './pages/CartPage';
import Stanley from './pages/Stanley';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
import ResetPassword from './pages/ResetPassword';
import CustomerPage from './pages/CustomerPage';
import AdminPage from './pages/AdminPage';

function App() {
  const [view, setView] = useState('login'); // Default view is login
  const [loggedInUser, setLoggedInUser] = useState(null); // Track logged in user

  useEffect(() => {
    const admin = {
      email: 'admin@example.com',
      password: 'admin123',
      role: 'Admin',
      firstname: 'Admin',
      lastname: 'User'
    };
    localStorage.setItem('admin@example.com', JSON.stringify(admin));
  }, []); // Predefined admin

  // Handle registration
  const handleRegister = (user) => {
    if (user) {
      user.role = 'Customer';
      localStorage.setItem(user.email, JSON.stringify(user));
      alert('Registration successful!');
      setView('login');
    } else {
      setView('login');
    }
  };

  // Handle login
  const handleLogin = (user) => {
    if (user) {
      const storedUser = localStorage.getItem(user.email);
      if (storedUser) {
        const parsedUser = JSON.parse(storedUser);
        if (parsedUser.password === user.password) {
          setLoggedInUser(parsedUser);
          if (parsedUser.role === 'Admin') {
            setView('admin');
          } else {
            setView('customer');
          }
        } else {
          alert('Incorrect password.');
        }
      } else {
        alert('User does not exist.');
      }
    } else {
      setView('register');
    }
  };

  // Handle password reset
  const handleResetPassword = (email, newPassword) => {
    if (email && newPassword) {
      const storedUser = localStorage.getItem(email);
      if (storedUser) {
        const parsedUser = JSON.parse(storedUser);
        parsedUser.password = newPassword;
        localStorage.setItem(email, JSON.stringify(parsedUser));
        alert('Password reset!');
        setView('login');
      } else {
        alert('Email address does not exist.');
      }
    } else {
      setView('login');
    }
  };

  // Handle logout
  const handleLogout = () => {
    setLoggedInUser(null);
    setView('login');
  };

  return (
    <CartProvider>
      <Router>
        <Navbar />
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

          {/* Protected Routes */}
          <Route path="/customer" element={loggedInUser ? <CustomerPage user={loggedInUser} onLogout={handleLogout} /> : <Navigate to="/login" />} />
          <Route path="/admin" element={loggedInUser && loggedInUser.role === 'Admin' ? <AdminPage onLogout={handleLogout} /> : <Navigate to="/login" />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;

