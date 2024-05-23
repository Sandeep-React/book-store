import React, { useState, useContext } from 'react';
import { CartContext } from '../Contexts/CartContext';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
    const { cartItems, clearCart } = useContext(CartContext);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        address: '',
        paymentInfo: ''
    });
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validate = () => {
        const errors = {};
        if (!formData.name) errors.name = 'Name is required';
        if (!formData.email) errors.email = 'Email is required';
        if (!formData.address) errors.address = 'Address is required';
        if (!formData.paymentInfo) errors.paymentInfo = 'Payment information is required';
        return errors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            console.log('Order placed:', { ...formData, cartItems });
            clearCart();
            alert('Order placed successfully!');
            navigate('/');
        }
    };

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-semibold mb-6">Checkout</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6">
                        <div className="mb-4">
                            <label className="block text-gray-700">Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className={`w-full border p-2 rounded ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                            />
                            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className={`w-full border p-2 rounded ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                            />
                            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">Address</label>
                            <input
                                type="text"
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                className={`w-full border p-2 rounded ${errors.address ? 'border-red-500' : 'border-gray-300'}`}
                            />
                            {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address}</p>}
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">Payment Information</label>
                            <input
                                type="text"
                                name="paymentInfo"
                                value={formData.paymentInfo}
                                onChange={handleChange}
                                className={`w-full border p-2 rounded ${errors.paymentInfo ? 'border-red-500' : 'border-gray-300'}`}
                            />
                            {errors.paymentInfo && <p className="text-red-500 text-xs mt-1">{errors.paymentInfo}</p>}
                        </div>
                        <button
                            type="submit"
                            className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded"
                        >
                            Place Order
                        </button>
                    </form>
                </div>
                <div className="bg-white shadow-md rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
                    {cartItems.length === 0 ? (
                        <p>Your cart is empty.</p>
                    ) : (
                        <div>
                            {cartItems.map((item) => (
                                <div key={item.id} className="mb-4 flex justify-between items-center">
                                    <img src={item.volumeInfo.imageLinks?.thumbnail} alt={item.volumeInfo.title} className="w-16 h-16 object-cover" />
                                    <div className="flex-grow ml-4">
                                        <h3 className="text-lg font-semibold">{item.volumeInfo.title}</h3>
                                        <p className="text-sm text-gray-600">{item.volumeInfo.authors?.join(', ')}</p>
                                        <p className="text-sm text-gray-600">Price: Rs. {item.price}</p>
                                        <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                                    </div>
                                </div>
                            ))}
                            <div className="mt-4">
                                <p className="text-lg font-semibold">Total Items: {cartItems.reduce((acc, item) => acc + item.quantity, 0)}</p>
                                <p className="text-lg font-semibold">Total Price: Rs. {cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0).toFixed(2)}</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Checkout;
