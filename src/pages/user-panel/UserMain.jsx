import { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import DashboardHome from "./DashboardHome";
import OrdersManagement from "./OrdersManagement";
import ProfileManagement from "./ProfileManagement";
import Wishlist from "./Wishlist";
import CartOverview from "./CartOverview";
import Notifications from "./Notifications";
import Promotions from "./Promotions";

function UserPanel() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  const getPageTitle = () => {
    const path = location.pathname.split("/")[2] || "dashboard";
    return path.charAt(0).toUpperCase() + path.slice(1);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
          <div className="container mx-auto px-6 py-8">
            <h1 className="text-2xl font-semibold text-gray-900 mb-6">
              {getPageTitle()}
            </h1>
            <Routes>
              <Route path="/" element={<DashboardHome />} />
              <Route path="/orders" element={<OrdersManagement />} />
              <Route path="/profile" element={<ProfileManagement />} />
              <Route path="/wishlist" element={<Wishlist />} />
              <Route path="/cart" element={<CartOverview />} />
              <Route path="/notifications" element={<Notifications />} />
              <Route path="/promotions" element={<Promotions />} />
            </Routes>
          </div>
        </main>
      </div>
    </div>
  );
}

export default UserPanel;
