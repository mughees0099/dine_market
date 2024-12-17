import { useState } from "react";

const Settings = () => {
  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "john@example.com",
    password: "",
  });

  const [store, setStore] = useState({
    name: "My Awesome Store",
    logo: "/path/to/logo.png",
    address: "123 Main St, City, Country",
  });

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleStoreChange = (e) => {
    const { name, value } = e.target;
    setStore({ ...store, [name]: value });
  };

  const handleProfileSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send this data to your backend
    console.log("Profile updated:", profile);
  };

  const handleStoreSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send this data to your backend
    console.log("Store settings updated:", store);
  };

  return (
    <div className="space-y-8">
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Update Profile</h2>
        <form onSubmit={handleProfileSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={profile.name}
              onChange={handleProfileChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={profile.email}
              onChange={handleProfileChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              New Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={profile.password}
              onChange={handleProfileChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              placeholder="Leave blank to keep current password"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Update Profile
          </button>
        </form>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Store Settings</h2>
        <form onSubmit={handleStoreSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="storeName"
              className="block text-sm font-medium text-gray-700"
            >
              Store Name
            </label>
            <input
              type="text"
              id="storeName"
              name="name"
              value={store.name}
              onChange={handleStoreChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              required
            />
          </div>
          <div>
            <label
              htmlFor="logo"
              className="block text-sm font-medium text-gray-700"
            >
              Logo
            </label>
            <input
              type="file"
              id="logo"
              name="logo"
              onChange={handleStoreChange}
              className="mt-1 block w-full"
              accept="image/*"
            />
          </div>
          <div>
            <label
              htmlFor="address"
              className="block text-sm font-medium text-gray-700"
            >
              Store Address
            </label>
            <textarea
              id="address"
              name="address"
              value={store.address}
              onChange={handleStoreChange}
              rows="3"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 bg-white"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
          >
            Update Store Settings
          </button>
        </form>
      </div>
    </div>
  );
};

export default Settings;
