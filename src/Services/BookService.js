
import axios from 'axios';

const API_URL = 'https://www.googleapis.com/books/v1/volumes';

export const fetchBooks = async (query = 'fiction') => {
    try {
        const response = await axios.get(API_URL, {
            params: { q: query }
        });
        const books = response.data.items.map(book => ({
            ...book,
            price: Math.floor(Math.random() * 501) + 500 // Random price between 500 and 1000
        }));
        return books;
    } catch (error) {
        console.error('Error fetching books:', error);
        return [];
    }
};
