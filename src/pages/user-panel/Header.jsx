/* eslint-disable react/prop-types */
import { MenuIcon, BellIcon } from "@heroicons/react/outline";

const Header = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <header className="flex justify-between items-center py-4 px-6 bg-white border-b-4 border-indigo-600">
      <div className="flex items-center">
        <button
          className="text-gray-500 focus:outline-none lg:hidden"
          onClick={() => setSidebarOpen(true)}
        >
          <MenuIcon className="h-6 w-6" />
        </button>
      </div>
      <div className="flex items-center">
        <button className="flex mx-4 text-gray-600 focus:outline-none">
          <BellIcon className="h-6 w-6" />
        </button>
        <div className="relative">
          <button className="relative z-10 block h-8 w-8 rounded-full overflow-hidden focus:outline-none">
            <img
              className="h-full w-full object-cover"
              src="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80"
              alt="Your avatar"
            />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
