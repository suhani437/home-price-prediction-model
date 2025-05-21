
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="border-b bg-white sticky top-0 z-10">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="font-bold text-xl text-primary-blue flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
            HomePricer
          </Link>
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-gray-700 hover:text-primary-blue">Home</Link>
          <Link to="/about" className="text-gray-700 hover:text-primary-blue">About</Link>
        </nav>
        <div>
          <Button variant="outline" className="hidden md:inline-flex mr-2">How it works</Button>
          <Button className="bg-primary-blue hover:bg-blue-700">Get Started</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
