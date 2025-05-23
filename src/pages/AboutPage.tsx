import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
const AboutPage = () => {
  return <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">About HomePricer</h1>
            
            <div className="prose prose-lg">
              <p className="text-gray-600 mb-6">
                House Pricer is a mini project developed by a group of four BCA of 'f1' students — Suhani Bora, Shivanshi Rawat, Mahak Santokhi, and Saniya Bisht. The aim of this project is to predict house prices using linear regression, a fundamental machine learning technique.
              </p>
              
              <h2 className="text-2xl font-bold mt-10 mb-4">Our Technology</h2>
              <p className="text-gray-600 mb-4"></p>
              <p className="text-gray-600 mb-6"></p>
              
              <p className="text-gray-600 mb-4">
                <strong>Programming Language:</strong> Python was used to build the core machine learning model.
              </p>
              <p className="text-gray-600 mb-4">
                <strong>Machine Learning Library:</strong> Scikit-learn was implemented for building and training the linear regression model.
              </p>
              <p className="text-gray-600 mb-4">
                <strong>Dataset:</strong> A historical home dataset was used to train and evaluate the model.
              </p>
              <p className="text-gray-600 mb-4">
                <strong>Development Platforms:</strong> VS Code and Replit were used for coding, testing, and collaboration.
              </p>
              <p className="text-gray-600 mb-6">
                <strong>Frontend Technologies:</strong> HTML, CSS, JavaScript, and React were used to design a responsive and interactive user interface.
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
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>;
};
export default AboutPage;