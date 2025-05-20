import { useEffect, useState } from "react";
import { auth } from "./firebase"; // your firebase config file
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      alert("Logged out successfully");
      navigate("/");
    } catch (error) {
      alert("Error logging out: " + error.message);
    }
  };

  const handleLogin = () => {
    navigate("/");
  };

  return (
    <header className="flex justify-between items-center bg-[#305680] text-white p-4 border-b">
      <h1 className="text-2xl font-semibold"></h1>
      <div className="flex items-center gap-4">
        {/* <span>{user ? `${user.email} (Tenant administrator)` : "Guest"}</span> */}
        {user ? (
          <button
            onClick={handleLogout}
            className="border px-3 py-1 rounded cursor-pointer hover:bg-white hover:text-[#305680] transition"
          >
            Logout
          </button>
        ) : (
          <button
            onClick={handleLogin}
            className="border px-3 py-1 rounded cursor-pointer hover:bg-white hover:text-[#305680] transition"
          >
            sign in
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
