
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

import axios from 'axios';
const API_URL = 'https://www.googleapis.com/books/v1/volumes';

export const fetchBooks = async (query = 'fiction') => { // Default to 'fiction' if no query provided
    try {
        const response = await axios.get(API_URL, {
            params: { q: query }
        });
        console.log('API response:', response.data.items);

        return response.data.items;
    } catch (error) {
        console.error('Error fetching books:', error);
        return [];
    }
};
