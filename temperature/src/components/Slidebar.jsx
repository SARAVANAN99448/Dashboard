import { useState } from "react";
import { FaUser, FaMicrochip } from "react-icons/fa";
import icon from "../assets/image.png";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <aside className="w-64 bg-[#305680] text-white h-screen p-4">
      <div className="text-xl font-bold mb-6 flex items-center justify-center">
        <img src={icon} alt="Logo" className="w-32" />
      </div>

      <div>
        <div
          onClick={() => toggleSection("user")}
          className="cursor-pointer mb-2 hover:bg-black p-2 rounded flex items-center justify-between"
        >
          <span className="flex items-center gap-2">
            <FaUser /> User Section
          </span>
          <span>{openSection === "user" ? "▾" : "▸"}</span>
        </div>
        {openSection === "user" && (
          <ul className="ml-6 space-y-1 text-sm">
  <li className="hover:bg-black p-2 rounded">
    <Link to="/customers">Customers</Link>
  </li>
  
</ul>
        )}
      </div>

      <div>
        <div
          onClick={() => toggleSection("device")}
          className="cursor-pointer mb-2 hover:bg-black p-2 rounded flex items-center justify-between"
        >
          <span className="flex items-center gap-2">
            <FaMicrochip /> Devices Section
          </span>
          <span>{openSection === "device" ? "▾" : "▸"}</span>
        </div>
        {/* {openSection === "device" && (
          <ul className="ml-6 space-y-1 text-sm">
            <li className="hover:bg-black p-2 rounded">Device Profiles</li>
            <li className="hover:bg-black p-2 rounded">Assets</li>
            <li className="hover:bg-black p-2 rounded">Gateways</li>
          </ul>
        )} */}
      </div>
    </aside>
  );
};

export default Sidebar;
