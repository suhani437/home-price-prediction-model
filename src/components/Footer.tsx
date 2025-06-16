
import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-800 text-white py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-gray-300">
            © {year} HomePricer. Built by Suhani Bora, Shivanshi Rawat, Mahak Santokhi, and Saniya Bisht.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
