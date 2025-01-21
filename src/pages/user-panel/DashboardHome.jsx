/* eslint-disable react/prop-types */
import {
  ShoppingBagIcon,
  ClockIcon,
  CheckCircleIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/outline";
import { Line, Pie } from "react-chartjs-2";

const OverviewCard = ({ title, value, icon: Icon, color }) => (
  <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 transform hover:scale-105">
    <div className="flex items-center">
      <div className={`p-3 rounded-full ${color} bg-opacity-75`}>
        <Icon className="h-8 w-8 text-white" />
      </div>
      <div className="ml-4">
        <h4 className="text-sm text-gray-500 uppercase">{title}</h4>
        <p className="mt-2 text-3xl font-semibold text-gray-800">{value}</p>
      </div>
    </div>
  </div>
);

const DashboardHome = () => {
  const lineChartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Monthly Spending",
        data: [65, 59, 80, 81, 56, 55],
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };

  const pieChartData = {
    labels: ["Pending", "Delivered", "Canceled"],
    datasets: [
      {
        data: [30, 50, 20],
        backgroundColor: ["#FBBF24", "#34D399", "#EF4444"],
        hoverBackgroundColor: ["#F59E0B", "#10B981", "#DC2626"],
      },
    ],
  };

  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-semibold text-gray-800">
        Welcome back, John!
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <OverviewCard
          title="Total Orders"
          value="125"
          icon={ShoppingBagIcon}
          color="bg-blue-500"
        />
        <OverviewCard
          title="Pending Orders"
          value="10"
          icon={ClockIcon}
          color="bg-yellow-500"
        />
        <OverviewCard
          title="Completed Orders"
          value="115"
          icon={CheckCircleIcon}
          color="bg-green-500"
        />
        <OverviewCard
          title="Total Spending"
          value="$1,254"
          icon={CurrencyDollarIcon}
          color="bg-indigo-500"
        />
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          Order Summary
        </h3>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Order ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Amount
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {[1, 2, 3].map((order) => (
              <tr key={order} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  #{1000 + order}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  2023-06-{10 + order}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  ${50 * order}.00
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Delivered
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="mt-4">
          <button className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition-colors duration-300">
            View All Orders
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Monthly Spending Trends
          </h3>
          <Line data={lineChartData} />
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Order Status Distribution
          </h3>
          <Pie data={pieChartData} />
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
