import { useState } from "react";

const Promotions = () => {
  const [coupons, setCoupons] = useState([
    {
      id: 1,
      code: "SUMMER10",
      type: "percentage",
      value: 10,
      expiryDate: "2023-08-31",
    },
    {
      id: 2,
      code: "FREESHIP",
      type: "fixed",
      value: 5,
      expiryDate: "2023-12-31",
    },
  ]);

  const [newCoupon, setNewCoupon] = useState({
    code: "",
    type: "percentage",
    value: "",
    expiryDate: "",
  });

  const [flashSale, setFlashSale] = useState({
    name: "",
    startDate: "",
    endDate: "",
    discount: "",
  });

  const handleCouponChange = (e) => {
    const { name, value } = e.target;
    setNewCoupon({ ...newCoupon, [name]: value });
  };

  const handleAddCoupon = (e) => {
    e.preventDefault();
    const newId =
      coupons.length > 0 ? Math.max(...coupons.map((c) => c.id)) + 1 : 1;
    setCoupons([...coupons, { ...newCoupon, id: newId }]);
    setNewCoupon({ code: "", type: "percentage", value: "", expiryDate: "" });
  };

  const handleFlashSaleChange = (e) => {
    const { name, value } = e.target;
    setFlashSale({ ...flashSale, [name]: value });
  };

  const handleCreateFlashSale = (e) => {
    e.preventDefault();
    // Here you would typically send this data to your backend
    console.log("Flash Sale Created:", flashSale);
    // Reset the form
    setFlashSale({ name: "", startDate: "", endDate: "", discount: "" });
  };

  return (
    <div className="space-y-8">
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Create Discount Coupon</h2>
        <form onSubmit={handleAddCoupon} className="space-y-4">
          <div>
            <label
              htmlFor="code"
              className="block text-sm font-medium text-gray-700"
            >
              Coupon Code
            </label>
            <input
              type="text"
              id="code"
              name="code"
              value={newCoupon.code}
              onChange={handleCouponChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              required
            />
          </div>
          <div>
            <label
              htmlFor="type"
              className="block text-sm font-medium text-gray-700"
            >
              Discount Type
            </label>
            <select
              id="type"
              name="type"
              value={newCoupon.type}
              onChange={handleCouponChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 bg-white"
              required
            >
              <option value="percentage">Percentage</option>
              <option value="fixed">Fixed Amount</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="value"
              className="block text-sm font-medium text-gray-700"
            >
              Discount Value
            </label>
            <input
              type="number"
              id="value"
              name="value"
              value={newCoupon.value}
              onChange={handleCouponChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              required
            />
          </div>
          <div>
            <label
              htmlFor="expiryDate"
              className="block text-sm font-medium text-gray-700"
            >
              Expiry Date
            </label>
            <input
              type="date"
              id="expiryDate"
              name="expiryDate"
              value={newCoupon.expiryDate}
              onChange={handleCouponChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Create Coupon
          </button>
        </form>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Create Flash Sale</h2>
        <form onSubmit={handleCreateFlashSale} className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Sale Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={flashSale.name}
              onChange={handleFlashSaleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              required
            />
          </div>
          <div>
            <label
              htmlFor="startDate"
              className="block text-sm font-medium text-gray-700"
            >
              Start Date
            </label>
            <input
              type="datetime-local"
              id="startDate"
              name="startDate"
              value={flashSale.startDate}
              onChange={handleFlashSaleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              required
            />
          </div>
          <div>
            <label
              htmlFor="endDate"
              className="block text-sm font-medium text-gray-700"
            >
              End Date
            </label>
            <input
              type="datetime-local"
              id="endDate"
              name="endDate"
              value={flashSale.endDate}
              onChange={handleFlashSaleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              required
            />
          </div>
          <div>
            <label
              htmlFor="discount"
              className="block text-sm font-medium text-gray-700"
            >
              Discount Percentage
            </label>
            <input
              type="number"
              id="discount"
              name="discount"
              value={flashSale.discount}
              onChange={handleFlashSaleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              required
              min="0"
              max="100"
            />
          </div>
          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
          >
            Create Flash Sale
          </button>
        </form>
      </div>

      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <h2 className="text-xl font-semibold p-6 bg-gray-50 border-b">
          Active Coupons
        </h2>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Code
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Type
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Value
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Expiry Date
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {coupons.map((coupon) => (
              <tr key={coupon.id}>
                <td className="px-6 py-4 whitespace-nowrap">{coupon.code}</td>
                <td className="px-6 py-4 whitespace-nowrap capitalize">
                  {coupon.type}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {coupon.type === "percentage"
                    ? `${coupon.value}%`
                    : `$${coupon.value}`}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {coupon.expiryDate}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Promotions;
