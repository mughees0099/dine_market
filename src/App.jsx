import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./pages/Context/CartContext";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Feature from "./Components/Feature";
import Subscribes from "./Components/Subscribe";
import Footer from "./Components/Footer";
import Section from "./Components/Section";
import AllProducts from "./pages/AllProducts";
import Female from "./pages/Female";
import Male from "./pages/Male";
import Kids from "./pages/Kids";
import Products from "./Components/Product";
import ProductOverview from "./pages/productOverview";
import CheckoutPage from "./pages/Checkout";
import AdminPanel from "./pages/admin-panel/AdminMain";
import UserPanel from "./pages/user-panel/UserMain";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCart = () => setIsOpen(!isOpen);
  return (
    <CartProvider>
      <main className="body">
        <Router
          future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
        >
          {!window.location.pathname.includes("admin") && (
            <Navbar
              toggleCart={toggleCart}
              isOpen={isOpen}
              setIsOpen={setIsOpen}
            />
          )}

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/allProducts" element={<AllProducts />} />
            <Route path="/female" element={<Female />} />
            <Route path="/male" element={<Male />} />
            <Route path="/kids" element={<Kids />} />

            <Route
              path="/product/:category/:id"
              element={<ProductOverview setIsOpen={setIsOpen} />}
            />
            <Route
              path="/products/:id/checkout/:id"
              element={<CheckoutPage />}
            />
            <Route path="/admin" element={<AdminPanel />} />
            <Route path="/user/*" element={<UserPanel />} />
            <Route path="*" element={<Home />} />
          </Routes>
          {!window.location.pathname.includes("admin") && <Footer />}
        </Router>
      </main>
    </CartProvider>
  );
}

function Home() {
  return (
    <div className="margin">
      <Hero />
      <Section />
      <Products />
      <Feature />
      <Subscribes />
    </div>
  );
}

export default App;
