import { FaUser } from 'react-icons/fa';
import { FaPlus } from "react-icons/fa";
import { IoReloadCircleSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';

const devices = [
  {
    createdTime: "2025-01-11 17:27:24",
    Name: "IAQ_10001",
    Deviceprofile: "valve",
    Customer: "",
    city: "",
  },
  {
    createdTime: "2025-01-11 15:05:51",
    Name: "IAQ_10002",
    Deviceprofile: "valve",
    Customer: "",
    city: "",
  },
  {
    createdTime: "2025-01-07 19:43:31",
    Name: "IAQ_10003",
    Deviceprofile: "water sensor",
    Customer: "",
    city: "",
  },
  {
    createdTime: "2025-01-04 17:24:54",
    Name: "IAQ_10004",
    Deviceprofile: "valve",
    Customer: "",
    city: "",
  },
  {
    createdTime: "2025-01-04 15:27:14",
    Name: "IAQ_10005",
    Deviceprofile: "valve",
    Customer: "",
    city: "",
  },
  {
    createdTime: "2025-01-04 15:27:14",
    Name: "IAQ_10006",
    Deviceprofile: "valve",
    Customer: "",
    city: "",
  },
  {
    createdTime: "2025-01-04 15:27:14",
    Name: "IAQ_10007",
    Deviceprofile: "valve",
    Customer: "",
    city: "",
  },
  {
    createdTime: "2025-01-04 15:27:14",
    Name: "IAQ_10008",
    Deviceprofile: "PH sensor",
    Customer: "",
    city: "",
  },
  {
    createdTime: "2025-01-04 15:27:14",
    Name: "IAQ_10009",
    Deviceprofile: "",
    Customer: "",
    city: "",
  },
  {
    createdTime: "2025-01-04 15:27:14",
    Name: "IAQ_10010",
    Deviceprofile: "",
    Customer: "",
    city: "",
  },
];

const Devices = () => {
  return (
    <div className="p-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold mb-4">Devices</h2>
        <div>
          <ul className="flex gap-3">
            <Link to={""}>
              <FaPlus size={20} color="grey" className="cursor-pointer rounded-lg" />
            </Link>
            <IoReloadCircleSharp size={20} color="grey" className="cursor-pointer rounded-lg" />
            <FaUser size={20} color="grey" className="cursor-pointer rounded-lg" />
          </ul>
        </div>
      </div>
      <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
        <table className="min-w-full text-sm text-left text-gray-700">
          <thead className="bg-gray-100 text-gray-800">
            <tr>
              <th className="px-4 py-2">Created Time</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Device Profile</th>
              <th className="px-4 py-2">Customer</th>
              <th className="px-4 py-2">City</th>
            </tr>
          </thead> 
          <tbody>
            {devices.map((device, idx) => (
              <tr key={idx} className="border-t hover:bg-gray-100">
                <td className="px-4 py-2">{device.createdTime}</td>
                <td className="px-4 py-2">
                  <Link 
                    to={`/dashboard/${device.Name}`} 
                    className="text-blue-600 hover:underline"
                  >
                    {device.Name}
                  </Link>
                </td>
                <td className="px-4 py-2">{device.Deviceprofile || "-"}</td>
                <td className="px-4 py-2">{device.Customer || "-"}</td>
                <td className="px-4 py-2">{device.city || "-"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Devices;
