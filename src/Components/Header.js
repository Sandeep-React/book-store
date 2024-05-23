import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import { CartContext } from '../Contexts/CartContext';
import AuthContext from '../Contexts/AuthContext';

const Header = ({ handleSearch }) => {
    const { cartItems } = useContext(CartContext);
    const { currentUser, loginWithGoogle, logout } = useContext(AuthContext);

    const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <header className="bg-blue-500 text-white p-4">
            <nav className="container mx-auto flex flex-col sm:flex-row sm:justify-between items-center">
                <div className="flex justify-between w-full sm:w-auto mb-2 sm:mb-0">
                    <div className="flex items-center">
                        <Link to="/" className="mr-4 hover:underline">Home</Link>
                        <Link to="/cart" className="hover:underline">
                            Cart ({totalItems})
                        </Link>
                    </div>
                    <div className="sm:hidden">
                        {currentUser ? (
                            <>
                                <span className="mr-4">Hello, {currentUser.displayName}</span>
                                <button onClick={logout} className="hover:underline">Logout</button>
                            </>
                        ) : (
                            <button onClick={loginWithGoogle} className="hover:underline">Login with Google</button>
                        )}
                    </div>
                </div>
                <div className="w-full sm:w-auto mb-2 sm:mb-0">
                    <SearchBar handleSearch={handleSearch} />
                </div>
                <div className="hidden sm:flex">
                    {currentUser ? (
                        <>
                            <span className="mr-4">Hello, {currentUser.displayName}</span>
                            <button onClick={logout} className="hover:underline">Logout</button>
                        </>
                    ) : (
                        <button onClick={loginWithGoogle} className="hover:underline">Login with Google</button>
                    )}
                </div>
            </nav>
        </header>
    );
};

export default Header;
