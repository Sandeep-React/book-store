import React, { useEffect, useState, useContext } from 'react';
import { fetchBooks } from '../Services/BookService';
import { Link } from 'react-router-dom';
import { CartContext } from '../Contexts/CartContext';

const BookList = ({ searchQuery }) => {
    const [books, setBooks] = useState([]);
    const { addToCart } = useContext(CartContext);

    useEffect(() => {
        const getBooks = async () => {
            if (searchQuery.trim() === '') {
                // If the search query is empty, you can either set a default book list or skip fetching
                // For this example, let's assume you have a function `fetchDefaultBooks`
                const data = await fetchBooks(); // Call fetchBooks without searchQuery to get default books
                setBooks(data);
            } else {
                const data = await fetchBooks(searchQuery);
                setBooks(data);
            }
        };
        getBooks();
    }, [searchQuery]);

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">Book List</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {books.map((book) => (
                    <div key={book.id} className="bg-white shadow-md rounded-lg overflow-hidden p-2">
                        <div className="h-64 flex items-center justify-center"> {/* Center the image */}
                            <img
                                src={book.volumeInfo.imageLinks?.thumbnail}
                                alt={book.volumeInfo.title}
                                className="max-w-full max-h-full object-contain"
                            />
                        </div>
                        <div className="p-2">
                            <h3 className="text-sm font-semibold mb-1">{book.volumeInfo.title}</h3>
                            <p className="text-xs text-gray-600 mb-1">{book.volumeInfo.authors?.join(', ')}</p>
                            <p className="text-xs text-gray-600 mb-1">Price: Rs. {book.price}</p>
                            <div className="flex justify-between items-center">
                                <Link 
                                    to={`/book/${book.id}`} 
                                    className="text-blue-500 hover:underline text-xs"
                                    state={{ price: book.price }} // Pass price in state
                                >
                                    Details
                                </Link>
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
        </div>
    );
};

export default BookList;
