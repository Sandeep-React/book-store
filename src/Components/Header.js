import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

const Header = ({ handleSearch }) => {
    return (
        <header className="bg-blue-500 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-xl font-bold hover:underline">Bookstore</Link>
                <div className="flex items-center">
                    <SearchBar handleSearch={handleSearch} />
                    <Link to="/cart" className="ml-4 hover:underline">Cart</Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
