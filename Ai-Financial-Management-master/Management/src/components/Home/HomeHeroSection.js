// //  export const ImageWithTextSection = () => {
// //     return (
// //       <section id="about" className="flex flex-col md:flex-row items-center justify-between p-8 bg-gray-100">
// //         <img src="https://via.placeholder.com/600x400" alt="About" className="rounded-lg shadow-lg w-full md:w-1/2 mb-4 md:mb-0" />
// //         <div className="md:ml-8 text-center md:text-left">
// //           <h2 className="text-2xl font-bold mb-4">About Our Service</h2>
// //           <p className="text-gray-700">We provide personalized financial advice using cutting-edge AI technology. Track your expenses, set financial goals, and achieve your dreams with ease.</p>
// //         </div>
// //       </section>
// //     );
// //   };
// // Import React
// import React from "react";

// const HomeHeroSection = () => {
//   return (
//     <section className="relative bg-gradient-to-b from-blue-600 to-blue-500 text-white overflow-hidden">
//       {/* Wave Background */}
//       <div className="absolute inset-0 z-0">
//         <svg className="w-full h-auto" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
//           <path fill="#ffffff" fillOpacity="1" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,202.7C672,203,768,181,864,160C960,139,1056,117,1152,112C1248,107,1344,117,1392,122.7L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
//         </svg>
//       </div>

//       {/* Content Section */}
//       <div className="relative z-10 container mx-auto px-6 lg:px-20 py-16 flex flex-col-reverse lg:flex-row items-center">
//         {/* Text Section */}
//         <div className="text-center lg:text-left lg:w-1/2">
//           <h1 className="text-4xl lg:text-5xl font-bold mb-4">
//             How will you spend <span className="underline decoration-green-400">your money life?</span>
//           </h1>
//           <p className="text-lg mb-6">
//             Create a friendly, flexible plan and spend it well with AI-powered financial advisory.
//           </p>
//           <button className="bg-green-500 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-green-400 transition">
//             Start Your Free Trial
//           </button>
//           <p className="text-sm mt-2">It's easy! No credit card required.</p>
//         </div>

//         {/* Image Section */}
//         <div className="lg:w-1/2 flex justify-center">
//           <div className="relative">
//             <img
//               src="https://cdn.prod.website-files.com/640f69143ec11b21d42015c6/6502e96f8b7ff92feac8c8ab_hero-phone-p-800.png"
//               alt="Mobile Phone"
//               className="w-64 lg:w-80 drop-shadow-xl"
//             />
//             {/* Floating Money */}
//             <div className="absolute -top-10 -right-10 animate-bounce">
//               <img
//                 src="https://cdn.prod.website-files.com/640f69143ec11b21d42015c6/672188c512264aa81f920114_flying_money_narrow_firefly_hero.svg"
//                 alt="Money"
//                 className="w-16"
//               />
//             </div>
           
           
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HomeHeroSection;



// import React from "react";

// const HomeHeroSection = () => {
//   return (
//     <section className="relative bg-gradient-to-b from-blue-600 to-blue-500 text-white overflow-hidden">
//       {/* Wave Background */}
//       <div className="absolute inset-0 z-0">
//         <svg
//           className="w-full h-auto"
//           viewBox="0 0 1440 320"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path
//             fill="#ffffff"
//             fillOpacity="1"
//             d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,202.7C672,203,768,181,864,160C960,139,1056,117,1152,112C1248,107,1344,117,1392,122.7L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
//           ></path>
//         </svg>
//       </div>

//       {/* Content Section */}
//       <div className="relative z-10 container mx-auto px-6 lg:px-20 py-16 flex flex-col-reverse lg:flex-row items-center">
//         {/* Text Section */}
//         <div className="text-center lg:text-left lg:w-1/2">
//           <h1 className="text-4xl lg:text-5xl font-bold mb-4">
//             How will you spend{" "}
//             <span className="underline decoration-green-400">your money life?</span>
//           </h1>
//           <p className="text-lg mb-6">
//             Create a friendly, flexible plan and spend it well with AI-powered
//             financial advisory.
//           </p>
//           <button className="bg-green-500 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-green-400 transition">
//             Start Your Free Trial
//           </button>
//           <p className="text-sm mt-2">It's easy! No credit card required.</p>
//         </div>

