import { useState } from "react";

const AddCustomers = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    country: "",
    city: "",
    state: "",
    zip: "",
    address1: "",
    address2: "",
    phone: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAdd = () => {
    alert("Customer added!");
    console.log(formData);
  };

  const handleCancel = () => {
    setFormData({
      title: "",
      description: "",
      country: "",
      city: "",
      state: "",
      zip: "",
      address1: "",
      address2: "",
      phone: "",
    });
  };

  return (
    <div className="w-full p-6 bg-white shadow-sm rounded">
      <h2 className="text-xl font-semibold mb-4">Add customer</h2>

      <input
        name="title"
        required
        placeholder="Title*"
        className="w-full p-3 mb-3 border rounded"
        onChange={handleChange}
        value={formData.title}
      />

      <textarea
        name="description"
        placeholder="Description"
        className="w-full p-3 mb-3 border rounded"
        onChange={handleChange}
        value={formData.description}
      />

      <select
        name="country"
        className="w-full p-3 mb-3 border rounded"
        onChange={handleChange}
        value={formData.country}
      >
        <option value="">Country</option>
        <option value="USA">USA</option>
        <option value="India">India</option>
      </select>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-3">
        <select
          name="city"
          className="p-3 border rounded"
          onChange={handleChange}
          value={formData.city}
        >
          <option value="">City</option>
        </select>
        <select
          name="state"
          className="p-3 border rounded"
          onChange={handleChange}
          value={formData.state}
        >
          <option value="">State / Province</option>
        </select>
        <select
          name="zip"
          className="p-3 border rounded"
          onChange={handleChange}
          value={formData.zip}
        >
          <option value="">Zip / Postal Code</option>
        </select>
      </div>

      <input
        name="address1"
        placeholder="Address"
        className="w-full p-3 mb-3 border rounded"
        onChange={handleChange}
        value={formData.address1}
      />
      <input
        name="address2"
        placeholder="Address 2"
        className="w-full p-3 mb-3 border rounded"
        onChange={handleChange}
        value={formData.address2}
      />

      <div className="flex items-center gap-2 mb-4">
        <span className="text-lg">🇺🇸</span>
        <input
          name="phone"
          placeholder="Phone"
          className="flex-1 p-3 border rounded"
          onChange={handleChange}
          value={formData.phone}
        />
      </div>

      <div className="flex justify-end gap-3">
        <button
          onClick={handleCancel}
          className="px-4 py-2 border rounded hover:bg-gray-100"
        >
          Cancel
        </button>
        <button
          onClick={handleAdd}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default AddCustomers;
