import { useState } from "react";
import Dashboard from "./Dashboard";
import Orders from "./Orders";
import Products from "./Products";
import Categories from "./Categories";
import Customers from "./Customers";
import Inventory from "./Inventory";
import Promotions from "./Promotions";
import Settings from "./Settings";
import Sidebar from "./Sidebar";

function AdminPanel() {
  const [activeTab, setActiveTab] = useState("dashboard");

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <Dashboard />;
      case "orders":
        return <Orders />;
      case "products":
        return <Products />;
      case "categories":
        return <Categories />;
      case "customers":
        return <Customers />;
      case "inventory":
        return <Inventory />;
      case "promotions":
        return <Promotions />;
      case "settings":
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex h-full bg-gray-100">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="flex-1">
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
            <h1 className="text-2xl font-semibold text-gray-900 capitalize">
              {activeTab}
            </h1>
          </div>
        </header>
        <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}

export default AdminPanel;