//         {/* Image Section */}
//         <div className="lg:w-1/2 flex justify-center relative">
//           <div className="relative w-64 lg:w-80 drop-shadow-xl bg-white p-4 rounded-lg">
//             {/* Phone Image */}
//             <img
//               src="https://cdn.prod.website-files.com/640f69143ec11b21d42015c6/6502e96f8b7ff92feac8c8ab_hero-phone-p-800.png"
//               alt="Mobile Phone"
//               className="w-full"
//             />
//             {/* Floating Money Inside Phone */}
//             <div className="absolute top-10 left-8 animate-bounce">
//               <img
//                 src="https://cdn.prod.website-files.com/640f69143ec11b21d42015c6/672188c512264aa81f920114_flying_money_narrow_firefly_hero.svg"
//                 alt="Money"
//                 className="w-8"
//               />
//             </div>
//             <div className="absolute top-20 left-16 animate-bounce delay-150">
//               <img
//                 src="https://cdn.prod.website-files.com/640f69143ec11b21d42015c6/672188c512264aa81f920114_flying_money_narrow_firefly_hero.svg"
//                 alt="Money"
//                 className="w-6"
//               />
//             </div>
//             <div className="absolute bottom-10 right-10 animate-bounce delay-300">
//               <img
//                 src="https://cdn.prod.website-files.com/640f69143ec11b21d42015c6/672188c512264aa81f920114_flying_money_narrow_firefly_hero.svg"
//                 alt="Money"
//                 className="w-10"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HomeHeroSection;



import React from "react";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-b from-blue-600 to-blue-600 text-white overflow-hidden">
      {/* Background Waves */}
      {/* <div className="absolute inset-0 z-0">
        <svg
          className="w-full h-auto"
          viewBox="0 0 1440 320"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,202.7C672,203,768,181,864,160C960,139,1056,117,1152,112C1248,107,1344,117,1392,122.7L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </div> */}

      {/* Content Section */}
      <div className="relative z-10  container mx-auto px-6 lg:px-20 py-16 flex flex-col-reverse lg:flex-row items-center">
        {/* Text Section */}
        <div className="text-center lg:text-left lg:w-1/2">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4 leading-tight">
            How will you spend{" "}
            <span className="underline decoration-green-400">your money life?</span>
          </h1>
          <p className="text-lg mb-6">
            Create a friendly, flexible plan and spend it well with us.
          </p>
          <button className="bg-green-500 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-green-400 transition">
            Explore Now
          </button>
          <p className="text-sm mt-2">It's easy! No credit card required.</p>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2 flex justify-center relative">
          <div className="relative w-64 lg:w-80 drop-shadow-xl">
            {/* Phone Image */}
            <img
              src="https://cdn.prod.website-files.com/640f69143ec11b21d42015c6/6502e96f8b7ff92feac8c8ab_hero-phone-p-800.png"
              alt="Mobile Phone"
              className="w-full"
            />

            {/* Floating Money Outside Phone */}
            <img
              src="https://cdn.prod.website-files.com/640f69143ec11b21d42015c6/672188c512264aa81f920114_flying_money_narrow_firefly_hero.svg"
              alt="Floating Money"
              className="absolute top-0 right-10 animate-bounce w-10"
            />
            <img
              src="https://cdn.prod.website-files.com/640f69143ec11b21d42015c6/672188c512264aa81f920114_flying_money_narrow_firefly_hero.svg"
              alt="Floating Money"
              className="absolute bottom-10 left-10 animate-bounce w-12"
            />
            <img
              src="https://cdn.prod.website-files.com/640f69143ec11b21d42015c6/672188c512264aa81f920114_flying_money_narrow_firefly_hero.svg"
              alt="Floating Money"
              className="absolute top-16 left-16 animate-bounce w-8"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
