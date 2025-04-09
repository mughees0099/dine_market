"use client";

import { Link } from "react-router-dom";
import { ArrowLeft, ShoppingBag, Home } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8 text-center">
        <div className="flex flex-col items-center">
          <div className="relative">
            <div className="text-9xl font-bold text-gray-200">404</div>
            <div className="absolute inset-0 flex items-center justify-center">
              <ShoppingBag className="h-16 w-16 text-gray-800" />
            </div>
          </div>

          <h1 className="mt-6 text-3xl font-bold tracking-tight text-gray-900">
            Page not found
          </h1>
          <p className="mt-2 text-base text-gray-600">
            Sorry, we couldn't find the page you're looking for.
          </p>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-gray-800 px-4 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
          >
            <Home className="h-5 w-5" />
            Back to home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center gap-2 rounded-md border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
          >
            <ArrowLeft className="h-5 w-5" />
            Go back
          </button>
        </div>

        <div className="mt-8 border-t border-gray-200 pt-8">
          <p className="text-sm text-gray-600">
            Looking for something specific? Try searching or check out these
            popular pages:
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-x-6 gap-y-2">
            <Link
              to="/allProducts"
              className="text-sm font-medium text-gray-600 hover:text-gray-900"
            >
              All Products
            </Link>
            <Link
              to="/female"
              className="text-sm font-medium text-gray-600 hover:text-gray-900"
            >
              Women's Collection
            </Link>
            <Link
              to="/male"
              className="text-sm font-medium text-gray-600 hover:text-gray-900"
            >
              Men's Collection
            </Link>
            <Link
              to="/kids"
              className="text-sm font-medium text-gray-600 hover:text-gray-900"
            >
              Kids' Collection
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
