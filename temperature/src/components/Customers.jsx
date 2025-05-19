import { FaUser } from 'react-icons/fa';
import { TbLayoutDashboardFilled } from "react-icons/tb";
import { FaPlus } from "react-icons/fa";
import { IoReloadCircleSharp } from "react-icons/io5";

const customers = [
  {
    createdTime: "2025-01-11 17:27:24",
    title: "testttttt",
    email: "",
    country: "",
    city: "",
  },
  {
    createdTime: "2025-01-11 15:05:51",
    title: "Customer-DATASEND2",
    email: "",
    country: "",
    city: "",
  },
  {
    createdTime: "2025-01-07 19:43:31",
    title: "Customer-DATASEND",
    email: "",
    country: "",
    city: "",
  },
  {
    createdTime: "2025-01-04 17:24:54",
    title: "TCS-Customer",
    email: "TCS@deepvisionrobotics.org",
    country: "",
    city: "",
  },
  {
    createdTime: "2025-01-04 15:27:14",
    title: "Customer A",
    email: "",
    country: "",
    city: "",
  },
];

const Customers = () => {
  return (
    <div className="p-6">
        <div className="flex items-center justify-between">
      <h2 className="text-2xl font-bold mb-4">Customers</h2>
      <div>
        <ul className='flex gap-3'>
            <FaPlus size={20} color="grey" className='cursor-pointer rounded-lg'  />
            <IoReloadCircleSharp size={20} color="grey" className='cursor-pointer rounded-lg' />
            <FaUser size={20} color="grey" className='cursor-pointer rounded-lg' />
        </ul>
      </div>
      </div>
      <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
        <table className="min-w-full text-sm text-left text-gray-700">
          <thead className="bg-gray-100 text-gray-800">
            <tr>
              <th className="px-4 py-2">Created Time</th>
              <th className="px-4 py-2">Title</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Country</th>
              <th className="px-4 py-2">City</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer, idx) => (
              <tr key={idx} className="border-t">
                <td className="px-4 py-2">{customer.createdTime}</td>
                <td className="px-4 py-2">{customer.title}</td>
                <td className="px-4 py-2">{customer.email || "-"}</td>
                <td className="px-4 py-2">{customer.country || "-"}</td>
                <td className="px-4 py-2">{customer.city || "-"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Customers;
