import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Briefcase } from 'lucide-react';
import GithubIcon from './icons/GithubIcon';
import LinkedinIcon from './icons/LinkedinIcon';
import Lanyard from './3d/Lanyard';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-white">
      {/* Light subtle grid background */}
      <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#e5e7eb 1px, transparent 1px)', backgroundSize: '32px 32px', opacity: 0.5 }}></div>
      
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center w-full relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, staggerChildren: 0.15 }}
          className="space-y-6"
        >
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-purple-200 bg-purple-50 text-purple-700 text-xs font-bold uppercase tracking-wider"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-purple-600 animate-ping"></span>
            Available for new roles
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight text-gray-900 tracking-tight">
              Building <span className="text-gradient">Flutter apps</span> that solve real problems.
            </h1>
            <h2 className="text-lg lg:text-xl text-gray-600 font-medium">
              Mobile Developer focused on clean UI, scalable architecture, and production-ready code.
            </h2>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-gray-500 text-base max-w-xl leading-relaxed"
          >
            I’m Sadhana, a developer who turns complex ideas into functional, beautiful mobile applications using Flutter, Dart, Riverpod, REST APIs, and modern development workflows.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-wrap items-center gap-3 pt-4"
          >
            <a href="#projects" className="flex items-center gap-2 px-6 py-3 bg-black text-white font-bold rounded-lg hover:bg-gray-800 transition-colors group text-sm shadow-md hover:-translate-y-0.5 transform duration-200">
              Explore Projects
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="/resume.pdf" download="Sadhana_Chaudhary_Resume.pdf" className="flex items-center gap-2 px-6 py-3 bg-white border border-gray-300 hover:bg-gray-50 text-gray-900 font-semibold rounded-lg transition-colors hover:-translate-y-0.5 transform duration-200 text-sm">
              <Download size={16} />
              Read Resume
            </a>
          </motion.div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative lg:h-[500px] w-full flex justify-center items-center"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-purple-100 to-indigo-50 rounded-2xl transform rotate-3 scale-95 -z-10 cursor-grab active:cursor-grabbing shadow-lg border border-purple-100 overflow-hidden">
            {/* Decorative Metal Pin to cover the browser's WebGL crash icon area */}
            <div className="absolute -top-1 -left-1 z-20 w-10 h-10 flex items-center justify-center pointer-events-none">
              <div className="w-6 h-6 bg-gradient-to-br from-gray-300 to-gray-600 rounded-full shadow-[0_2px_4px_rgba(0,0,0,0.3)] border border-gray-400 flex items-center justify-center">
                <div className="w-2 h-2 bg-gradient-to-tr from-gray-700 to-gray-900 rounded-full shadow-inner"></div>
              </div>
            </div>
            
            <Suspense fallback={null}>
              <Lanyard />
            </Suspense>
          </div>
          
          <div className="relative pointer-events-none">
            <img 
              src="/profile.png" 
              alt="Sadhana Chaudhary" 
              className="w-64 h-64 lg:w-[320px] lg:h-[320px] object-cover rounded-2xl border border-gray-200 shadow-xl relative z-10"
            />
            
            {/* Floating Github Link */}
            <motion.a
              href="https://github.com/sadhanachaudhary"
              target="_blank" rel="noreferrer"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              className="absolute -right-6 lg:-right-8 top-10 z-20 flex items-center justify-center w-14 h-14 bg-white border border-gray-200 rounded-full text-gray-900 shadow-lg hover:border-purple-300 pointer-events-auto"
            >
              <GithubIcon size={24} />
            </motion.a>

            {/* Floating LinkedIn Link */}
            <motion.a
              href="https://linkedin.com/in/sadhana-chaudhary-a04625254"
              target="_blank" rel="noreferrer"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 }}
              className="absolute -right-6 lg:-right-8 bottom-20 z-20 flex items-center justify-center w-14 h-14 bg-[#0A66C2] border border-[#0A66C2] rounded-full text-white shadow-lg hover:bg-[#004182] pointer-events-auto"
            >
              <LinkedinIcon size={24} />
            </motion.a>

            {/* Floating Stat Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2 }}
              className="absolute -left-8 lg:-left-12 bottom-12 z-20 bg-white border border-gray-200 shadow-lg px-4 py-3 rounded-xl flex items-center gap-3 pointer-events-auto"
            >
              <div className="p-2 bg-purple-100 text-purple-700 rounded-lg">
                <Briefcase size={20} />
              </div>
              <div>
                <p className="text-gray-900 font-bold text-sm">3+ Apps</p>
                <p className="text-gray-500 text-[10px] font-bold uppercase tracking-wider">In Production</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
