import React, { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Magnet from './ui/Magnet';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-200 py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-[90rem] mx-auto px-6 flex items-center justify-between">
        <Magnet padding={20}>
          <a href="#" className="flex items-center gap-2 group">
            <div className="text-gray-900 group-hover:text-purple-600 transition-colors">
              <Code2 size={28} strokeWidth={2.5} />
            </div>
            <span className="font-bold text-xl tracking-tight text-gray-900">
              Sadhana<span className="text-purple-600">.dev</span>
            </span>
          </a>
        </Magnet>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-6">
            {navLinks.map((link) => (
              <Magnet padding={15} key={link.name}>
                <a 
                  href={link.href}
                  className="text-sm font-medium text-gray-600 hover:text-purple-600 transition-colors inline-block"
                >
                  {link.name}
                </a>
              </Magnet>
            ))}
          </div>
          <Magnet padding={20}>
            <a 
              href="/resume.pdf" 
              download="Sadhana_Chaudhary_Resume.pdf"
              className="px-5 py-2.5 bg-black hover:bg-gray-800 text-white text-sm font-semibold rounded-lg transition-colors inline-block"
            >
              Download Resume
            </a>
          </Magnet>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-gray-900 p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-200 overflow-hidden shadow-lg absolute w-full"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-gray-600 font-medium hover:text-purple-600 text-lg py-2 border-b border-gray-100"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="/resume.pdf" 
                className="mt-2 text-center py-3 bg-black text-white font-bold rounded-lg w-full"
              >
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
