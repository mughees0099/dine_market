import { useParams, Link } from "react-router-dom";
import { useContext } from "react";
import { data } from "./Data/data.js";
import { ArrowLeft, ShoppingCart } from "lucide-react";
import { CartContext } from "./Context/Context.js";

// eslint-disable-next-line react/prop-types
const ProductOverview = ({ setIsOpen }) => {
  const { id } = useParams();
  const product = data.find((item) => item.id == id);
  const { addToCart } = useContext(CartContext);

  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Product Not Found
        </h1>
        <Link
          to="/"
          className="text-blue-600 hover:text-blue-800 transition duration-300"
        >
          Return to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link
          to="/allproducts"
          className="inline-flex items-center text-gray-600 hover:text-gray-800 mb-6 transition duration-300"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Products
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <img
              src={product.img}
              alt={product.name}
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
            <div className="grid grid-cols-4 gap-2">
              {[...Array(4)].map((_, index) => (
                <img
                  key={index}
                  src={product.img}
                  alt={`${product.name} thumbnail`}
                  className="w-full h-24 object-cover rounded-md cursor-pointer hover:opacity-75 transition duration-300"
                />
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
            <p className="text-xl text-gray-600">{product.type}</p>
            <p className="text-2xl font-semibold text-gray-900">
              ${product.price.toFixed(2)}
            </p>

            <div className="border-t border-b border-gray-200 py-4">
              <h2 className="text-lg font-semibold text-gray-900 mb-2">
                Description
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {product.description || "No description available."}
              </p>
            </div>

            <div className="flex space-x-4">
              <button
                onClick={() => {
                  addToCart(product);
                  setIsOpen(true);
                }}
                className="flex-1 bg-[#374151] text-white py-3 px-6 rounded-md hover:bg-[#2c3340] transition duration-300 flex items-center justify-center hover:scale-[1.02]"
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                Add to Cart
              </button>
            </div>

            <div className="bg-gray-100 p-4 rounded-md">
              <h2 className="text-lg font-semibold text-gray-900 mb-2">
                Product Details
              </h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Material: Premium quality</li>
                <li>Color: As shown in image</li>
                <li>Size: Standard fit</li>
                <li>Care: Machine washable</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductOverview;
