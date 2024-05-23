import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import BookList from './Components/BookList';
import BookDetails from './Components/BookDetails';
import ShoppingCart from './Components/ShoppingCart';
import Checkout from './Components/Checkout';
import Login from './Components/Login'; // Import Login component
import { CartProvider } from './Contexts/CartContext';
import { AuthProvider } from './Contexts/AuthContext'; // Import AuthProvider

function App() {
    const [searchQuery, setSearchQuery] = useState('fiction'); // Default genre

    const handleSearch = (query) => {
        setSearchQuery(query);
    };

    return (
        <AuthProvider>
            <CartProvider>
                <BrowserRouter>
                    <div className="App">
                        <Header handleSearch={handleSearch} />
                        <Routes>
                            <Route path="/" element={<BookList searchQuery={searchQuery} />} />
                            <Route path="/book/:id" element={<BookDetails />} />
                            <Route path="/cart" element={<ShoppingCart />} />
                            <Route path="/checkout" element={<Checkout />} />
                            <Route path="/login" element={<Login />} /> {/* Add login route */}
                        </Routes>
                    </div>
                </BrowserRouter>
            </CartProvider>
        </AuthProvider>
    );
}

export default App;
