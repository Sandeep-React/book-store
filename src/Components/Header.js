import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

const Header = ({ handleSearch }) => {
    return (
        <header className="bg-blue-500 text-white p-4">
            <nav className="flex justify-between container mx-auto">
                <div>
                    <Link to="/" className="mr-4 hover:underline">Home</Link>
                    <Link to="/cart" className="hover:underline">Cart</Link>
                </div>
                <div>
                    <SearchBar handleSearch={handleSearch} />
                </div>
            </nav>
        </header>
    );
};

export default Header;
