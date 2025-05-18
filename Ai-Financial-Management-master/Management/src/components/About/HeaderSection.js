
      // const HeaderSection = () => {
      //   return (
      //     <header className="bg-blue-900 text-white py-12 flex flex-col md:flex-row items-center">
      //       <div className="container mx-auto px-6 flex-grow text-center md:text-left">
      //         <h1 className="text-4xl font-bold mb-4">About Us</h1>
      //         <p className="text-lg text-gray-200">
      //           Empowering your financial journey with smart, efficient, and secure solutions. 
      //           We provide a range of innovative financial products and services designed to meet your unique needs. 
      //           Our commitment to customer satisfaction and excellence drives us to continuously improve and deliver exceptional value.
      //         </p>
      //         <button className="bg-white text-blue-900 px-4 py-2 rounded-md mt-6 hover:bg-blue-100">
      //           Learn More
      //         </button>
      //       </div>
      //       <div className="hidden md:block md:w-1/2">
      //         <img 
      //           src="/path/to/your/image.jpg" 
      //           alt="About Us" 
      //           className="object-cover h-96 w-full rounded-md" 
      //         /> 
      //       </div>
      //     </header>
      //   );
      // };
      
      // export default HeaderSection;

  
      const HeaderSection = () => {
        return (
          <header className="bg-blue-900 text-white py-12 flex flex-col items-center justify-center"> 
            <div className="container mx-auto px-6 text-center">
              <h1 className="text-4xl font-bold mb-4">About Us</h1>
              <p className="text-lg text-gray-200 max-w-xl mx-auto">
                Empowering your financial journey with smart, efficient, and secure solutions. 
                We provide a range of innovative financial products and services designed to meet your unique needs. 
                Our commitment to customer satisfaction and excellence drives us to continuously improve and deliver exceptional value.
              </p>
              <button 
                className="bg-white text-blue-900 px-4 py-2 rounded-md mt-6 hover:bg-blue-100 transition duration-300 ease-in-out"
              >
                Explore Now
              </button>
            </div>
          </header>
        );
      };
      
      export default HeaderSection;
  