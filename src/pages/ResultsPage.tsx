import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ResultsDisplay from '../components/ResultsDisplay';
const ResultsPage = () => {
  return <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Your Price Prediction Results</h1>
            
          </div>

          <ResultsDisplay />
        </div>
      </main>
      <Footer />
    </div>;
};
export default ResultsPage;