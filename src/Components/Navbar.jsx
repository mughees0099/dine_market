import { ShoppingCart } from "lucide-react";
import { useContext, useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { CartContext } from "../pages/Context/Context";
import Cart from "../pages/addToCart.jsx";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <main>
      <div>
        <div className="space-x-8 font-bold text-slate-800">
          <Link to="/female">
            <button>Female</button>
          </Link>
          <Link to="/male">
            <button>Male</button>
          </Link>
          <Link to="/kids">
            <button>Kids</button>
          </Link>
          <Link to="/allProducts">
            <button>All Products</button>
          </Link>
        </div>
      </div>
    </main>
  );
};

// eslint-disable-next-line react/prop-types
function Navbar({ toggleCart, isOpen, setIsOpen }) {
  const [nav, setNav] = useState(false);
  const { cart, removeFromCart, updateQuantity } = useContext(CartContext);

  function handleNav() {
    setNav((nav) => !nav);
  }

  return (
    <>
      <nav className="lg:flex sm:hidden justify-between w-[98vw] items-center h-20 px-4">
        <Link to={"/"}>
          <img src={"/images/Logo.webp"} alt="logo" height={25} width={140} />
        </Link>

        <div className="sm:hidden lg:flex">
          <Menu />
        </div>

        <button
          onClick={toggleCart}
          className="bg-slate-200 rounded-full p-2 cursor-pointer xl:hover:transition-transform xl:hover:scale-110 xl:ease-linear duration-100 sm:hidden lg:flex relative"
          aria-label={isOpen ? "Close cart" : "Open cart"}
        >
          <ShoppingCart className="w-5 h-5" />
          <span className="absolute -top-2 -right-2 text-white bg-[#f02d34] font-bold h-5 w-5 text-center rounded-full">
            {cart.length}
          </span>
        </button>
      </nav>
      {/* mobile nav  */}
      <div className="sm:flex lg:hidden justify-between items-center px-4 h-20">
        <Link to={"/"}>
          <img src={"/images/Logo.webp"} alt="logo" height={25} width={140} />
        </Link>
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
      {nav && (
        <div className="my-8 bg-slate-200 py-4 rounded-lg sm:grid lg:hidden justify-center">
          <Menu />
          <button
            onClick={toggleCart}
            className="bg-slate-200 rounded-full p-2 cursor-pointer xl:hover:transition-transform xl:hover:scale-110 xl:ease-linear duration-100   justify-center"
            aria-label={isOpen ? "Close cart" : "Open cart"}
          >
            <div className="flex justify-center relative mt-3">
              <ShoppingCart className="w-5 h-5 " />
              <span className="absolute -top-3 left-[150px]  text-white bg-[#f02d34] font-bold h-5 w-5 text-center rounded-full">
                {cart.length}
              </span>
            </div>
          </button>
        </div>
      )}
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
