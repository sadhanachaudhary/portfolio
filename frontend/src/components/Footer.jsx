import React from 'react';
import { Code2 } from 'lucide-react';
import EvilEye from './ui/EvilEye';

const Footer = () => {
  return (
    <footer className="bg-white py-12 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        <div className="flex flex-col md:flex-row items-center gap-6 mb-6 md:mb-0">
          <div className="flex items-center gap-2">
            <Code2 size={24} className="text-gray-900" />
            <span className="font-bold text-lg text-gray-900">
              Sadhana<span className="text-purple-600">.dev</span>
            </span>
          </div>
          <div className="hidden md:block w-px h-8 bg-gray-200"></div>
          <div className="transform scale-50 md:scale-75 origin-left">
            <EvilEye size={60} />
          </div>
        </div>
        
        <p className="text-gray-500 text-sm font-medium">
          © {new Date().getFullYear()} Sadhana Chaudhary. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
