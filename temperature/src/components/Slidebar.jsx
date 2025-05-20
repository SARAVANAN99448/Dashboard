import { useState, useEffect } from "react";
import { FaUser, FaMicrochip } from "react-icons/fa";
import icon from "../assets/image.png";
import { Link } from "react-router-dom";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";

const Sidebar = () => {
  const [openSection, setOpenSection] = useState(null);
  const [user, setUser] = useState(null);

  // Your admin email here:
  const adminEmail = "admin@example.com";

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  // If no user logged in, hide sidebar
  if (!user) return null;

  // Check if user is admin
  const isAdmin = user.email === adminEmail;

  return (
    <aside className="w-64 bg-[#305680] text-white p-4">
      <div className="text-xl font-bold mb-6 flex items-center justify-center">
        <img src={icon} alt="Logo" className="w-32" />
      </div>

      <div>
        <div className="text-start text-xl pl-2 pb-2">
          <span><Link to="/admin">Dashboard</Link></span>
        </div>

        {isAdmin && (
          <>
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
              <Link to="/customers">
                <p className="ml-6 space-y-1 text-sm hover:bg-black p-2 rounded cursor-pointer">
                  Customers
                </p>
              </Link>
            )}

            <div
              onClick={() => toggleSection("device")}
              className="cursor-pointer mb-2 hover:bg-black p-2 rounded flex items-center justify-between"
            >
              <span className="flex items-center gap-2">
                <FaMicrochip /> Devices Section
              </span>
              <span>{openSection === "device" ? "▾" : "▸"}</span>
            </div>
          </>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
