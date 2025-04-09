"use client";

import "./App.css";
import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
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
import LoginPage from "./pages/Login";
import NotFound from "./pages/NotFound";
import RegisterPage from "./pages/Register";

// Create a wrapper component that uses useLocation
function AppContent() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // This will cause re-render when route changes

  const toggleCart = () => setIsOpen(!isOpen);

  const isAdminLoginRegister = () => {
    const path = location.pathname; // Use location from React Router instead of window.location
    return (
      path.includes("admin") ||
      path.includes("user") ||
      path.includes("login") ||
      path.includes("register")
    );
  };

  return (
    <main className="body">
      {!isAdminLoginRegister() && (
        <Navbar toggleCart={toggleCart} isOpen={isOpen} setIsOpen={setIsOpen} />
      )}

      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/" element={<Home />} />
        <Route path="/allProducts" element={<AllProducts />} />
        <Route path="/female" element={<Female />} />
        <Route path="/male" element={<Male />} />
        <Route path="/kids" element={<Kids />} />

        <Route
          path="/product/:category/:id"
          element={<ProductOverview setIsOpen={setIsOpen} />}
        />
        <Route path="/products/:id/checkout/:id" element={<CheckoutPage />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/user/*" element={<UserPanel />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {!isAdminLoginRegister() && <Footer />}
    </main>
  );
}

function App() {
  return (
    <CartProvider>
      <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <AppContent />
      </Router>
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
