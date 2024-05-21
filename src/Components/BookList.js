import React, { useState, useEffect, useContext } from 'react';
import { fetchBooks } from '../Services/BookService';
import { Link } from 'react-router-dom';
import { CartContext } from '../Contexts/CartContext';

const BookList = ({ searchQuery }) => {
    const [books, setBooks] = useState([]);
    const { addToCart } = useContext(CartContext);

    useEffect(() => {
        getBooks();
    }, [searchQuery]);

    const getBooks = async () => {
        let defaultGenre = 'fiction'; // Default genre
        if (searchQuery) {
            defaultGenre = searchQuery; // Use search query if available
        }
        const data = await fetchBooks(defaultGenre);
        const booksWithPrices = data.map(book => ({ ...book, price: generateRandomPrice() }));
        setBooks(booksWithPrices);
    };

    const generateRandomPrice = () => {
        return Math.floor(Math.random() * (1000 - 500 + 1)) + 500;
    };

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {books.map((book) => (
                <div key={book.id} className="bg-white shadow-md rounded-lg overflow-hidden p-2">
                    <img src={book.volumeInfo.imageLinks?.thumbnail} alt={book.volumeInfo.title} className="w-full h-32 object-cover" />
                    <div className="p-2">
                        <h3 className="text-sm font-semibold mb-1 mx-4">{book.volumeInfo.title}</h3>
                        <p className="text-xs text-gray-600 mb-1">{book.volumeInfo.authors?.join(', ')}</p>
                        <p className="text-sm text-gray-600 mb-1">Price: Rs. {book.price}</p>
                        <div className="flex justify-between items-center">
                            <Link to={{ pathname: `/book/${book.id}`, state: { price: book.price } }} className="text-blue-500 hover:underline text-xs">Details</Link>
                            <button
                                onClick={() => addToCart(book)}
                                className="bg-green-500 hover:bg-green-600 text-white py-1 px-2 rounded-md text-xs"
                            >
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default BookList;
