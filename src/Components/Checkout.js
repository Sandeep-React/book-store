// src/Components/Checkout.js
import React, { useContext, useState } from 'react';
import { CartContext } from '../Contexts/CartContext';

const Checkout = () => {
    const { cartItems } = useContext(CartContext);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [paymentInfo, setPaymentInfo] = useState('');

    const handleCheckout = (e) => {
        e.preventDefault();
        // Here you would normally handle the checkout process (e.g., send the data to a backend)
        console.log('Order placed:', { name, email, address, paymentInfo, cartItems });
        alert('Order placed successfully!');
    };

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-xl font-semibold mb-4">Checkout</h2>
            <form onSubmit={handleCheckout}>
                <div className="mb-4">
                    <label className="block text-gray-700">Name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full border border-gray-300 p-2 rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full border border-gray-300 p-2 rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Address</label>
                    <input
                        type="text"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        className="w-full border border-gray-300 p-2 rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Payment Information</label>
                    <input
                        type="text"
                        value={paymentInfo}
                        onChange={(e) => setPaymentInfo(e.target.value)}
                        className="w-full border border-gray-300 p-2 rounded"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded"
                >
                    Place Order
                </button>
            </form>
        </div>
    );
};

export default Checkout;
