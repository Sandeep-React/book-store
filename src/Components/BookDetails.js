// src/components/BookDetails.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const BookDetails = () => {
    const { id } = useParams();
    const [book, setBook] = useState(null);

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
            {book.volumeInfo.description ? (
                <div className="text-base leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: book.volumeInfo.description }} />
            ) : (
                <p className="text-base leading-relaxed mb-6">No description available.</p>
            )}
            <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md text-lg transition duration-300">Add to Cart</button>
        </div>
    );
};

export default BookDetails;
