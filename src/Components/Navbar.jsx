"use client";

import { ShoppingCart } from "lucide-react";
import { useContext, useState, useEffect } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { CartContext } from "../pages/Context/Context";
import Cart from "../pages/addToCart.jsx";
import { Link } from "react-router-dom";

const Menu = ({ handleNav }) => {
  return (
    <div className="space-y-6 md:space-y-0 md:space-x-8">
      <div className="flex flex-col space-y-6 md:flex-row md:space-y-0 md:space-x-8 font-bold text-slate-800">
        <Link to="/female" onClick={handleNav}>
          <button className="text-lg hover:text-gray-600 transition-colors">
            Female
          </button>
        </Link>
        <Link to="/male" onClick={handleNav}>
          <button className="text-lg hover:text-gray-600 transition-colors">
            Male
          </button>
        </Link>
        <Link to="/kids" onClick={handleNav}>
          <button className="text-lg hover:text-gray-600 transition-colors">
            Kids
          </button>
        </Link>
        <Link to="/allProducts" onClick={handleNav}>
          <button className="text-lg hover:text-gray-600 transition-colors">
            All Products
          </button>
        </Link>
      </div>
    </div>
  );
};

// eslint-disable-next-line react/prop-types
function Navbar({ toggleCart, isOpen, setIsOpen }) {
  const [nav, setNav] = useState(false);
  const { cart, removeFromCart, updateQuantity } = useContext(CartContext);

  function handleNav() {
    setNav((nav) => !nav);
  }

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        nav &&
        !event.target.closest(".mobile-menu") &&
        !event.target.closest(".menu-button")
      ) {
        setNav(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [nav]);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (nav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [nav]);

  return (
    <>
      {/* Desktop navbar */}
      <nav className="lg:flex hidden justify-between w-[98vw] items-center h-20 px-4">
        <Link to={"/"}>
          <img src={"/images/Logo.webp"} alt="logo" height={25} width={140} />
        </Link>

        <div className="hidden lg:flex">
          <Menu />
        </div>

        <div className="flex gap-8 justify-center items-center">
          <button
            onClick={toggleCart}
            className="bg-slate-200 rounded-full p-2 cursor-pointer xl:hover:transition-transform xl:hover:scale-110 xl:ease-linear duration-100 relative"
            aria-label={isOpen ? "Close cart" : "Open cart"}
          >
            <ShoppingCart className="w-5 h-5" />
            <span className="absolute -top-2 -right-2 text-white bg-[#f02d34] font-bold h-5 w-5 text-center rounded-full">
              {cart.length}
            </span>
          </button>
          <div className="font-bold text-slate-800">
            <Link className="hover:underline " to="/login">
              Login
            </Link>
            /
            <Link className="hover:underline " to="/register">
              Register
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile navbar header */}
      <div className="lg:hidden flex justify-between items-center px-4 h-20">
        <Link to={"/"}>
          <img src={"/images/Logo.webp"} alt="logo" height={25} width={140} />
        </Link>
        <div className="flex items-center gap-4">
          <button
            onClick={toggleCart}
            className="bg-slate-200 rounded-full p-2 cursor-pointer relative"
            aria-label={isOpen ? "Close cart" : "Open cart"}
          >
            <ShoppingCart className="w-5 h-5" />
            <span className="absolute -top-2 -right-2 text-white bg-[#f02d34] font-bold h-5 w-5 text-center rounded-full">
              {cart.length}
            </span>
          </button>
          <div className="menu-button">
            {nav ? (
              <RiCloseLine
                color="black"
                fontSize={27}
                className="cursor-pointer"
                onClick={handleNav}
              />
            ) : (
              <RiMenu3Line
                color="black"
                fontSize={27}
                className="cursor-pointer"
                onClick={handleNav}
              />
            )}
          </div>
        </div>
      </div>

      {/* Mobile slide-in menu */}
      <div
        className={`fixed top-0 right-0 h-full w-[70%] bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out lg:hidden mobile-menu ${
          nav ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 flex flex-col h-full">
          <div className="flex justify-end mb-8">
            <RiCloseLine
              color="black"
              fontSize={27}
              className="cursor-pointer"
              onClick={handleNav}
            />
          </div>

          <div className="flex flex-col space-y-8">
            <Menu handleNav={handleNav} />

            <div className="pt-6 border-t border-gray-200">
              <div className="font-bold text-slate-800 flex space-x-2">
                <Link
                  className="hover:underline text-lg"
                  to="/login"
                  onClick={handleNav}
                >
                  Login
                </Link>
                <span>/</span>
                <Link
                  className="hover:underline text-lg"
                  to="/register"
                  onClick={handleNav}
                >
                  Register
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-auto">
            <p className="text-sm text-gray-500">© 2023 Dine Market</p>
          </div>
        </div>
      </div>

      {/* Overlay when mobile menu is open */}
      {nav && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={handleNav}
        ></div>
      )}

      {/* Cart component */}
      <Cart
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        cart={cart}
        toggleCart={toggleCart}
        removeFromCart={removeFromCart}
        updateQuantity={updateQuantity}
      />
    </>
  );
}

export default Navbar;
