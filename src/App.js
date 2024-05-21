import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import BookList from './Components/BookList';
import BookDetails from './Components/BookDetails';
import ShoppingCart from './Components/ShoppingCart';
import Checkout from './Components/Checkout';
import { CartProvider } from './Contexts/CartContext';

function App() {
    return (
        <CartProvider>
            <BrowserRouter>
                <div className="App">
                    <Header />
                    <Routes>
                        <Route path="/" element={<BookList />} />
                        <Route path="/book/:id" element={<BookDetails />} />
                        <Route path="/cart" element={<ShoppingCart />} />
                        <Route path="/checkout" element={<Checkout />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </CartProvider>
    );
}

export default App;
