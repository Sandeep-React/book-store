import React, { createContext, useState, useEffect } from 'react';
// import { auth, firestore } from '../firebase';
import { auth } from '../firebase.';
import firebase from 'firebase/compat/app';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user);
        });

        return () => unsubscribe();
    }, []);

    const loginWithGoogle = async () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        try {
            await auth.signInWithPopup(provider);
        } catch (error) {
            console.error('Error during Google login:', error);
        }
    };

    const logout = async () => {
        try {
            await auth.signOut();
        } catch (error) {
            console.error('Error during logout:', error);
        }
    };

    return (
        <AuthContext.Provider value={{ currentUser, loginWithGoogle, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthProvider };
export default AuthContext;
