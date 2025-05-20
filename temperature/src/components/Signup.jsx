import { useState } from "react";
import { auth, googleProvider } from "./firebase";
import {
  createUserWithEmailAndPassword,
  signInWithPopup
} from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";

import { FcGoogle } from "react-icons/fc";
import { MdEmail } from "react-icons/md";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const adminEmail = "admin@example.com"; // your admin email here

  const signupWithEmail = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      alert("Signed up with Email!");

      // Redirect based on email
      if (user.email === adminEmail) {
        navigate("/admin");
      } else {
        navigate("/admin"); // or any other route for normal users
      }
    } catch (err) {
      alert(err.message);
    }
  };

  const signupWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      alert("Signed up with Google!");

      if (user.email === adminEmail) {
        navigate("/admin");
      } else {
        navigate("/admin"); // redirect for normal users
      }
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-4 bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96 space-y-4">
        <h2 className="text-2xl font-bold text-center">Sign Up</h2>
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 border rounded"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 border rounded"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={signupWithEmail}
          className="w-full bg-blue-500 text-white py-2 rounded cursor-pointer flex items-center justify-center space-x-2"
        >
          <MdEmail size={20} />
          <span>Sign Up with Email</span>
        </button>

        <button
          onClick={signupWithGoogle}
          className="w-full bg-red-500 text-white py-2 rounded cursor-pointer flex items-center justify-center space-x-2"
        >
          <FcGoogle size={20} className="bg-white" />
          <span>Sign Up with Google</span>
        </button>

        <p className="text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 hover:underline">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
