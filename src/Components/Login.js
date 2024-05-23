// src/Components/Login.js
import React, { useContext } from 'react';
import AuthContext from '../Contexts/AuthContext';

const Login = () => {
    const { loginWithGoogle } = useContext(AuthContext);

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-xl font-semibold mb-4">Login</h2>
            <button
                onClick={loginWithGoogle}
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                Login with Google
            </button>
        </div>
    );
};

export default Login;
