import { useState } from "react";

const OrdersManagement = () => {
  const [filter, setFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const ordersPerPage = 5;

  const dummyOrders = [
    {
      id: 1001,
      products: ["T-shirt", "Jeans"],
      quantity: 2,
      amount: 89.99,
      status: "Pending",
      date: "2023-06-01",
    },
    {
      id: 1002,
      products: ["Dress"],
      quantity: 1,
      amount: 129.99,
      status: "Shipped",
      date: "2023-06-02",
    },
    {
      id: 1003,
      products: ["Shoes", "Socks"],
      quantity: 3,
      amount: 159.99,
      status: "Delivered",
      date: "2023-06-03",
    },
    {
      id: 1004,
      products: ["Hat"],
      quantity: 1,
      amount: 29.99,
      status: "Canceled",
      date: "2023-06-04",
    },
    {
      id: 1005,
      products: ["Jacket"],
      quantity: 1,
      amount: 199.99,
      status: "Pending",
      date: "2023-06-05",
    },
    {
      id: 1006,
      products: ["Scarf", "Gloves"],
      quantity: 2,
      amount: 49.99,
      status: "Shipped",
      date: "2023-06-06",
    },
    {
      id: 1007,
      products: ["Sweater"],
      quantity: 1,
      amount: 79.99,
      status: "Delivered",
      date: "2023-06-07",
    },
  ];

  const filteredOrders =
    filter === "All"
      ? dummyOrders
      : dummyOrders.filter((order) => order.status === filter);
  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  const currentOrders = filteredOrders.slice(
    indexOfFirstOrder,
    indexOfLastOrder
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const [selectedOrder, setSelectedOrder] = useState(null);

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-semibold text-gray-800">
        Orders Management
      </h2>

      <div className="flex space-x-4">
        {["All", "Pending", "Shipped", "Delivered", "Canceled"].map(
          (status) => (
            <button
              key={status}
              className={`px-4 py-2 rounded ${
                filter === status
                  ? "bg-indigo-600 text-white"
                  : "bg-white text-gray-800"
              }`}
              onClick={() => setFilter(status)}
            >
              {status}
            </button>
          )
        )}
      </div>

      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Order ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Product(s)
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Quantity
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Total Amount
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Order Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {currentOrders.map((order) => (
              <tr key={order.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  #{order.id}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {order.products.join(", ")}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {order.quantity}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  ${order.amount}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      order.status === "Delivered"
                        ? "bg-green-100 text-green-800"
                        : order.status === "Shipped"
                        ? "bg-blue-100 text-blue-800"
                        : order.status === "Pending"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {order.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {order.date}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button
                    onClick={() => setSelectedOrder(order)}
                    className="text-indigo-600 hover:text-indigo-900"
                  >
                    View Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-center mt-4">
        {Array.from(
          { length: Math.ceil(filteredOrders.length / ordersPerPage) },
          (_, i) => (
            <button
              key={i}
              onClick={() => paginate(i + 1)}
              className={`mx-1 px-3 py-1 rounded ${
                currentPage === i + 1
                  ? "bg-indigo-600 text-white"
                  : "bg-white text-gray-800"
              }`}
            >
              {i + 1}
            </button>
          )
        )}
      </div>

      {selectedOrder && (
        <div
          className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full"
          id="my-modal"
        >
          <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
            <div className="mt-3 text-center">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Order Details
              </h3>
              <div className="mt-2 px-7 py-3">
                <p className="text-sm text-gray-500">
                  Order ID: {selectedOrder.id}
                </p>
                <p className="text-sm text-gray-500">
                  Products: {selectedOrder.products.join(", ")}
                </p>
                <p className="text-sm text-gray-500">
                  Quantity: {selectedOrder.quantity}
                </p>
                <p className="text-sm text-gray-500">
                  Total Amount: ${selectedOrder.amount}
                </p>
                <p className="text-sm text-gray-500">
                  Status: {selectedOrder.status}
                </p>
                <p className="text-sm text-gray-500">
                  Order Date: {selectedOrder.date}
                </p>
              </div>
              <div className="items-center px-4 py-3">
                <button
                  id="ok-btn"
                  className="px-4 py-2 bg-indigo-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-300"
                  onClick={() => setSelectedOrder(null)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrdersManagement;
