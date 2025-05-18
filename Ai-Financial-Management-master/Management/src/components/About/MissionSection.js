const MissionSection = () => {
    return (
      <section className="py-12 px-6 lg:px-20">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Our Mission</h2>
              <p className="text-gray-700 text-lg mb-6">
                At <span className="font-semibold">AI Financial Advisory</span>, our mission is to revolutionize how people manage their finances. 
                We aim to empower individuals to take control of their financial future through cutting-edge AI technology, secure data handling, and a user-friendly experience.
              </p>
              <p className="text-gray-700 text-lg">
                Whether it’s tracking expenses, setting financial goals, or making data-driven decisions, we are here to simplify and enhance your financial management journey.
              </p>
            </div>
            <div className="lg:w-1/2">
              <img
                src="https://files.oaiusercontent.com/file-Rgi7DJsjbVoes8nf4EWGJ8?se=2025-01-19T16%3A22%3A10Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D8cc64936-530a-4a87-9c99-f2f6c7429425.webp&sig=vHBB5WO%2B0FqIo2ohATiRJdseeJyVIF8apg3PutmdLrI%3D"
                alt="Our Mission"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default MissionSection;
  