
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-blue-100 to-purple-100 py-12 md:py-20 relative overflow-hidden">
      {/* Decorative elements - college-style doodles */}
      <div className="absolute top-10 right-10 rotate-12 text-4xl font-bold text-purple-300 opacity-30">ML!</div>
      <div className="absolute bottom-10 left-10 -rotate-12 text-4xl font-bold text-blue-300 opacity-30">STATS</div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 font-['Comic_Sans_MS',_cursive]">
              <span className="text-purple-600">Predict</span> House Prices <span className="text-blue-500">with ML!</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg border-l-4 border-yellow-400 pl-4">
              Get accurate home price estimates using our linear regression model trained on real estate data. Final project for CS 301! 🏠📊
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-purple-500 hover:bg-purple-600 transform hover:rotate-1 transition-transform">
                <Link to="/predict" className="text-white">Try It Out!</Link>
              </Button>
              <Button variant="outline" size="lg" className="border-2 border-dashed border-blue-400">
                How It Works
              </Button>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="relative">
              {/* Messy blob animations */}
              <div className="absolute -top-6 -left-6 w-64 h-64 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
              <div className="absolute top-20 right-20 w-40 h-40 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
              
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="Beautiful house" 
                  className="rounded-lg shadow-2xl w-full object-cover transform -rotate-2 border-4 border-white"
                />
                {/* Sticky note effect */}
                <div className="absolute -bottom-4 -right-4 bg-yellow-200 p-3 transform rotate-6 shadow-md w-32 text-center text-sm font-bold">
                  Dream house analysis!
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
