import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import { CartContext } from '../Contexts/CartContext';

const Header = ({ handleSearch }) => {
    const { cartItems } = useContext(CartContext);

    // Calculate total items in the cart
    const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <header className="bg-blue-500 text-white p-4">
            <nav className="flex justify-between container mx-auto">
                <div>
                    <Link to="/" className="mr-4 hover:underline">Home</Link>
                    <Link to="/cart" className="hover:underline">
                        Cart ({totalItems}) {/* Display total items here */}
                    </Link>
                </div>
                <div>
                    <SearchBar handleSearch={handleSearch} />
                </div>
            </nav>
        </header>
    );
};

export default Header;
