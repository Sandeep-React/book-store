//BookDetails.js
import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import axios from 'axios';
import { useContext } from 'react';
import { CartContext } from '../Contexts/CartContext';

const BookDetails = () => {
    const { id } = useParams();
    const { state } = useLocation();
    const [book, setBook] = useState(null);
    const { addToCart } = useContext(CartContext);
    const [price] = useState(state ? state.price : 0);

    useEffect(() => {
        const fetchBookDetails = async () => {
            try {
                const response = await axios.get(`https://www.googleapis.com/books/v1/volumes/${id}`);
                setBook(response.data);
            } catch (error) {
                console.error('Error fetching book details:', error);
            }
        };
        fetchBookDetails();
    }, [id]);

    if (!book) return <div>Loading...</div>;

    const genres = book.volumeInfo.categories?.join(', ');

    return (
        <div className="book-details p-8 text-center">
            <img src={book.volumeInfo.imageLinks?.thumbnail} alt={book.volumeInfo.title} className="mx-auto mb-4 rounded-lg shadow-md" />
            <h2 className="text-2xl font-bold mb-2">{book.volumeInfo.title}</h2>
            <h3 className="text-lg font-semibold mb-2">{book.volumeInfo.authors?.join(', ')}</h3>
            {genres && <p className="text-gray-600 mb-4">Genres: {genres}</p>}
            <p className="text-xs text-gray-600 mb-1">Price: Rs. {price}</p>
            {book.volumeInfo.description ? (
                <div className="text-base leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: book.volumeInfo.description }} />
            ) : (
                <p className="text-base leading-relaxed mb-6">No description available.</p>
            )}
            <button 
                onClick={() => addToCart({ ...book, price })}
                className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md text-lg transition duration-300"
            >
                Add to Cart
            </button>
        </div>
    );
};

export default BookDetails;
