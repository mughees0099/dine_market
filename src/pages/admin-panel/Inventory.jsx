import { useState, useEffect } from "react";

const Inventory = () => {
  const [products, setProducts] = useState([
    { id: 1, name: "T-shirt", stock: 100, lowStockThreshold: 20 },
    { id: 2, name: "Jeans", stock: 75, lowStockThreshold: 15 },
    { id: 3, name: "Sneakers", stock: 50, lowStockThreshold: 10 },
    { id: 4, name: "Hoodie", stock: 8, lowStockThreshold: 10 },
  ]);

  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const lowStockItems = products.filter(
      (product) => product.stock < product.lowStockThreshold
    );
    setNotifications(
      lowStockItems.map(
        (item) => `Low stock alert: ${item.name} (${item.stock} left)`
      )
    );
  }, [products]);

  const updateStock = (id, newStock) => {
    setProducts(
      products.map((product) =>
        product.id === id ? { ...product, stock: parseInt(newStock) } : product
      )
    );
  };

  return (
    <div className="space-y-8">
      {notifications.length > 0 && (
        <div
          className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-4"
          role="alert"
        >
          <p className="font-bold">Low Stock Notifications</p>
          <ul className="list-disc list-inside">
            {notifications.map((notification, index) => (
              <li key={index}>{notification}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Product Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Current Stock
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Update Stock
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {products.map((product) => (
              <tr key={product.id}>
                <td className="px-6 py-4 whitespace-nowrap">{product.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      product.stock < product.lowStockThreshold
                        ? "bg-red-100 text-red-800"
                        : "bg-green-100 text-green-800"
                    }`}
                  >
                    {product.stock}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <input
                    type="number"
                    value={product.stock}
                    onChange={(e) => updateStock(product.id, e.target.value)}
                    className="border border-gray-300 rounded-md shadow-sm p-2 w-20"
                    min="0"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Inventory;
