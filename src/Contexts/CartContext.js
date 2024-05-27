// Context/CartContext.js
import React, { createContext, useState, useEffect } from 'react';
// import { auth, firestore } from '../firebase';
import { auth, firestore } from '../firebase.';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                setUser(user);
                loadCart(user.uid);
            } else {
                setUser(null);
                setCartItems([]);
            }
        });

        return () => unsubscribe();
    }, []);

    const loadCart = async (userId) => {
        const cartRef = firestore.collection('carts').doc(userId);
        const doc = await cartRef.get();
        if (doc.exists) {
            setCartItems(doc.data().items);
        }
    };

    const saveCart = async (items) => {
        if (user) {
            const cartRef = firestore.collection('carts').doc(user.uid);
            await cartRef.set({ items });
        }
    };

    const addToCart = (book) => {
        setCartItems((prevItems) => {
            const existingItem = prevItems.find((item) => item.id === book.id);
            let updatedItems;
            if (existingItem) {
                updatedItems = prevItems.map((item) =>
                    item.id === book.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            } else {
                updatedItems = [...prevItems, { ...book, quantity: 1 }];
            }
            saveCart(updatedItems);
            return updatedItems;
        });
    };

    const removeFromCart = (bookId) => {
        setCartItems((prevItems) => {
            const updatedItems = prevItems.filter((item) => item.id !== bookId);
            saveCart(updatedItems);
            return updatedItems;
        });
    };

    const updateQuantity = (bookId, quantity) => {
        setCartItems((prevItems) => {
            const updatedItems = prevItems.map((item) =>
                item.id === bookId ? { ...item, quantity } : item
            );
            saveCart(updatedItems);
            return updatedItems;
        });
    };

    const clearCart = () => {
        setCartItems([]);
        if (user) {
            const cartRef = firestore.collection('carts').doc(user.uid);
            cartRef.set({ items: [] });
        }
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContext;

