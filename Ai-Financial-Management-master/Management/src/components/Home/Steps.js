// import React from 'react';

// const Steps = () => {
//   return (
//     <div className="bg-gradient-to-r from-blue-500 to-purple-500 min-h-screen flex flex-col items-center justify-center">
//       <h1 className="text-4xl font-bold mb-8 text-white">How It Works</h1>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         <div className="flex flex-col items-center md:items-start md:justify-center">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             <div className="flex flex-col items-center justify-center bg-white rounded-lg p-6 shadow-md">
//               <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-blue-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-10h-5a1 1 0 01-1-1v-2a1 1 0 00-1-1h-3a2 2 0 00-2 2v8a2 2 0 002 2h3a1 1 0 001 1v2m-6-9v2a1 1 0 001 1h2a1 1 0 001-1v-2m0-6v2a1 1 0 001 1h2a1 1 0 001-1v-2" />
//               </svg>
//               <h2 className="text-xl font-semibold mb-4">Sign Up for Free</h2>
//               <p className="text-gray-700">It's easy - no credit card or commitment required.</p>
//             </div>

//             <div className="flex flex-col items-center justify-center bg-white rounded-lg p-6 shadow-md">
//               <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-blue-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14" />
//               </svg>
//               <h2 className="text-xl font-semibold mb-4">Make a Money Plan</h2>
//               <p className="text-gray-700">Add your accounts and expenses, set savings targets, and share your plan with loved ones.</p>
//             </div>

//             <div className="flex flex-col items-center justify-center bg-white rounded-lg p-6 shadow-md">
//               <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-blue-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" />
//                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13l-3-3m0 0l-3 3m3-3v12" />
//               </svg>
//               <h2 className="text-xl font-semibold mb-4">Enjoy Less Stress</h2>
//               <p className="text-gray-700">Start feeling confident, content, and secure in your financial life. You might even sleep better.</p>
//             </div>
//           </div>
//         </div>

//         <div className="md:flex md:items-center md:justify-center">
//           {/* Your image here */}
//           <img src="https://cdn.prod.website-files.com/640f69143ec11b21d42015c6/6754d6950a834d8433241515_app_devices_lineup_blurple%20(2)-p-500.avif" alt="Side Image" className="w-full md:w-auto md:max-w-md" />
//         </div>
//       </div>

//       <button className="mt-8 px-8 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-700">Click to Sign Up</button>
//     </div>
//   );
// };

// export default Steps;
import React from "react";

const HowItWorks = () => {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-purple-500py-12">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">How It Works</h2>
            <div className="space-y-6">
              {/* Step 1 */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-500 text-white flex items-center justify-center rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 9V5.25m0 0L12 9m3.75-3.75l3.75 3.75M19.5 13.5H4.5m3.75 4.5v3.75m0 0L12 15m-3.75 6.75-3.75-3.75M4.5 10.5h15"
                    />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-gray-800">Sign up for free</h3>
                  <p className="text-gray-600">
                    It’s easy—no credit card or commitment required.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-green-500 text-white flex items-center justify-center rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 12c0 7.5-7.5 9-7.5 9s-7.5-1.5-7.5-9a7.5 7.5 0 0 1 15 0z"
                    />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-gray-800">Make a money plan</h3>
                  <p className="text-gray-600">
                    Add your accounts and expenses, set savings targets, and share your plan with loved ones.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-red-500 text-white flex items-center justify-center rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 15l3.75-3.75L8.25 7.5M15.75 15l3.75-3.75-3.75-3.75"
                    />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-gray-800">Enjoy less stress</h3>
                  <p className="text-gray-600">
                    Start feeling confident, content, and secure in your financial life. You might even sleep better.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <a
                href="#signup"
                className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition"
              >
                Click to Signup
              </a>
            </div>
          </div>

          {/* Image Section */}
          <div className="flex justify-center">
            <img
              src="https://cdn.prod.website-files.com/640f69143ec11b21d42015c6/6754d6950a834d8433241515_app_devices_lineup_blurple%20(2)-p-500.avif"
              alt="Financial management on devices"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;


