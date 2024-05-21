
// import axios from 'axios';

// const API_URL = 'https://www.googleapis.com/books/v1/volumes';

// export const fetchBooks = async (query) => {
//     try {
//         const response = await axios.get(API_URL, {
//             params: { q: query }
//         });
//         console.log('API response:', response.data.items); // Add this line

//         return response.data.items;
//     } catch (error) {
//         console.error('Error fetching books:', error);
//         return [];
//     }
// };
//Services/BookService.js
// import axios from 'axios';
// const API_URL = 'https://www.googleapis.com/books/v1/volumes';

// export const fetchBooks = async (query = 'fiction') => { // Default to 'fiction' if no query provided
//     try {
//         const response = await axios.get(API_URL, {
//             params: { q: query }
//         });
//         console.log('API response:', response.data.items);

//         return response.data.items;
//     } catch (error) {
//         console.error('Error fetching books:', error);
//         return [];
//     }
// };

// Services/BookService.js
import axios from 'axios';

const API_URL = 'https://www.googleapis.com/books/v1/volumes';

export const fetchBooks = async (query = 'fiction') => {
    try {
        const response = await axios.get(API_URL, {
            params: { q: query }
        });

        const books = response.data.items.map(book => {
            // Generate a random price between Rs. 500 to Rs. 1000
            const randomPrice = Math.floor(Math.random() * (1000 - 500 + 1)) + 500;

            // Extract relevant book details
            const { id, volumeInfo } = book;
            const { title, authors, imageLinks, description } = volumeInfo;

            // Return book object with random price
            return {
                id,
                volumeInfo: {
                    title,
                    authors,
                    imageLinks,
                    description,
                    price: randomPrice // Add random price to book object
                }
            };
        });

        console.log('API response:', books);

        return books;
    } catch (error) {
        console.error('Error fetching books:', error);
        return [];
    }
};
