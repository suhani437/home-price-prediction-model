
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="border-b border-gray-200 bg-white sticky top-0 z-10">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="font-bold text-xl text-purple-600 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
            House<span className="text-blue-500">Pricer</span>
          </Link>
        </div>
        <nav className="flex items-center space-x-8">
          <Link to="/" className="text-gray-700 hover:text-purple-600">Home</Link>
          <Link to="/about" className="text-gray-700 hover:text-purple-600">About</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
