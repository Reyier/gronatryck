import React, { createContext, useContext, useState, useEffect } from 'react';

// Skapa kontext
const CartContext = createContext();

// Cart Provider komponent
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    // Hämta varor från localStorage vid initialisering
    const savedCart = localStorage.getItem('cartItems');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    // Spara varorna i localStorage när cartItems ändras
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter(item => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Använd kontext
export const useCart = () => {
  return useContext(CartContext);
};
