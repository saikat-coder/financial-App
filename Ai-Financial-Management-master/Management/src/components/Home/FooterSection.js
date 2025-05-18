
import React from "react";

const FooterSection = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8">
      <div className="container mx-auto px-6 lg:px-20 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Branding Section */}
        <div>
          <h1 className="text-2xl font-bold text-white mb-4">AI Financial Advisory</h1>
          <p className="text-sm">
            Empowering you with AI-driven insights to manage your finances effectively and achieve your financial goals.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-4">Quick Links</h2>
          <ul>
            <li className="mb-2">
              <a href="#features" className="hover:text-green-400 transition">Features</a>
            </li>
            <li className="mb-2">
              <a href="#about" className="hover:text-green-400 transition">About Us</a>
            </li>
            <li className="mb-2">
              <a href="#pricing" className="hover:text-green-400 transition">Pricing</a>
            </li>
            <li className="mb-2">
              <a href="#contact" className="hover:text-green-400 transition">Contact</a>
            </li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-4">Follow Us</h2>
          <p className="text-sm mb-4">Stay connected on our social platforms:</p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-300 hover:text-green-400 transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path d="M22.46 6c-.77.35-1.6.59-2.46.69a4.3 4.3 0 0 0 1.89-2.37 8.51 8.51 0 0 1-2.71 1.03 4.28 4.28 0 0 0-7.29 3.9 12.15 12.15 0 0 1-8.8-4.46 4.28 4.28 0 0 0 1.32 5.72A4.24 4.24 0 0 1 2 9.6v.06a4.28 4.28 0 0 0 3.43 4.19 4.3 4.3 0 0 1-1.92.07 4.28 4.28 0 0 0 4 2.97 8.6 8.6 0 0 1-5.33 1.84 8.68 8.68 0 0 1-1.02-.06 12.14 12.14 0 0 0 6.57 1.93c7.89 0 12.2-6.53 12.2-12.2v-.55A8.65 8.65 0 0 0 24 4.59a8.45 8.45 0 0 1-2.54.7z" />
              </svg>
            </a>
            <a href="#" className="text-gray-300 hover:text-green-400 transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.04c-5.52 0-10 4.48-10 10 0 4.99 3.66 9.12 8.44 9.88v-7h-2.54v-2.88h2.54v-2.2c0-2.5 1.48-3.88 3.74-3.88 1.08 0 2.2.19 2.2.19v2.42h-1.24c-1.22 0-1.6.76-1.6 1.54v1.94h2.72l-.44 2.88h-2.28v7c4.78-.76 8.44-4.89 8.44-9.88 0-5.52-4.48-10-10-10z" />
              </svg>
            </a>
            <a href="#" className="text-gray-300 hover:text-green-400 transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path d="M9 8H5V12H9V8ZM11 8V12H15V8H11ZM17 8H21V12H17V8ZM9 14H5V18H9V14ZM11 14V18H15V14H11ZM17 14H21V18H17V14Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} AI Financial Advisory. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
