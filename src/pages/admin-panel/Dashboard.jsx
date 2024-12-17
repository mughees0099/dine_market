import { Bar, Line } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from "chart.js";
ChartJS.register(...registerables);

const Dashboard = () => {
  // Placeholder data for charts
  const revenueData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Revenue",
        data: [12000, 19000, 3000, 5000, 2000, 3000],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const productData = {
    labels: ["Product A", "Product B", "Product C", "Product D", "Product E"],
    datasets: [
      {
        label: "Sales",
        data: [300, 450, 200, 600, 400],
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(153, 102, 255, 0.6)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Sales Overview</h2>
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-blue-100 p-4 rounded-md">
            <h3 className="text-lg font-medium text-blue-800">Daily Revenue</h3>
            <p className="text-2xl font-bold text-blue-600">$1,234</p>
          </div>
          <div className="bg-green-100 p-4 rounded-md">
            <h3 className="text-lg font-medium text-green-800">
              Weekly Revenue
            </h3>
            <p className="text-2xl font-bold text-green-600">$9,876</p>
          </div>
          <div className="bg-yellow-100 p-4 rounded-md">
            <h3 className="text-lg font-medium text-yellow-800">
              Monthly Revenue
            </h3>
            <p className="text-2xl font-bold text-yellow-600">$54,321</p>
          </div>
          <div className="bg-purple-100 p-4 rounded-md">
            <h3 className="text-lg font-medium text-purple-800">
              Total Orders
            </h3>
            <p className="text-2xl font-bold text-purple-600">1,234</p>
          </div>
        </div>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Revenue Trends</h2>
        <Line data={revenueData} />
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Top Selling Products</h2>
        <Bar data={productData} />
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Most Active Customers</h2>
        <ul className="divide-y divide-gray-200">
          {[
            "John Doe",
            "Jane Smith",
            "Bob Johnson",
            "Alice Brown",
            "Charlie Davis",
          ].map((customer, index) => (
            <li key={index} className="py-4 flex items-center justify-between">
              <div className="flex items-center">
                <img
                  className="h-10 w-10 rounded-full bg-gray-300"
                  src={`https://i.pravatar.cc/40?img=${index + 1}`}
                  alt=""
                />
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">
                    {customer}
                  </p>
                  <p className="text-sm text-gray-500">{`${
                    Math.floor(Math.random() * 50) + 1
                  } orders`}</p>
                </div>
              </div>
              <div className="text-sm text-gray-500">{`$${(
                Math.random() * 1000
              ).toFixed(2)}`}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
