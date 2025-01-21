/* eslint-disable react/prop-types */
const Sidebar = ({ activeTab, setActiveTab }) => {
  const tabs = [
    "dashboard",
    "orders",
    "products",
    "categories",
    "customers",
    "inventory",
    "promotions",
    "settings",
  ];

  return (
    <div className="bg-gray-800 text-white w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
      <nav>
        {tabs.map((tab) => (
          <a
            key={tab}
            href="#"
            className={`block py-2.5 px-4 rounded transition duration-200 ${
              activeTab === tab ? "bg-gray-700" : "hover:bg-gray-700"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </a>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
