
import React from 'react';

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      title: 'Enter Property Details',
      description: 'Provide information about the house including location, size, bedrooms, bathrooms, and other relevant features.'
    },
    {
      number: '02',
      title: 'AI Processing',
      description: 'Our machine learning algorithm analyzes the data and compares it with thousands of similar properties in the area.'
    },
    {
      number: '03',
      title: 'Get Your Estimate',
      description: 'Receive an accurate price prediction along with a detailed breakdown of factors influencing the value.'
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get an accurate house price prediction in just three simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white rounded-lg shadow-lg p-8 h-full relative z-10 border border-gray-100">
                <div className="text-4xl font-bold text-blue-100 mb-4">{step.number}</div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                  <svg className="h-8 w-8 text-primary-blue" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
