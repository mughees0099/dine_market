/* eslint-disable react/prop-types */
import { Link, useLocation } from "react-router-dom";
import {
  HomeIcon,
  ShoppingBagIcon,
  UserIcon,
  HeartIcon,
  ShoppingCartIcon,
  BellIcon,
  TagIcon,
} from "@heroicons/react/outline";
import { LayoutDashboard } from "lucide-react";

const Sidebar = ({ open, setOpen }) => {
  const location = useLocation();
  const navigation = [
    { name: "Home", href: "/", icon: HomeIcon },
    { name: "Dashboard", href: "/user", icon: LayoutDashboard },
    { name: "Orders", href: "/user/orders", icon: ShoppingBagIcon },
    { name: "Profile", href: "/user/profile", icon: UserIcon },
    { name: "Wishlist", href: "/user/wishlist", icon: HeartIcon },
    { name: "Cart", href: "/user/cart", icon: ShoppingCartIcon },
    { name: "Notifications", href: "/user/notifications", icon: BellIcon },
    { name: "Promotions", href: "/user/promotions", icon: TagIcon },
  ];

  return (
    <div
      className={`${
        open ? "translate-x-0" : "-translate-x-full"
      } fixed z-30 inset-y-0 left-0 w-64 transition duration-300 transform bg-white overflow-y-auto lg:translate-x-0 lg:static lg:inset-0`}
    >
      <div className="flex items-center justify-center mt-8">
        <div className="flex items-center">
          <span className="text-2xl font-semibold text-gray-800">
            Dine Market
          </span>
        </div>
      </div>
      <nav className="mt-10">
        {navigation.map((item) => (
          <Link
            key={item.name}
            to={item.href}
            className={`flex items-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100 transition-all duration-300 ${
              location.pathname === item.href
                ? "bg-gray-700 bg-opacity-25 text-gray-100"
                : ""
            }`}
            onClick={() => setOpen(false)}
          >
            <item.icon className="h-6 w-6" />
            <span className="mx-3">{item.name}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
