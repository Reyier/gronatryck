// src/App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from './context/AuthContext';  // Importera AuthProvider
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

function App() {
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
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </Router>
      </CartProvider>
    
  );
}

export default App;
