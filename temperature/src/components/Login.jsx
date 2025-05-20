import { useState } from "react";
import { auth, googleProvider } from "./firebase";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Admin email to check against
  const adminEmail = "admin@example.com";

  const loginWithEmail = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      if (user.email === adminEmail) {
        alert("Logged in as Admin!");
        navigate("/admin");
      } else {
        navigate("/admin");
        // Navigate normal user somewhere else or stay here
        // navigate("/user-dashboard");
      }
    } catch (err) {
      alert("Login failed: " + err.message);
    }
  };

  const loginWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      if (user.email === adminEmail) {
        alert("Logged in with Google as Admin!");
        navigate("/admin");
      } else {
        alert("Access denied. Only admin can log in.");
        await signOut(auth); // Sign out unauthorized user
      }
    } catch (err) {
      alert("Login failed: " + err.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-4 bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96 space-y-4">
        <h2 className="text-2xl font-bold text-center">Login</h2>
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 border rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 border rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          onClick={loginWithEmail}
          className="w-full bg-blue-500 text-white py-2 rounded cursor-pointer flex items-center justify-center space-x-2"
        >
          <MdEmail size={20} />
          <span>Login with Email</span>
        </button>
        <button
          onClick={loginWithGoogle}
          className="w-full bg-red-500 text-white py-2 rounded cursor-pointer flex items-center justify-center space-x-2"
        >
          <FcGoogle size={20} className="bg-white" />
          <span>Login with Google</span>
        </button>

        <p className="text-center text-sm text-gray-600">
          Don’t have an account?{" "}
          <Link to="/" className="text-blue-600 hover:underline">
            Sign up here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
