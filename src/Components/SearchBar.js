import React, { useState } from 'react';

const SearchBar = ({ handleSearch }) => {
    const [query, setQuery] = useState('');

    const handleChange = (e) => {
        setQuery(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleSearch(query);
    };

    return (
        <form onSubmit={handleSubmit} className="flex">
            <input
                type="text"
                placeholder="Search by title, author, or genre"
                value={query}
                onChange={handleChange}
                className="w-64 mr-2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 bg-white text-gray-800"
            />
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                Search
            </button>
        </form>
    );
};

export default SearchBar;
