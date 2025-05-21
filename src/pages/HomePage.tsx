
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Features />
        <HowItWorks />
        
        <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Your Home's Value?</h2>
            <p className="max-w-2xl mx-auto mb-8 text-blue-100">
              Our machine learning model provides accurate price predictions based on the latest market data.
            </p>
            <a 
              href="/predict" 
              className="inline-block bg-white text-blue-700 px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors"
            >
              Predict Now
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
