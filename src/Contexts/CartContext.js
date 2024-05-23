import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (book) => {
        setCartItems((prevItems) => {
            const existingItem = prevItems.find((item) => item.id === book.id);
            if (existingItem) {
                return prevItems.map((item) =>
                    item.id === book.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            } else {
                return [...prevItems, { ...book, quantity: 1 }];
            }
        });
    };

    const removeFromCart = (bookId) => {
        setCartItems((prevItems) => prevItems.filter((item) => item.id !== bookId));
    };

    const updateQuantity = (bookId, quantity) => {
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === bookId ? { ...item, quantity } : item
            )
        );
    };

    const clearCart = () => {
        setCartItems([]);
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContext;
