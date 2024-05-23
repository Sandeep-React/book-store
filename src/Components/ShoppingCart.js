import React, { useContext } from 'react';
import { CartContext } from '../Contexts/CartContext';
import { useNavigate } from 'react-router-dom';

const ShoppingCart = () => {
    const { cartItems, removeFromCart, updateQuantity } = useContext(CartContext);
    const navigate = useNavigate(); // Initialize useNavigate

    const handleQuantityChange = (bookId, quantity) => {
        if (quantity <= 0) {
            removeFromCart(bookId);
        } else {
            updateQuantity(bookId, quantity);
        }
    };

    // Calculate total items and total price
    const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
    const totalPrice = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-xl font-semibold mb-4">Shopping Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div>
                    {cartItems.map((item) => (
                        <div key={item.id} className="flex items-center mb-4">
                            <img src={item.volumeInfo.imageLinks?.thumbnail} alt={item.volumeInfo.title} className="w-20 h-20 object-cover mr-4" />
                            <div className="flex-grow">
                                <h3 className="text-lg font-semibold">{item.volumeInfo.title}</h3>
                                <p className="text-sm text-gray-600">{item.volumeInfo.authors?.join(', ')}</p>
                                <p className="text-sm text-gray-600">Price: Rs. {item.price}</p>
                                <div className="flex items-center mt-2">
                                    <input
                                        type="number"
                                        value={item.quantity}
                                        onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                                        className="w-16 text-center border border-gray-300 rounded mr-4"
                                    />
                                    <button
                                        onClick={() => removeFromCart(item.id)}
                                        className="bg-red-500 hover:bg-red-600 text-white py-1 px-2 rounded-md"
                                    >
                                        Remove
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className="mt-4">
                        <p>Total Items: {totalItems}</p>
                        <p>Total Price: Rs. {totalPrice.toFixed(2)}</p> {/* Fixed to 2 decimal places */}
                        <button 
                            className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md" 
                            onClick={() => navigate('/checkout')} // Navigate to the Checkout page
                        >
                            Proceed to Checkout
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ShoppingCart;
