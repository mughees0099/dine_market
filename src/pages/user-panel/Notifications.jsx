/* eslint-disable react/prop-types */
import { useState } from "react";

const NotificationItem = ({ notification, onToggleRead }) => (
  <div
    className={`p-4 ${
      notification.read ? "bg-white" : "bg-blue-50"
    } rounded-lg shadow-md transition-all duration-300 hover:shadow-lg`}
  >
    <div className="flex justify-between items-start">
      <div>
        <h3 className="text-lg font-semibold text-gray-800">
          {notification.title}
        </h3>
        <p className="text-gray-600">{notification.message}</p>
        <p className="text-sm text-gray-500 mt-2">{notification.date}</p>
      </div>
      <button
        onClick={() => onToggleRead(notification.id)}
        className={`px-3 py-1 rounded ${
          notification.read
            ? "bg-gray-200 text-gray-700"
            : "bg-blue-600 text-white"
        }`}
      >
        {notification.read ? "Mark Unread" : "Mark Read"}
      </button>
    </div>
  </div>
);

const Notifications = () => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: "Order Shipped",
      message: "Your order #1234 has been shipped.",
      date: "2023-06-15",
      read: false,
    },
    {
      id: 2,
      title: "New Promotion",
      message: "Flash Sale: 50% off on selected items!",
      date: "2023-06-14",
      read: true,
    },
    {
      id: 3,
      title: "Order Delivered",
      message: "Your order #1233 has been delivered.",
      date: "2023-06-13",
      read: false,
    },
  ]);

  const toggleRead = (id) => {
    setNotifications(
      notifications.map((notification) =>
        notification.id === id
          ? { ...notification, read: !notification.read }
          : notification
      )
    );
  };

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-semibold text-gray-800">Notifications</h2>
      <div className="space-y-4">
        {notifications.map((notification) => (
          <NotificationItem
            key={notification.id}
            notification={notification}
            onToggleRead={toggleRead}
          />
        ))}
      </div>
    </div>
  );
};

export default Notifications;
