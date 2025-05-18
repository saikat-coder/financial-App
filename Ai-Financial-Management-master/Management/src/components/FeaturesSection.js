// 
export const FeaturesSection = () => {
    const features = [
      {
        title: "Expense Tracking",
        description: "Monitor your daily, weekly, and monthly expenses.",
        image: "https://cdn.prod.website-files.com/640f69143ec11b21d42015c6/67350e4e45fdeceb0586f6c3_img_features_networth%20(1)-p-1600.avif", // Replace with actual image URL
      },
      {
        title: "Goal Setting",
        description: "Set and achieve financial milestones effectively.",
        image: "https://cdn.prod.website-files.com/640f69143ec11b21d42015c6/67350d63e28f42309450d27b_img_features_targets%20(2)%20(1)-p-1600.avif", // Replace with actual image URL
      },
      {
        title: "AI Insights",
        description: "Receive tailored financial advice based on your spending patterns.",
        image: "https://via.placeholder.com/150/ai-insights", // Replace with actual image URL
      },
      {
        title: "Secure Data",
        description: "Your data is safe with our advanced encryption.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCCFkdJ-djDYXF3Px3CtwxzYs2LA24Hehy5A&s", // Replace with actual image URL
      },
      {
        title: "Reports",
        description: "Get detailed financial reports to stay on track.",
        image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQylk1JiE1H62IizwPgm7XqPJWFuC1WuRCWR9u7stGDHwG4s6FG", // Replace with actual image URL
      },
    ];
  
    return (
      <section id="features" className="p-8 bg-white">
        <h2 className="text-3xl font-bold text-center mb-8">Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 border rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 hover:transform hover:-translate-y-2"
            >
              {/* Image Section */}
              <div className="mb-4 flex justify-center">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-24 h-24 object-cover"
                />
              </div>
              {/* Content Section */}
              <h3 className="text-xl font-bold mb-2 text-center">{feature.title}</h3>
              <p className="text-gray-600 text-center">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  