// import React, { createContext, useContext, useState, ReactNode } from "react";

// // Define the CartItem type
// type CartItem = {
//   id: string | number;
//   name: string;
//   price: number;
//   color: string;
//   size: string;
//   quantity: number;
//   imageUrl: string;
// };

// // Define the CartContextType
// type CartContextType = {
//   cart: CartItem[];
//   addToCart: (item: CartItem) => void;
//   updateQuantity: (id: string | number, color: string, size: string, quantity: number) => void;
//   removeItem: (id: string | number, color: string, size: string) => void;
//   getTotalPrice: () => number;
// };

// // Create the CartContext
// const CartContext = createContext<CartContextType | undefined>(undefined);

// // CartProvider component to wrap around the app
// export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
//   const [cart, setCart] = useState<CartItem[]>([]);

//   // Add item to cart or update quantity if already exists
//   const addToCart = (item: CartItem) => {
//     setCart((prevCart) => {
//       const existingItem = prevCart.find(
//         (cartItem) =>
//           cartItem.id === item.id && cartItem.color === item.color && cartItem.size === item.size
//       );

//       if (existingItem) {
//         // Update the existing item's quantity
//         return prevCart.map((cartItem) =>
//           cartItem.id === existingItem.id &&
//           cartItem.color === existingItem.color &&
//           cartItem.size === existingItem.size
//             ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
//             : cartItem
//         );
//       } else {
//         // Add the new item to the cart
//         return [...prevCart, item];
//       }
//     });
//   };

//   // Update item quantity in the cart
//   const updateQuantity = (id: string | number, color: string, size: string, quantity: number) => {
//     setCart((prevCart) =>
//       prevCart.map((item) =>
//         item.id === id && item.color === color && item.size === size
//           ? { ...item, quantity: Math.max(1, quantity) } // Ensure quantity is at least 1
//           : item
//       )
//     );
//   };

//   // Remove item from the cart
//   const removeItem = (id: string | number, color: string, size: string) => {
//     setCart((prevCart) => prevCart.filter((item) => item.id !== id || item.color !== color || item.size !== size));
//   };

//   // Calculate the total price of items in the cart
//   const getTotalPrice = () => {
//     return cart.reduce((total, item) => total + item.price * item.quantity, 0);
//   };

//   return (
//     <CartContext.Provider value={{ cart, addToCart, updateQuantity, removeItem, getTotalPrice }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// // Custom hook to use CartContext
// export const useCart = (): CartContextType => {
//   const context = useContext(CartContext);
//   if (!context) {
//     throw new Error("useCart must be used within a CartProvider");
//   }
//   return context;
// };
import React, { createContext, useContext, useState, ReactNode } from "react";

// Define the CartItem type
type CartItem = {
  id: string | number;
  name: string;
  price: number;
  color: string;
  size: string;
  quantity: number;
  imageUrl: string;
};

// Define the CartContextType
type CartContextType = {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  updateQuantity: (id: string | number, color: string, size: string, quantity: number) => void;
  removeItem: (id: string | number, color: string, size: string) => void;
  getTotalPrice: () => number;
  clearCart: () => void; // Optionally clear the cart (for example, when the user checks out)
};

// Create the CartContext
const CartContext = createContext<CartContextType | undefined>(undefined);

// CartProvider component to wrap around the app
export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  // Add item to cart or update quantity if already exists
  const addToCart = (item: CartItem) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(
        (cartItem) =>
          cartItem.id === item.id && cartItem.color === item.color && cartItem.size === item.size
      );

      if (existingItem) {
        // Update the existing item's quantity
        return prevCart.map((cartItem) =>
          cartItem.id === existingItem.id &&
          cartItem.color === existingItem.color &&
          cartItem.size === existingItem.size
            ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
            : cartItem
        );
      } else {
        // Add the new item to the cart
        return [...prevCart, item];
      }
    });
  };

  // Update item quantity in the cart
  const updateQuantity = (id: string | number, color: string, size: string, quantity: number) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id && item.color === color && item.size === size
          ? { ...item, quantity: Math.max(1, quantity) } // Ensure quantity is at least 1
          : item
      )
    );
  };

  // Remove item from the cart
  const removeItem = (id: string | number, color: string, size: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id || item.color !== color || item.size !== size));
  };

  // Clear all items in the cart (optional method, for example, after checkout)
  const clearCart = () => {
    setCart([]);
  };

  // Calculate the total price of items in the cart
  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, updateQuantity, removeItem, getTotalPrice, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use CartContext
export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
