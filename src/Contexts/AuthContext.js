// src/Contexts/AuthContext.js
import React, { createContext, useState, useEffect } from 'react';
import { auth, googleProvider } from '../firebase.';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user);
        });
        return () => unsubscribe();
    }, []);

    const loginWithGoogle = async () => {
        try {
            await auth.signInWithPopup(googleProvider);
        } catch (error) {
            console.error('Error logging in with Google:', error);
        }
    };

    const logout = async () => {
        try {
            await auth.signOut();
        } catch (error) {
            console.error('Error logging out:', error);
        }
    };

    return (
        <AuthContext.Provider value={{ currentUser, loginWithGoogle, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
