
import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/contact/contact", formData);
      if (response.status === 200) {
        toast.success("Message sent successfully!", {
          position: "top-center",
          autoClose: 3000,
        });
        setFormData({ name: "", email: "", message: "" }); // Clear form
      }
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Failed to send message. Please try again.",
        {
          position: "top-center",
          autoClose: 3000,
        }
      );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-blue-300 to-gray-100 flex items-center justify-center py-10 px-6">
      <div className="flex flex-col md:flex-row w-11/12 max-w-5xl bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Left Content Section */}
        <div className="md:w-1/2 bg-gradient-to-br from-blue-700 to-blue-500 text-white flex flex-col justify-center p-8">
          <h1 className="text-3xl font-bold mb-4">Get in Touch</h1>
          <p className="text-sm">
            We'd love to hear from you! Whether you have a question about our services, need support, or just want to say hello, we're here for you.
          </p>
          <p className="mt-4 text-sm">
            Fill out the form, and we’ll get back to you as soon as possible.
          </p>
        </div>

        {/* Right Form Section */}
        <div className="md:w-1/2 p-6 md:p-10 flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-gray-700 text-center">Contact Us</h2>
          <p className="text-center text-sm text-gray-500 mb-6">
            We’d love to hear from you! Fill out the form below.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Input */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-600">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="mt-1 block w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
              />
            </div>

            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="mt-1 block w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
              />
            </div>

            {/* Message Input */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-600">
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message here"
                className="mt-1 block w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ContactUsPage;
