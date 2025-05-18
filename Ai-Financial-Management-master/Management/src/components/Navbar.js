

// // // import React, { useContext } from 'react';
// // // import { Link } from 'react-router-dom';
// // // import { FaShoppingCart, FaLeaf,    FaUserPlus } from 'react-icons/fa';
// // // import { CartContext } from '../context/CartContext';

// // // const Navbar = () => {
// // //   const { cartCount } = useContext(CartContext);

// // //   return (
// // //     <nav className="bg-green-800 text-white shadow-md">
// // //       <div className="container mx-auto px-4 py-3 flex justify-between items-center">
// // //         <Link to="/" className="flex items-center space-x-2 text-xl font-bold">
// // //           <FaLeaf className="text-yellow-300" />
// // //           <span>TreeShop</span>
// // //         </Link>
// // //         <ul className="hidden md:flex space-x-6">
// // //           <li><Link to="/" className="hover:text-yellow-300">Home</Link></li>
// // //           <li><Link to="/products" className="hover:text-yellow-300">Products</Link></li>
// // //           <li><Link to="/contact" className="hover:text-yellow-300">Contact</Link></li>
// // //           <li><Link to="/login" className="hover:text-yellow-300">Login</Link></li>
// // //           <li>
// // //              <Link to="/signup" className="flex justify-center items-center space-x-1 hover:text-yellow-300">
// // //                <FaUserPlus />
// // //                <span>Signup</span>
// // //              </Link>
// // //           </li>
// // //         </ul>
// // //         <div className="relative">
// // //           <Link to="/cart" className="flex items-center">
// // //             <FaShoppingCart className="text-2xl" />
// // //             {cartCount > 0 && (
// // //               <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs px-2 rounded-full">
// // //                 {cartCount}
// // //               </span>
// // //             )}
// // //           </Link>
// // //         </div>
// // //       </div>
// // //     </nav>
// // //   );
// // // };

// // // export default Navbar;






// import React from "react";


// const Navbar = () => {
//   return (
//     <header className="bg-blue-600 text-white shadow-md">
//       <div className="container mx-auto flex justify-between items-center py-4 px-6">
//         {/* Logo */}
//         <div className="text-2xl font-bold">
//           <a href="#home" className="hover:underline">AI Finance</a>
//         </div>

//         {/* Navigation Links */}
//         <nav>
//           <ul className="flex space-x-6">
//             <li><a href="#home" className="hover:underline">Home</a></li>
//             <li><a href="#about" className="hover:underline">About</a></li>
//             <li><a href="#contact" className="hover:underline">Contact</a></li>
//           </ul>
//         </nav>

//         {/* Buttons */}
//         <div className="space-x-4">
//           <a
//             href="#login"
//             className="bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-gray-100"
//           >
//             Login
//           </a>
//           <a
//             href="#signup"
//             className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600"
//           >
//             Sign Up
//           </a>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Navbar;


// import React from "react";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <header className="bg-blue-600 text-white shadow-md ">
//       <div className="container mx-auto flex justify-between items-center py-4 px-6">
//         {/* Logo */}
//         <div className="text-2xl font-bold">
//           <Link to="/" className="hover:underline">AI Finance</Link>
//         </div>

//         {/* Navigation Links */}
//         <nav>
//           <ul className="flex space-x-6">
//             <li><Link to="/" className="hover:underline">Home</Link></li>
//             <li><Link to="/about" className="hover:underline">About</Link></li>
//             <li><Link to="/contact" className="hover:underline">Contact</Link></li>
//           </ul>
//         </nav>

//         {/* Buttons */}
//         <div className="space-x-4">
//           <Link
//             to="/login"
//             className="bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-gray-100"
//           >
//             Login
//           </Link>
//           <Link
//             to="/signup"
//             className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600"
//           >
//             Sign Up
//           </Link>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Navbar;
/////////////////////////


import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [token, setToken] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const userToken = Cookies.get("token");
    setToken(userToken);
  }, []);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    Cookies.remove("token");
    setToken(null);
    navigate("/login");
  };

  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link to="/" className="hover:underline">
            AI Finance
          </Link>
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <ul className="flex space-x-6">
            <li>
              <Link to="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:underline">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Conditional Buttons */}
        <div className="hidden md:flex space-x-4">
          {!token ? (
            <>
              <Link
                to="/login"
                className="bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-gray-100"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600"
              >
                Sign Up
              </Link>
            </>
          ) : (
            <>
              <Link
                to="/dashboard"
                className="bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-gray-100"
              >
                Dashboard
              </Link>
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
              >
                Logout
              </button>
            </>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-blue-600">
          <nav>
            <ul className="flex flex-col space-y-2 p-4">
              <li>
                <Link to="/" className="block hover:underline" onClick={toggleMenu}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="block hover:underline" onClick={toggleMenu}>
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="block hover:underline" onClick={toggleMenu}>
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
          <div className="flex flex-col space-y-2 p-4">
            {!token ? (
              <>
                <Link
                  to="/login"
                  className="bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-gray-100 text-center"
                  onClick={toggleMenu}
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 text-center"
                  onClick={toggleMenu}
                >
                  Sign Up
                </Link>
              </>
            ) : (
              <>
                <Link
                  to="/dashboard"
                  className="bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-gray-100 text-center"
                  onClick={toggleMenu}
                >
                  Dashboard
                </Link>
                <button
                  onClick={() => {
                    handleLogout();
                    toggleMenu();
                  }}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 text-center"
                >
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

