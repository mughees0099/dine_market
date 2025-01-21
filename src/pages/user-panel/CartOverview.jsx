/* eslint-disable react/prop-types */
import { useState } from "react";

const CartItem = ({ item, onUpdateQuantity, onRemove }) => (
  <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-md">
    <div className="flex items-center space-x-4">
      <img
        src={item.image}
        alt={item.name}
        className="w-16 h-16 object-cover rounded"
      />
      <div>
        <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
        <p className="text-gray-600">${item.price.toFixed(2)}</p>
      </div>
    </div>
    <div className="flex items-center space-x-4">
      <div className="flex items-center">
        <button
          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
          className="px-2 py-1 bg-gray-200 text-gray-700 rounded-l"
        >
          -
        </button>
        <span className="px-4 py-1 bg-gray-100">{item.quantity}</span>
        <button
          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
          className="px-2 py-1 bg-gray-200 text-gray-700 rounded-r"
        >
          +
        </button>
      </div>
      <button
        onClick={() => onRemove(item.id)}
        className="px-2 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition-colors duration-300"
      >
        Remove
      </button>
    </div>
  </div>
);

const CartOverview = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Classic White T-Shirt",
      price: 19.99,
      quantity: 2,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Denim Jeans",
      price: 49.99,
      quantity: 1,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      name: "Leather Jacket",
      price: 99.99,
      quantity: 1,
      image: "https://via.placeholder.com/150",
    },
  ]);

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity > 0) {
      setCartItems(
        cartItems.map((item) =>
          item.id === id ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-semibold text-gray-800">Cart Overview</h2>
      {cartItems.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              onUpdateQuantity={updateQuantity}
              onRemove={removeItem}
            />
          ))}
          <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow-md">
            <span className="text-xl font-semibold text-gray-800">Total:</span>
            <span className="text-2xl font-bold text-indigo-600">
              ${totalAmount.toFixed(2)}
            </span>
          </div>
          <button className="w-full py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-300 transform hover:scale-105">
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default CartOverview;
