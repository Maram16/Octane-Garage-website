import React, { createContext, useState, useContext } from 'react';

// Create a context for the cart
const defaultCartContext = {
    cart: [],
    addToCart: () => {},
    cartCount: 0
  };
  
  const CartContext = createContext(defaultCartContext);
  

// Custom hook to use the CartContext
export const useCart = () => {
    return useContext(CartContext);
};

// CartProvider component
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Function to add a product to the cart
  const addToCart = (product) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart, product];
      console.log("Updated Cart:", updatedCart); // Log the updated cart to ensure it is working as expected
      return updatedCart;
    });
  };

  const cartCount = cart.length;

  return (
    <CartContext.Provider value={{ cart, addToCart, cartCount }}>
      {children}
    </CartContext.Provider>
  );
};
