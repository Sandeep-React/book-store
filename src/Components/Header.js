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
            <nav className="flex justify-between container mx-auto">
                <div>
                    <Link to="/" className="mr-4 hover:underline">Home</Link>
                    <Link to="/cart" className="hover:underline">
                        Cart ({totalItems})
                    </Link>
                </div>
                <div>
                    <SearchBar handleSearch={handleSearch} />
                </div>
                <div>
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
