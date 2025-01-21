/* eslint-disable react/prop-types */
import React from "react";

const WishlistItem = ({ item, onRemove, onAddToCart }) => (
  <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:scale-105">
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
    <div className="space-x-2">
      <button
        onClick={() => onAddToCart(item)}
        className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition-colors duration-300"
      >
        Add to Cart
      </button>
      <button
        onClick={() => onRemove(item.id)}
        className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors duration-300"
      >
        Remove
      </button>
    </div>
  </div>
);

const Wishlist = () => {
  const [wishlistItems, setWishlistItems] = React.useState([
    {
      id: 1,
      name: "Classic White T-Shirt",
      price: 19.99,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Denim Jeans",
      price: 49.99,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      name: "Leather Jacket",
      price: 99.99,
      image: "https://via.placeholder.com/150",
    },
  ]);

  const removeFromWishlist = (id) => {
    setWishlistItems(wishlistItems.filter((item) => item.id !== id));
  };

  const addToCart = (item) => {
    console.log("Added to cart:", item);
    // Here you would typically add the item to the cart state or send a request to your backend
  };

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-semibold text-gray-800">My Wishlist</h2>
      {wishlistItems.length === 0 ? (
        <p className="text-gray-600">Your wishlist is empty.</p>
      ) : (
        <div className="space-y-4">
          {wishlistItems.map((item) => (
            <WishlistItem
              key={item.id}
              item={item}
              onRemove={removeFromWishlist}
              onAddToCart={addToCart}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
