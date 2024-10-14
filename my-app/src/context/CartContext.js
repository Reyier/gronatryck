// context/CartContext.js
import React, { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const useCart = () => {
    return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(() => {
        // Hämta varukorg från localStorage vid initialisering
        const savedCart = localStorage.getItem('cartItems');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    useEffect(() => {
        // Spara varukorgsinnehåll i localStorage varje gång den uppdateras
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    const updateCartItem = (productId, selectedColor, size, quantity) => {
        setCartItems(prevItems => 
            prevItems.map(item => 
                item.productId === productId && item.selectedColor === selectedColor && item.size === size
                    ? { ...item, totalQuantity: quantity, totalPrice: (item.pricePerItem * quantity).toFixed(2) }
                    : item
            )
        );
    };

    const removeFromCart = (productId, selectedColor, size) => {
        setCartItems(prevItems => prevItems.filter(item => 
            !(item.productId === productId && item.selectedColor === selectedColor && item.size === size)
        ));
    };

    const addToCart = (product) => {
        const existingProduct = cartItems.find(item => 
            item.productId === product.productId &&
            item.selectedColor === product.selectedColor &&
            item.size === product.size
        );

        if (existingProduct) {
            // Om produkten redan finns, uppdatera kvantiteten
            updateCartItem(product.productId, product.selectedColor, product.size, existingProduct.totalQuantity + product.totalQuantity);
        } else {
            // Lägg till produkten i varukorgen
            setCartItems([...cartItems, product]);
        }
    };

    return (
        <CartContext.Provider value={{ cartItems, updateCartItem, removeFromCart, addToCart }}>
            {children}
        </CartContext.Provider>
    );
};
