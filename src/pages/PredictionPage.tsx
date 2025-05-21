
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HousePredictionForm from '../components/HousePredictionForm';

const PredictionPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Predict Your House Price</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Fill out the form below with your property details to get an accurate price prediction
              using our machine learning algorithm.
            </p>
          </div>

          <HousePredictionForm />
          
          <div className="mt-16 bg-white p-6 rounded-lg shadow-md max-w-3xl mx-auto">
            <h3 className="text-xl font-semibold mb-4">About Our Prediction Model</h3>
            <p className="text-gray-600 mb-4">
              Our house price prediction model uses linear regression, a popular machine learning algorithm,
              to analyze the relationship between various property features and their impact on market value.
            </p>
            <p className="text-gray-600">
              The model is trained on thousands of real estate transactions to identify patterns and correlations,
              allowing it to make accurate predictions based on the features you provide.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PredictionPage;
