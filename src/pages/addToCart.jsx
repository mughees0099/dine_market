/* eslint-disable react/prop-types */

import { useState, useEffect } from "react";
import { X, Plus, Minus } from "lucide-react";
import { Link } from "react-router-dom";

export default function Cart({
  isOpen,
  setIsOpen,
  toggleCart,
  cart,
  updateQuantity,
}) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    } else {
      const timer = setTimeout(() => setIsVisible(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  if (!isVisible && !isOpen) return null;

  return (
    <aside
      className={`w-full sm:w-96 p-6 bg-white border-l border-gray-200 fixed right-0 top-0 h-full z-50 shadow-lg flex flex-col transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0 " : "translate-x-full"
      }`}
      aria-label="Shopping cart"
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Your Cart</h2>
        <button
          className="p-2 hover:bg-gray-100 rounded-full"
          onClick={toggleCart}
          aria-label="Close cart"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {cart.length > 0 ? (
        <>
          <ul className="space-y-6 overflow-y-auto flex-grow mb-6">
            {cart.map((item) => (
              <li key={item.id} className="flex space-x-4">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded"
                />
                <div className="flex-1">
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-gray-600">${item.price.toFixed(2)}</p>
                  <div className="flex items-center mt-2">
                    <button
                      className="p-1 bg-gray-200 rounded-full"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      aria-label={`Decrease quantity of ${item.name}`}
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="mx-2">{item.quantity}</span>
                    <button
                      className="p-1 bg-gray-200 rounded-full"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      aria-label={`Increase quantity of ${item.name}`}
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="border-t border-gray-200 pt-6">
            <div className="flex justify-between items-center mb-4">
              <span className="font-semibold">Total:</span>
              <span className="font-bold text-lg">
                ${totalPrice.toFixed(2)}
              </span>
            </div>
            <Link
              to={`/products/${crypto.randomUUID()}/checkout/${crypto.randomUUID()}`}
            >
              <button
                className="w-full py-2 bg-[#374151] text-white rounded hover:bg-[#2c3340] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Proceed to Checkout
              </button>
            </Link>
          </div>
        </>
      ) : (
        <p className="text-center text-gray-600">Your cart is empty</p>
      )}
    </aside>
  );
}
