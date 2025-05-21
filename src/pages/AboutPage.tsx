
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">About HomePricer</h1>
            
            <div className="prose prose-lg">
              <p className="text-gray-600 mb-6">
                HomePricer is an advanced house price prediction platform that uses machine learning
                to provide accurate real estate valuations. Our mission is to make property valuation
                accessible, transparent, and data-driven for everyone.
              </p>
              
              <h2 className="text-2xl font-bold mt-10 mb-4">Our Technology</h2>
              <p className="text-gray-600 mb-4">
                We use linear regression, a proven machine learning algorithm, to analyze vast amounts
                of real estate data and identify the key factors that influence property prices in
                different markets.
              </p>
              <p className="text-gray-600 mb-6">
                Our model is trained on thousands of property transactions and is constantly updated
                to reflect the latest market trends and conditions.
              </p>
              
              <h2 className="text-2xl font-bold mt-10 mb-4">The Data</h2>
              <p className="text-gray-600 mb-4">
                We source our data from multiple reliable real estate databases, ensuring a comprehensive
                and accurate foundation for our prediction model. Our dataset includes:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-600">
                <li>Historical home sales data</li>
                <li>Property characteristics (size, bedrooms, bathrooms, etc.)</li>
                <li>Location information and neighborhood statistics</li>
                <li>Market trends and economic indicators</li>
              </ul>
              
              <h2 className="text-2xl font-bold mt-10 mb-4">How Linear Regression Works</h2>
              <p className="text-gray-600 mb-4">
                Linear regression is a statistical method used to model the relationship between a dependent
                variable (house price) and one or more independent variables (features like square footage,
                number of bedrooms, etc.).
              </p>
              <p className="text-gray-600 mb-4">
                The algorithm creates a linear equation that best fits the data, allowing us to predict prices
                for new properties based on their features. The model continuously improves as more data becomes available.
              </p>
              
              <h2 className="text-2xl font-bold mt-10 mb-4">Contact Us</h2>
              <p className="text-gray-600">
                Have questions about our prediction model or want to learn more about HomePricer?
                Feel free to <a href="/contact" className="text-primary-blue hover:underline">contact us</a>.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
