import React, { createContext, useContext, useState, useEffect } from 'react';

// Skapar CartContext
const CartContext = createContext();



// Custom Hook för att använda CartContext
export const useCart = () => {
  return useContext(CartContext);
};

// CartProvider-komponenten
export const CartProvider = ({ children }) => {
  // Hämta cartItems från localStorage, eller använd en tom array om det inte finns
  const [cartItems, setCartItems] = useState(() => {
    const savedCartItems = localStorage.getItem('cartItems');
    return savedCartItems ? JSON.parse(savedCartItems) : [];
  });

  // Funktionslogik för att lägga till produkter i kundvagnen
  const addToCart = (product) => {
    setCartItems((prevCartItems) => {
      
      const existingProduct = prevCartItems.find(
        (item) => item.productId === product.productId && item.selectedColor === product.selectedColor && item.size === product.size
      );

      if (existingProduct) {
        // Om produkten redan finns i kundvagnen, uppdatera kvantiteten och priset
        return prevCartItems.map((item) =>
          item.productId === product.productId && item.selectedColor === product.selectedColor && item.size === product.size
            ? {
                ...item,
                totalQuantity: item.totalQuantity + product.totalQuantity, // Lägg till total kvantitet
                totalPrice: (parseFloat(item.totalPrice) + parseFloat(product.totalPrice)).toFixed(2), // Uppdatera totala priset
              }
            : item
        );
      } else {
        // Om produkten inte finns i kundvagnen, lägg till den
        return [...prevCartItems, product];
      }
    });
  };

  // Funktion för att ta bort produkter från kundvagnen
  const removeFromCart = (productId, selectedColor, size) => {
    setCartItems((prevCartItems) =>
      prevCartItems.filter(item => !(item.productId === productId && item.selectedColor === selectedColor && item.size === size))
    );
  };

  // Funktion för att uppdatera kvantiteten av en produkt i kundvagnen
  const updateCartItem = (productId, selectedColor, size, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(productId, selectedColor, size); // Ta bort produkten om kvantiteten är 0 eller lägre
    } else {
      setCartItems((prevCartItems) =>
        prevCartItems.map(item =>
          item.productId === productId && item.selectedColor === selectedColor && item.size === size
            ? { ...item, totalQuantity: newQuantity, totalPrice: (item.pricePerItem * newQuantity).toFixed(2) }
            : item
        )
      );
    }
  };

  // Spara cartItems i localStorage varje gång de ändras
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  // Returnerar kontextvärdena
  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateCartItem }}>
      {children}
    </CartContext.Provider>
  );
};
