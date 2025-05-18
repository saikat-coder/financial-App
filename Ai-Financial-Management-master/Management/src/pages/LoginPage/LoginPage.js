import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await axios.post("http://localhost:5000/auth/login", formData);

    console.log("Login Response:", response);

    Cookies.set("token", response.data.token, { path: "/" });

    if (response.status === 200) {
      // ✅ Save user data in localStorage
      localStorage.setItem("user", JSON.stringify(response.data.user));

      toast.success("Login successful! Redirecting...", {
        position: "top-center",
        autoClose: 3000,
      });

      setTimeout(() => {
        navigate("/dashboardFormPage");
      }, 1000);
    }
  } catch (error) {
    toast.error(
      error.response?.data?.message || "Login failed! Please try again.",
      {
        position: "top-center",
        autoClose: 3000,
      }
    );
  }
};


  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-blue-400 to-cyan-500 p-4">
      <div className="flex flex-col md:flex-row w-full max-w-5xl bg-white rounded-lg shadow-2xl overflow-hidden">
        {/* Left Image */}
        <div
          className="md:w-1/2 bg-cover bg-center hidden md:block"
          style={{
            backgroundImage: `url('https://img.freepik.com/vetores-premium/ilustracao-do-conceito-de-login-seguro_251005-445.jpg')`,
          }}
        />

        {/* Right Form */}
        <div className="md:w-1/2 w-full p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-2">Welcome Back</h2>
          <p className="text-center text-sm text-gray-600 mb-6">
            Please enter your credentials to log in
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email Field */}
            <div className="relative">
              <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Password Field */}
            <div className="relative">
              <FaLock className="absolute left-3 top-3 text-gray-400" />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Options */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-500" />
                <span className="text-gray-700">Remember Me</span>
              </label>
              <a href="/forgot-password" className="text-blue-600 hover:underline">
                Forgot Password?
              </a>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition"
            >
              Login
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center my-4">
            <hr className="flex-grow border-gray-300" />
            <span className="px-4 text-gray-500 text-sm">or</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          {/* Google Login Button */}
          <button
            type="button"
            className="w-full flex items-center justify-center border border-gray-300 py-2 rounded-lg hover:bg-gray-100 transition"
          >
            <FcGoogle className="mr-2 text-xl" />
            <span className="text-sm">Continue with Google</span>
          </button>

          {/* Signup Link */}
          <p className="text-center text-sm text-gray-600 mt-6">
            Don’t have an account?{" "}
            <a href="/signup" className="text-blue-600 font-semibold hover:underline">
              Sign up here
            </a>
          </p>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
