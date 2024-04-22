import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-500 text-white py-4 mt-auto">
      <div className="container mx-auto px-4">
        <p>&copy; {new Date().getFullYear()} My Coding Blog</p>
      </div>
    </footer>
  );
};

export default Footer;
