
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="border-b border-dashed border-purple-300 bg-white sticky top-0 z-10">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="font-bold text-xl text-purple-600 flex items-center font-['Comic_Sans_MS',_cursive]">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 animate-pulse text-yellow-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
            House<span className="text-blue-500">Pricer</span>
          </Link>
          <span className="ml-2 text-xs bg-green-100 px-2 py-1 rounded-full text-green-800">v0.5 Beta</span>
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-gray-700 hover:text-purple-600 underline decoration-wavy decoration-2 decoration-yellow-300 underline-offset-4">Home</Link>
          <Link to="/about" className="text-gray-700 hover:text-purple-600 underline decoration-wavy decoration-2 decoration-yellow-300 underline-offset-4">About</Link>
        </nav>
        <div>
          <Button variant="outline" className="hidden md:inline-flex mr-2 border-dashed border-purple-300">How it works</Button>
          <Button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 transform hover:-rotate-1 transition-transform">Get Started</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
