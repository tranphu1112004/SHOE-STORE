import React, { createContext, useContext, useState, ReactNode } from "react";

type CartItem = {
  id: string | number;
  name: string;
  price: number;
  color: string;
  size: string;
  quantity: number;
  imageUrl: string;
};

type CartContextType = {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  updateQuantity: (id: string | number, color: string, size: string, quantity: number) => void;
  removeItem: (id: string | number, color: string, size: string) => void;
  getTotalPrice: () => number;
  clearCart: () => void; 
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (item: CartItem) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(
        (cartItem) =>
          cartItem.id === item.id && cartItem.color === item.color && cartItem.size === item.size
      );

      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === existingItem.id &&
          cartItem.color === existingItem.color &&
          cartItem.size === existingItem.size
            ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
            : cartItem
        );
      } else {
        return [...prevCart, item];
      }
    });
  };

  const updateQuantity = (id: string | number, color: string, size: string, quantity: number) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id && item.color === color && item.size === size
          ? { ...item, quantity: Math.max(1, quantity) } 
          : item
      )
    );
  };

  const removeItem = (id: string | number, color: string, size: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id || item.color !== color || item.size !== size));
  };

  const clearCart = () => {
    setCart([]);
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, updateQuantity, removeItem, getTotalPrice, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};


export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
