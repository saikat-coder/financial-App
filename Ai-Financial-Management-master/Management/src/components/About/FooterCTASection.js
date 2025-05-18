// const FooterCTASection = () => {
//     return (
//       <section className="bg-blue-900 text-white py-12">
//         <div className="container mx-auto px-6 lg:px-20 text-center">
//           <h2 className="text-3xl font-bold mb-4">
//             Ready to Take Control of Your Finances?
//           </h2>
//           <p className="text-lg mb-8">
//             Join us today and make smarter financial decisions with ease.
//           </p>
//           <a
//             href="/signup"
//             className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-bold transition"
//           >
//             Get Started
//           </a>
//         </div>
//       </section>
//     );
//   };
  
//   export default FooterCTASection;
  

// // export const Footer = () => {
// //     return (
// //       <footer className="bg-blue-600 text-white p-4 text-center">
// //         <p>&copy; 2025 AI Financial Advisory. All rights reserved.</p>
// //       </footer>
// //     );
// //   };
// import React from "react";

// const FooterSection = () => {
//   return (
//     <footer className="bg-blue-900 text-white py-8">
//       <div className="container mx-auto px-6 lg:px-20 flex flex-col lg:flex-row items-center justify-between gap-8">
//         {/* Image Section */}
//         <div className="flex-shrink-0">
//           <img
//             src="https://via.placeholder.com/400x250"
//             alt="Analytics visualization"
//             className="rounded-lg shadow-lg"
//           />
//         </div>

//         {/* Search and Social Media Section */}
//         <div className="flex flex-col items-center lg:items-start space-y-4">
//           {/* Search Bar */}
//           <div className="relative w-64">
//             <input
//               type="text"
//               placeholder="Search..."
//               className="w-full py-2 px-4 rounded-lg bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>

//           {/* Social Media Icons */}
//           <div className="flex space-x-4">
//             <a
//               href="https://instagram.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-pink-500 hover:text-pink-600 transition"
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="currentColor"
//                 viewBox="0 0 24 24"
//                 className="w-6 h-6"
//               >
//                 <path d="M12 0C8.75 0 8.339.012 7.053.072 5.766.131 4.757.305 3.964.582c-.802.278-1.481.651-2.147 1.317C.66 2.647.287 3.326.009 4.128c-.278.801-.452 1.811-.511 3.098C-.012 8.35 0 8.75 0 12s.012 3.649.072 4.937c.059 1.287.233 2.297.511 3.098.278.802.651 1.481 1.317 2.147.666.666 1.345 1.039 2.147 1.317.801.278 1.811.452 3.098.511C8.339 23.988 8.75 24 12 24s3.649-.012 4.937-.072c1.287-.059 2.297-.233 3.098-.511.802-.278 1.481-.651 2.147-1.317.666-.666 1.039-1.345 1.317-2.147.278-.801.452-1.811.511-3.098.06-1.288.072-1.699.072-4.937s-.012-3.649-.072-4.937c-.059-1.287-.233-2.297-.511-3.098-.278-.802-.651-1.481-1.317-2.147C21.353.66 20.674.287 19.872.009 19.071-.278 18.061-.452 16.774-.511 15.486-.072 15.075-.012 12 0zm0 5.859a6.141 6.141 0 1 1 0 12.281 6.141 6.141 0 0 1 0-12.281zm7.788-1.122a1.44 1.44 0 1 1 0 2.878 1.44 1.44 0 0 1 0-2.878zm-7.788 3.594a4.546 4.546 0 1 0 0 9.092 4.546 4.546 0 0 0 0-9.092z" />
//               </svg>
//             </a>
//             <a
//               href="https://facebook.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-blue-500 hover:text-blue-600 transition"
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="currentColor"
//                 viewBox="0 0 24 24"
//                 className="w-6 h-6"
//               >
//                 <path d="M12 2.04c-5.523 0-10 4.478-10 10 0 5.02 3.663 9.158 8.437 9.88v-6.99H8.897v-2.89h1.54v-1.565c0-1.54.903-2.39 2.282-2.39.66 0 1.351.119 1.351.119v1.482H13.38c-1.056 0-1.388.655-1.388 1.324v1.43h2.35l-.375 2.89h-1.975V22c4.774-.723 8.437-4.861 8.437-9.88 0-5.522-4.477-10-10-10z" />
//               </svg>
//             </a>
//             <a
//               href="https://twitter.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-blue-400 hover:text-blue-500 transition"
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="currentColor"
//                 viewBox="0 0 24 24"
//                 className="w-6 h-6"
//               >
//                 <path d="M8.29 20c7.547 0 11.675-6.254 11.675-11.675 0-.177-.004-.353-.012-.53A8.349 8.349 0 0 0 22 5.92a8.19 8.19 0 0 1-2.357.646A4.11 4.11 0 0 0 21.448 4c-.812.482-1.713.832-2.668 1.02A4.093 4.093 0 0 0 15.447 3c-2.266 0-4.102 1.837-4.102 4.102 0 .322.036.635.106.935C7.728 7.9 4.1 6.055 1.671 3.149c-.352.604-.555 1.308-.555 2.062 0 1.424.726 2.683 1.826 3.418a4.077 4.077 0 0 1-1.856-.513v.052c0 1.99 1.417 3.646 3.296 4.018a4.108 4.108 0 0 1-1.849.07c.522 1.63 2.038 2.816 3.832 2.85a8.233 8.233 0 0 1-5.093 1.757c-.33 0-.654-.02-.977-.058a11.613 11.613 0 0 0 6.29 1.844" />
//               </svg>
//             </a>
//           </div>
//         </div>

//         {/* Footer Text */}
//         <div className="text-center lg:text-right">
//           <p className="text-gray-400">
//             Copyright © 2024, All Rights Reserved.
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default FooterSection;
import React from "react";

const FooterCTASection = () => {
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

export default FooterCTASection;
