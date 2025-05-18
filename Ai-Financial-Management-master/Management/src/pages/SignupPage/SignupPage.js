import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const SignupPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  // Handle Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Form Validation
  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email.";
    }
    if (!formData.password.trim()) newErrors.password = "Password is required.";
    else if (formData.password.length < 6)
      newErrors.password = "Password must be at least 6 characters.";
    if (!formData.confirmPassword.trim())
      newErrors.confirmPassword = "Confirm your password.";
    else if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match.";
    return newErrors;
  };

  // Handle Form Submission
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const validationErrors = validate();
  //   setErrors(validationErrors);

  //   if (Object.keys(validationErrors).length === 0) {
  //     try {
  //       const response = await axios.post(
  //         "http://localhost:5000/auth/register",
  //         formData,
  //         {
  //           headers: {
  //             "Content-Type": "application/json",
  //           },
  //         }
  //       );

  //       if (response.status === 201) {
  //         toast.success("Signup successful! Redirecting to login page...", {
  //           position: "top-center",
  //           autoClose: 3000,
  //         });
  //         setTimeout(() => navigate("/login"), 3000);
  //       }
  //     } catch (error) {
  //       console.error("Signup Error:", error.response || error.message);
  //       toast.error(
  //         error.response?.data?.message || "Signup failed! Please try again.",
  //         {
  //           position: "top-center",
  //           autoClose: 3000,
  //         }
  //       );
  //     }
  //   }
  // };


  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
        try {
            const response = await axios.post("http://localhost:5000/auth/register", formData, {
                headers: { "Content-Type": "application/json" },
            });

            if (response.status === 201) {
                toast.success("Signup successful! Redirecting to login page...", {
                    position: "top-center",
                    autoClose: 3000,
                });
                setTimeout(() => navigate("/login"), 3000);
            }
        } catch (error) {
            console.error("Signup Error:", error.response || error.message);
            
            // Handle Duplicate Email Error
            if (error.response?.data?.error?.includes("duplicate key")) {
                toast.error("Email already exists! Please login instead.", {
                    position: "top-center",
                    autoClose: 3000,
                });
            } else {
                toast.error(error.response?.data?.message || "Signup failed! Please try again.", {
                    position: "top-center",
                    autoClose: 3000,
                });
            }
        }
    }
};


  return (
    <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 flex items-center justify-center min-h-screen px-6">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden md:flex max-w-5xl w-full">
        {/* Image Section */}
        <div className="hidden md:block md:w-1/2">
          <img
            src="https://img.freepik.com/free-vector/sign-up-concept-illustration_114360-7865.jpg?w=900&t=st=1674211394~exp=1674214994~hmac=2648999a1d45c87b0a3c12235d637d5c3f9d7e6fc125dc7e8322bd949fe49c26"
            alt="Signup Illustration"
            className="object-cover h-full w-full"
          />
        </div>

        {/* Signup Form Section */}
        <div className="w-full md:w-1/2 p-10">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Create Your Account
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 ${
                  errors.fullName ? "border-red-500 focus:ring-red-500" : "focus:ring-blue-500"
                }`}
              />
              {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 ${
                  errors.email ? "border-red-500 focus:ring-red-500" : "focus:ring-blue-500"
                }`}
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 ${
                  errors.password ? "border-red-500 focus:ring-red-500" : "focus:ring-blue-500"
                }`}
              />
              {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 ${
                  errors.confirmPassword
                    ? "border-red-500 focus:ring-red-500"
                    : "focus:ring-blue-500"
                }`}
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>
              )}
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 rounded-lg font-bold hover:bg-blue-600 transition duration-300"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SignupPage;

