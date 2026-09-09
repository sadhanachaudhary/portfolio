import React from 'react';
import { Code2 } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white py-12 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center gap-2 mb-4 md:mb-0">
          <Code2 size={24} className="text-gray-900" />
          <span className="font-bold text-lg text-gray-900">
            Sadhana<span className="text-purple-600">.dev</span>
          </span>
        </div>
        
        <p className="text-gray-500 text-sm font-medium">
          © {new Date().getFullYear()} Sadhana Chaudhary. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
