
import React from 'react';

const Features = () => {
  const features = [
    {
      title: "Machine Learning Powered",
      description: "Our prediction model uses advanced linear regression algorithms trained on extensive housing data.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 3v18"></path>
          <rect x="3" y="8" width="18" height="12" rx="2"></rect>
          <path d="M2 6h20"></path>
          <path d="M7 15v2"></path>
          <path d="M17 15v2"></path>
          <path d="M12 17v2"></path>
          <path d="M7 11v2"></path>
          <path d="M17 11v2"></path>
          <path d="M12 13v2"></path>
        </svg>
      ),
    },
    {
      title: "Real-Time Analysis",
      description: "Get instant price predictions based on the latest market trends and property features.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 6 12 12 16 14"></polyline>
        </svg>
      ),
    },
    {
      title: "Comprehensive Inputs",
      description: "Consider all relevant factors like location, size, amenities, and market conditions for accurate predictions.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
        </svg>
      ),
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How Our Prediction Works</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Using the power of machine learning and data analysis to give you the most accurate house price predictions possible.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="text-primary-blue mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
