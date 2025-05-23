
import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-200 py-10">
      <div className="container mx-auto px-4">
        <div className="border-t border-gray-800 mt-8 pt-6 flex flex-col md:flex-row justify-center items-center">
          <p className="text-gray-400 text-sm">&copy; {year} bca f1.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
