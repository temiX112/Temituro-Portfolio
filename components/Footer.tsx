import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black/50 py-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} David Temituro. All rights reserved.
        </p>
        <div className="flex gap-6">
           <a href="#" className="text-gray-500 hover:text-cyan text-sm transition-colors">Privacy Policy</a>
           <a href="#" className="text-gray-500 hover:text-cyan text-sm transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;